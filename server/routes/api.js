const express = require('express');
const router = express.Router();
const db = require('../data/mockDatabase');

// GET /api/collections
router.get('/collections', (req, res) => {
  res.json(db.collections);
});

// GET /api/restaurants
router.get('/restaurants', (req, res) => {
  let results = [...db.restaurants];
  const { search, category, type, price, distance, rating, page = 1, limit = 10 } = req.query;

  // Search by name, cuisine, location
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(r => 
      r.name.toLowerCase().includes(q) || 
      r.location.toLowerCase().includes(q) || 
      (r.cuisines && r.cuisines.toLowerCase().includes(q)) ||
      (r.tags && r.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

  // Filter by category/tag (from pills)
  if (category) {
    const c = category.toLowerCase();
    results = results.filter(r => 
      (r.tags && r.tags.some(tag => tag.toLowerCase() === c)) || 
      (r.dietary && r.dietary.some(d => d.toLowerCase() === c))
    );
  }

  // Filter by Type (e.g. Healthy, Less spicy)
  if (type) {
    const t = type.toLowerCase();
    results = results.filter(r => 
      (r.tags && r.tags.some(tag => tag.toLowerCase() === t)) || 
      (r.dietary && r.dietary.some(d => d.toLowerCase() === t))
    );
  }

  // Filter by Price
  if (price) {
    // Exact match on price string (e.g., "$$")
    results = results.filter(r => r.price === price);
  }

  // Filter by Distance
  if (distance) {
    const distLimit = parseFloat(distance);
    results = results.filter(r => r.distanceValue <= distLimit);
  }

  // Filter by Rating
  if (rating) {
    const minRating = parseFloat(rating);
    results = results.filter(r => r.rating >= minRating);
  }

  // Pagination
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum;
  const paginatedResults = results.slice(startIndex, endIndex);

  res.json({
    data: paginatedResults,
    total: results.length,
    page: pageNum,
    totalPages: Math.ceil(results.length / limitNum)
  });
});

// GET /api/restaurants/:id
router.get('/restaurants/:id', (req, res) => {
  const r = db.restaurants.find(r => r.id === parseInt(req.params.id));
  if (r) {
    res.json(r);
  } else {
    res.status(404).json({ error: 'Restaurant not found' });
  }
});

// GET /api/foods
router.get('/foods', (req, res) => {
  let results = [...db.foods];
  const { search, category, type, price, page = 1, limit = 10 } = req.query;

  // Search by name, category, or restaurantName
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(f => 
      f.name.toLowerCase().includes(q) || 
      (f.category && f.category.toLowerCase().includes(q)) || 
      (f.restaurantName && f.restaurantName.toLowerCase().includes(q))
    );
  }

  // Filter by category tag
  if (category) {
    const c = category.toLowerCase();
    results = results.filter(f => 
      (f.category && f.category.toLowerCase() === c) ||
      (f.tags && f.tags.some(tag => tag.toLowerCase() === c))
    );
  }

  // Filter by Type
  if (type) {
    const t = type.toLowerCase();
    results = results.filter(f => 
      (f.tags && f.tags.some(tag => tag.toLowerCase() === t))
    );
  }

  // Filter by Price (foods use priceValue)
  if (price) {
    const p = parseFloat(price);
    // E.g. "50" means <= 50
    results = results.filter(f => f.priceValue <= p);
  }

  // Pagination
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum;
  const paginatedResults = results.slice(startIndex, endIndex);

  res.json({
    data: paginatedResults,
    total: results.length,
    page: pageNum,
    totalPages: Math.ceil(results.length / limitNum)
  });
});

// GET /api/foods/:id
router.get('/foods/:id', (req, res) => {
  const f = db.foods.find(f => f.id === parseInt(req.params.id));
  if (f) {
    res.json(f);
  } else {
    res.status(404).json({ error: 'Food not found' });
  }
});

// GET /api/restaurants/:id/menu
router.get('/restaurants/:id/menu', (req, res) => {
  const menu = db.foods.filter(f => f.restaurantId === parseInt(req.params.id));
  res.json(menu);
});

// GET /api/offers
router.get('/offers', (req, res) => {
  res.json(db.offersData);
});

// POST /api/bookings
router.post('/bookings', (req, res) => {
  const { restaurantId, date, time, guests, offerId } = req.body;
  
  if (!restaurantId || !date || !time || !guests) {
    return res.status(400).json({ error: 'Missing required booking fields' });
  }

  // Simulate saving to database and returning a booking ID
  const bookingId = `FB-${Math.floor(10000 + Math.random() * 90000)}`;
  
  res.status(201).json({
    message: 'Booking confirmed',
    bookingId: bookingId,
    status: 'CONFIRMED'
  });
});

// GET /api/user-profile
router.get('/user-profile', (req, res) => {
  res.json(db.userProfile);
});

// GET /api/categories
router.get('/categories', (req, res) => {
  res.json(db.categories);
});

const Food = require('../models/Food');

// GET /api/foods/category/:categorySlug
router.get('/foods/category/:categorySlug', async (req, res) => {
  try {
    const { categorySlug } = req.params;
    const { sort, isVeg, isAvailable } = req.query;

    let query = { category: categorySlug };

    if (isVeg === 'true') query.isVeg = true;
    if (isAvailable === 'true') query.isAvailable = true;

    let sortOptions = {};
    if (sort === 'price_asc') sortOptions.priceValue = 1;
    if (sort === 'price_desc') sortOptions.priceValue = -1;
    if (sort === 'rating_desc') sortOptions.rating = -1;

    const foods = await Food.find(query).sort(sortOptions);
    
    // Check if we didn't find anything in DB, we could optionally fallback to mock data here if you haven't seeded yet,
    // but the user requested MongoDB integration. So we'll return the DB results.
    res.json(foods);
  } catch (error) {
    console.error('Error fetching category foods:', error);
    res.status(500).json({ error: 'Server error fetching foods' });
  }
});

module.exports = router;
