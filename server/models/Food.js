const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, required: true },
  slug: { type: String },
  description: { type: String },
  priceValue: { type: Number, required: true },
  price: { type: String }, // formatted string
  image: { type: String },
  category: { type: String, required: true }, // acts as the slug for filtering
  restaurantId: { type: Number },
  restaurantName: { type: String },
  rating: { type: Number, default: 0 },
  deliveryTime: { type: String },
  isVeg: { type: Boolean, default: false },
  isAvailable: { type: Boolean, default: true },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

// Pre-save hook to generate slug if not present
foodSchema.pre('save', function(next) {
  if (this.name && !this.slug) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  next();
});

module.exports = mongoose.model('Food', foodSchema);
