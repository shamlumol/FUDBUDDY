const fs = require('fs');

const cuisines = ['Arabic', 'Indian', 'Italian', 'American', 'Chinese', 'Japanese', 'Mexican', 'Lebanese', 'Thai', 'Healthy'];
const dietaryTags = ['Healthy', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Keto', 'Halal', 'Less spicy'];
const locations = ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Alkhobar', 'Dhahran', 'Taif', 'Tabuk', 'Abha', 'Jubail', 'Najran', 'Hail', 'Yanbu', 'Al Qatif'];
const offerTexts = ['Flat 30% OFF', 'Up to SR 50 OFF', 'Buy 1 Get 1', 'Free Delivery', ''];

const generateRestaurants = (count) => {
  const restaurants = [];
  for (let i = 1; i <= count; i++) {
    const c1 = cuisines[Math.floor(Math.random() * cuisines.length)];
    const c2 = cuisines[Math.floor(Math.random() * cuisines.length)];
    const d1 = dietaryTags[Math.floor(Math.random() * dietaryTags.length)];
    
    const d2 = dietaryTags[Math.floor(Math.random() * dietaryTags.length)];
    
    // Convert distance to a number string for easier filtering on backend
    const distNum = parseFloat((Math.random() * 10).toFixed(1));
    const isTopRated = Math.random() > 0.7;
    const ratingValue = isTopRated ? parseFloat((4.5 + Math.random() * 0.5).toFixed(1)) : parseFloat((3.0 + Math.random() * 1.4).toFixed(1));

    restaurants.push({
      id: i,
      name: `Restaurant ${i} - ${c1}`,
      location: locations[Math.floor(Math.random() * locations.length)],
      distance: `${distNum} km`,
      distanceValue: distNum,
      rating: ratingValue,
      diningRating: parseFloat((4 + Math.random()).toFixed(1)),
      deliveryRating: parseFloat((4 + Math.random()).toFixed(1)),
      reviewCount: `${Math.floor(Math.random() * 2000) + 100}`,
      price: ['$', '$$', '$$$'][Math.floor(Math.random() * 3)],
      costForTwo: `SR ${Math.floor(Math.random() * 150) + 50} for two`,
      logo: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=200`,
      headerImage: `https://images.unsplash.com/photo-${1510000000000 + i}?auto=format&fit=crop&q=80&w=800`,
      images: [
        `https://images.unsplash.com/photo-${1510000000000 + i}?auto=format&fit=crop&q=80&w=800`,
        `https://images.unsplash.com/photo-${1520000000000 + i}?auto=format&fit=crop&q=80&w=800`
      ],
      cuisines: [c1, c2].join(', '),
      tags: [...new Set([c1, c2])],
      dietary: [...new Set([d1, d2])],
      promoted: Math.random() > 0.7,
      offerText: offerTexts[Math.floor(Math.random() * offerTexts.length)]
    });
  }
  return restaurants;
};

const foodCategories = ['Main Course', 'Appetizers', 'Desserts', 'Beverages', 'Pizza', 'Burgers', 'Salads', 'Drinks', 'Biriyani'];
const specificFoods = ['Chicken Biriyani', 'Mutton Biriyani', 'Mojito', 'Iced Latte', 'Fresh Orange Juice', 'Cappuccino'];

const generateFoods = (restaurants, countPerRestaurant) => {
  const foods = [];
  let foodId = 1;
  restaurants.forEach(r => {
    // Add specific items like Biriyani and Drinks randomly
    if (Math.random() > 0.3) {
       foods.push({
        id: foodId++,
        restaurantId: r.id,
        restaurantName: r.name,
        name: 'Chicken Biriyani',
        category: 'MAIN COURSE',
        desc: 'Aromatic basmati rice cooked with tender chicken and authentic spices.',
        price: 'SR 35',
        priceValue: 35,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
        tags: ['Popular', 'Spicy', 'Indian']
       });
    }
    
    if (Math.random() > 0.3) {
       foods.push({
        id: foodId++,
        restaurantId: r.id,
        restaurantName: r.name,
        name: 'Mint Lemonade',
        category: 'DRINKS',
        desc: 'Refreshing mint and lemon cold drink.',
        price: 'SR 15',
        priceValue: 15,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
        tags: ['Healthy', 'Beverage']
       });
    }

    for (let i = 0; i < countPerRestaurant; i++) {
      const cat = foodCategories[Math.floor(Math.random() * foodCategories.length)];
      const priceVal = Math.floor(Math.random() * 80) + 15;
      foods.push({
        id: foodId++,
        restaurantId: r.id,
        restaurantName: r.name,
        name: `Delicious ${cat} ${i + 1}`,
        category: cat.toUpperCase(),
        desc: `A wonderful ${cat.toLowerCase()} made with fresh ingredients.`,
        price: `SR ${priceVal}`,
        priceValue: priceVal,
        rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
        image: `https://images.unsplash.com/photo-${1550000000000 + foodId}?auto=format&fit=crop&q=80&w=800`,
        tags: [dietaryTags[Math.floor(Math.random() * dietaryTags.length)], 'Popular']
      });
    }
  });
  return foods;
};

const restaurants = generateRestaurants(20);
const foods = generateFoods(restaurants, 5); // 100 foods total

const collections = [
  { id: 1, title: 'Top Trending Spots', places: '12 Places', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Best Rooftops', places: '8 Places', image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Newly Opened', places: '15 Places', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Luxury Dining', places: '10 Places', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400' }
];

const offersData = [
  { id: 1, discount: "30% OFF", restaurantId: 1, cta: "VIEW OFFER", image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
  { id: 2, discount: "BUY 1 GET 1", restaurantId: 2, cta: "VIEW DEAL", image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800' }
];

const userProfile = {
  name: 'Ahmed Ali',
  phone: '+966 501234567',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
};

const categories = [
  { id: 1, name: 'Burger', icon: '🍔' },
  { id: 2, name: 'Pizza', icon: '🍕' },
  { id: 3, name: 'Healthy', icon: '🥗' },
  { id: 4, name: 'Sushi', icon: '🍣' },
  { id: 5, name: 'Dessert', icon: '🍰' },
  { id: 6, name: 'Coffee', icon: '☕' }
];

const fileContent = `
const collections = ${JSON.stringify(collections, null, 2)};
const restaurants = ${JSON.stringify(restaurants, null, 2)};
const foods = ${JSON.stringify(foods, null, 2)};
const offersData = ${JSON.stringify(offersData, null, 2)};
const userProfile = ${JSON.stringify(userProfile, null, 2)};
const categories = ${JSON.stringify(categories, null, 2)};

module.exports = {
  collections,
  restaurants,
  foods,
  offersData,
  userProfile,
  categories
};
`;

fs.writeFileSync('./data/mockDatabase.js', fileContent);
console.log('Successfully generated mock data.');
