const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Food = require('../models/Food');
const mockDb = require('../data/mockDatabase');

dotenv.config({ path: __dirname + '/../.env' });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fudbuddy';

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected. Seeding data...');

    // Clear existing foods
    await Food.deleteMany({});
    console.log('Cleared existing Food collection.');

    // Seed mock foods
    const foodsToInsert = mockDb.foods.map(f => ({
      id: f.id,
      name: f.name,
      slug: f.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      description: f.description || `Delicious ${f.name} from ${f.restaurantName}`,
      priceValue: f.priceValue,
      price: f.price,
      image: f.image,
      category: f.category ? f.category.toLowerCase() : 'other',
      restaurantId: f.restaurantId,
      restaurantName: f.restaurantName,
      rating: f.rating || 4.5,
      deliveryTime: f.deliveryTime || '30-40 min',
      isVeg: f.tags && (f.tags.includes('Veg') || f.tags.includes('Vegetarian')),
      isAvailable: true,
      tags: f.tags || []
    }));

    await Food.insertMany(foodsToInsert);
    console.log(`Successfully seeded ${foodsToInsert.length} food items.`);

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });
