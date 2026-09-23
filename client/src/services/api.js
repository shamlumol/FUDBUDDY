import { collections, restaurants as dbRestaurants, foods as dbFoods, offersData, userProfile, categories } from '../data/mockDatabase';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Simple Levenshtein distance for fuzzy matching typos
const getDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

const isFuzzyMatch = (text, keyword) => {
  if (!text) return false;
  text = text.toLowerCase();
  keyword = keyword.toLowerCase();
  if (text.includes(keyword)) return true;
  
  // Allow typos even for smaller words (>= 3 chars)
  if (keyword.length >= 3) {
    const maxDist = keyword.length <= 4 ? 1 : 2;
    const words = text.split(/[\s,.-]+/);
    for (const w of words) {
      if (Math.abs(w.length - keyword.length) <= 2) {
        if (getDistance(w, keyword) <= maxDist) return true;
      }
    }
  }
  return false;
};

export const getRestaurants = async (params = {}) => {
  await delay(300); // Simulate network latency
  
  let results = [...dbRestaurants];
  
  // Merge with custom restaurants from localStorage
  try {
    const custom = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
    results = [...results, ...custom];
  } catch(e) {}
  const { search, category, type, price, distance, rating, page = 1, limit = 10 } = params;

  if (search) {
    const q = search.toLowerCase();
    
    // First, check if the full exact query matches any of the tags (useful for the specific SEO keywords)
    let exactTagMatches = results.filter(r => {
      return r.tags && r.tags.some(tag => tag.toLowerCase().includes(q) || isFuzzyMatch(tag, q));
    });

    if (exactTagMatches.length > 0) {
      results = exactTagMatches;
    } else {
      const keywords = q.split(/\s+/).filter(k => k.length >= 2 && !['in', 'the', 'at', 'for', 'and'].includes(k));
      
      if (keywords.length > 0) {
        results = results.filter(r => {
          // Match if ALL keywords are found in name, location, cuisines, or tags (or foods)
          return keywords.every(k => {
            const matchesRest = isFuzzyMatch(r.name, k) || 
              isFuzzyMatch(r.location, k) || 
              isFuzzyMatch(r.cuisines, k) ||
              (r.tags && r.tags.some(tag => isFuzzyMatch(tag, k))) ||
              (r.dietary && r.dietary.some(d => isFuzzyMatch(d, k)));
              
            if (matchesRest) return true;
            
            // Also match if the restaurant serves a food that matches the keyword
            const restaurantFoods = dbFoods.filter(f => f.restaurantId === r.id);
            return restaurantFoods.some(f => 
              isFuzzyMatch(f.name, k) || 
              isFuzzyMatch(f.category, k) ||
              (f.tags && f.tags.some(tag => isFuzzyMatch(tag, k)))
            );
          });
        });
      } else {
        // Fallback to basic search
        results = results.filter(r => {
          const matchesRest = isFuzzyMatch(r.name, q) || isFuzzyMatch(r.location, q);
          if (matchesRest) return true;
          
          const restaurantFoods = dbFoods.filter(f => f.restaurantId === r.id);
          return restaurantFoods.some(f => isFuzzyMatch(f.name, q) || isFuzzyMatch(f.category, q));
        });
      }
    }
  }

  if (category) {
    const c = category.toLowerCase();
    results = results.filter(r => 
      (r.tags && r.tags.some(tag => tag.toLowerCase() === c)) || 
      (r.dietary && r.dietary.some(d => d.toLowerCase() === c))
    );
  }

  if (type) {
    const t = type.toLowerCase();
    results = results.filter(r => 
      (r.tags && r.tags.some(tag => tag.toLowerCase().includes(t))) || 
      (r.dietary && r.dietary.some(d => d.toLowerCase().includes(t))) ||
      ((r.cuisines && (Array.isArray(r.cuisines) ? r.cuisines.some(c => c.toLowerCase().includes(t)) : r.cuisines.toLowerCase().includes(t))))
    );
  }

  if (price) {
    // Exact match for 'SR < 50', etc. is tricky here if it's string based
    // But earlier I just generated price values like 50 for two, and generic $, $$, $$$. 
    // In our new requirements: 'Under SR 50', 'SR 50 - 150', 'SR 150+'
    // Let's implement that logic based on `priceValue` or parsing `costForTwo`.
    if (price === 'Under SR 50') {
      // parse number out of costForTwo
      results = results.filter(r => {
        const cost = parseInt(r.costForTwo.replace(/[^0-9]/g, ''));
        return cost < 50;
      });
    } else if (price === 'SR 50 - 150') {
      results = results.filter(r => {
        const cost = parseInt(r.costForTwo.replace(/[^0-9]/g, ''));
        return cost >= 50 && cost <= 150;
      });
    } else if (price === 'SR 150+') {
      results = results.filter(r => {
        const cost = parseInt(r.costForTwo.replace(/[^0-9]/g, ''));
        return cost > 150;
      });
    }
  }

  if (distance) {
    const distLimit = parseFloat(distance);
    results = results.filter(r => r.distanceValue <= distLimit);
  }

  if (rating) {
    const minRating = parseFloat(rating);
    results = results.filter(r => r.rating >= minRating);
  }

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum;
  const paginatedResults = results.slice(startIndex, endIndex);

  return {
    data: paginatedResults,
    total: results.length,
    page: pageNum,
    totalPages: Math.ceil(results.length / limitNum)
  };
};

export const getRestaurantById = async (id) => {
  await delay(300);
  const restaurant = dbRestaurants.find(r => r.id === parseInt(id));
  if (!restaurant) throw new Error('Restaurant not found');
  return restaurant;
};

export const getFoods = async (params = {}) => {
  await delay(300);
  
  let results = [...dbFoods];
  
  // Merge with custom foods from localStorage
  try {
    const custom = JSON.parse(localStorage.getItem('customFoods') || '[]');
    results = [...results, ...custom];
  } catch(e) {}
  const { search, category, type, price, sort, isVeg, isAvailable, distance, rating, page = 1, limit = 10 } = params;

  if (search) {
    const q = search.toLowerCase();
    
    // First, check if the full exact query matches any of the tags
    let exactTagMatches = results.filter(f => {
      return f.tags && f.tags.some(tag => tag.toLowerCase().includes(q) || isFuzzyMatch(tag, q));
    });

    if (exactTagMatches.length > 0) {
      results = exactTagMatches;
    } else {
      const keywords = q.split(/\s+/).filter(k => k.length >= 2 && !['in', 'the', 'at', 'for', 'and'].includes(k));
      
      if (keywords.length > 0) {
        results = results.filter(f => {
          return keywords.every(k => 
            isFuzzyMatch(f.name, k) || 
            isFuzzyMatch(f.category, k) || 
            isFuzzyMatch(f.restaurantName, k) ||
            (f.tags && f.tags.some(tag => isFuzzyMatch(tag, k)))
          );
        });
      } else {
        results = results.filter(f => 
          isFuzzyMatch(f.name, q) || 
          isFuzzyMatch(f.category, q) || 
          isFuzzyMatch(f.restaurantName, q)
        );
      }
    }
  }

  if (category) {
    const c = category.toLowerCase();
    results = results.filter(f => {
      const name = (f.name || '').toLowerCase();
      const catName = (f.category || '').toLowerCase();
      
      if (c === 'noodles') return name.includes('noodle') || name.includes('chow mein');
      if (c === 'soups') return name.includes('soup');
      if (c === 'salads') return name.includes('salad');
      if (c === 'drinks') return /(juice|shake|mocktail|coffee|tea|beverage|champagne|soda|mojito|lemonade)/.test(name);
      if (c === 'seafood') return /(fish|prawn|crab|squid|sea bream)/.test(name) || catName.includes('seafood');
      if (c === 'indian') return catName.includes('indian');
      if (c === 'chinese') return catName.includes('chinese') || name.includes('manchurian') || name.includes('schezwan') || name.includes('chilli');
      if (c === 'biriyani') return name.includes('biriyani') || name.includes('biryani');
      if (c === 'desserts') return /(ice cream|jamun|gad bad|fruit salad|falloda|payasam)/.test(name) || catName.includes('dessert');
      if (c === 'breakfast') return catName.includes('breakfast');
      if (c === 'tandoori') return catName.includes('tandoori') || name.includes('tikka') || name.includes('kebab');
      if (c === 'appetizers') return catName.includes('appetizer') || catName.includes('starter') || name.includes('65') || name.includes('fry') || name.includes('lollipop');

      return catName.includes(c) || name.includes(c);
    });
  }

  if (type) {
    const t = type.toLowerCase();
    results = results.filter(f => 
      (f.tags && f.tags.some(tag => tag.toLowerCase().includes(t))) ||
      (f.category && f.category.toLowerCase().includes(t)) ||
      (f.name && f.name.toLowerCase().includes(t)) ||
      (f.desc && f.desc.toLowerCase().includes(t))
    );
  }
  
  if (distance) {
    const distLimit = parseFloat(distance);
    results = results.filter(f => {
      const r = dbRestaurants.find(rest => rest.id === f.restaurantId);
      return r && r.distanceValue <= distLimit;
    });
  }
  
  if (rating) {
    const minRating = parseFloat(rating);
    results = results.filter(f => f.rating >= minRating || (dbRestaurants.find(rest => rest.id === f.restaurantId)?.rating >= minRating));
  }

  if (price) {
    if (price === 'Under SR 50') {
      results = results.filter(f => f.priceValue < 50);
    } else if (price === 'SR 50 - 150') {
      results = results.filter(f => f.priceValue >= 50 && f.priceValue <= 150);
    } else if (price === 'SR 150+') {
      results = results.filter(f => f.priceValue > 150);
    }
  }

  // Veg Only Filter
  // Let's assume anything without meat is veg, or explicitly categorized as veg.
  if (isVeg === 'true' || isVeg === true) {
    results = results.filter(f => {
      const text = `${f.category || ''} ${f.name || ''} ${f.desc || ''}`.toLowerCase();
      const isExplicitVeg = /(veg|paneer|dal|gobi|mushroom|channa|salad|aloo)/.test(text);
      if (isExplicitVeg) return true;
      const strongMeat = /(chicken|chicekn|beef|mutton|fish|prawn|squid|crab|meat|lamb|egg|kaada|quail|duck|kozhi|alfaham|shawarma|seafood|poth|irachi|erachi|meen|chemmeen|kanava|koondal|njandu)/.test(text);
      if (strongMeat) return false;
      const ambiguousMeat = /(mandi|kebab|tikka|bbq|barbeque|biriyani|biryani|65|roast|fry|chops|platter|mix)/.test(text);
      if (ambiguousMeat) return false;
      return true;
    });
  }

  // Sorting
  if (sort) { 
    if (sort === 'popularity') {
      results.sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5));
    } else if (sort === 'price_asc') {
      results.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
    } else if (sort === 'price_desc') {
      results.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
    } else if (sort === 'rating_desc') {
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
  }

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum;
  const paginatedResults = results.slice(startIndex, endIndex);

  return {
    data: paginatedResults,
    total: results.length,
    page: pageNum,
    totalPages: Math.ceil(results.length / limitNum)
  };
};

export const getRestaurantMenu = async (restaurantId) => {
  await delay(300);
  let allFoods = [...dbFoods];
    try {
      const custom = JSON.parse(localStorage.getItem('customFoods') || '[]');
      allFoods = [...allFoods, ...custom];
    } catch(e) {}
    return allFoods.filter(f => f.restaurantId === parseInt(restaurantId) || f.restaurantId === restaurantId);
};

export const getCollections = async () => {
  await delay(300);
  return collections;
};

export const createBooking = async (bookingData) => {
  await delay(800);
  return {
    message: 'Booking confirmed',
    bookingId: 'BKG-' + Math.floor(Math.random() * 10000),
    status: 'CONFIRMED'
  };
};

export const getUserProfile = async () => {
  await delay(200);
  return userProfile;
};

export const getCategories = async () => {
  await delay(200);
  return categories;
};
