import React, { useState } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import { 
  Store, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  CheckCircle, 
  ArrowLeft,
  UploadCloud,
  FileJson,
  Image as ImageIcon
} from 'lucide-react';
import { toast } from '../components/ui/Toast';

const PartnerRegistration = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    distance: '2.5 km',
    price: '$$',
    costForTwo: 'SR 50 for two',
    ownerName: '',
    email: '',
    phone: '',
    contact: '',
    website: '',
    mapLink: '',
    about: '',
    cuisineTypes: '',
    specialty: '',
    dietary: '',
    hasTakeaway: true,
    hasDineIn: true,
    hasOnlineOrder: true,
    isVeg: false,
    logo: '',
    headerImage: '',
    menuJson: `[
  {
    "id": "food-custom-1",
    "name": "Sample Dish",
    "price": "SR 35",
    "priceValue": 35,
    "description": "Delicious sample food",
    "category": "Main Course",
    "isVeg": false,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300"
  }
]`
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate JSON menu
    let parsedMenu = [];
    try {
      parsedMenu = JSON.parse(formData.menuJson);
      if (!Array.isArray(parsedMenu)) throw new Error('Menu must be an array');
    } catch (err) {
      toast('Invalid Menu JSON format. Please provide a valid JSON array.', 'error');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      // Create new restaurant object
      const newRestId = 1000 + Math.floor(Math.random() * 1000);
      const featuresArr = [];
      if (formData.hasDineIn) featuresArr.push('Dine-in');
      if (formData.hasTakeaway) featuresArr.push('Takeaway');
      if (formData.hasOnlineOrder) featuresArr.push('Online Order');

      const newRestaurant = {
        id: newRestId,
        name: formData.name,
        location: formData.location,
        distance: formData.distance,
        distanceValue: parseFloat(formData.distance) || 2.5,
        rating: 4.5,
        reviewCount: '0',
        price: formData.price,
        costForTwo: formData.costForTwo,
        logo: formData.logo || '/images/logos/casa_logo.png',
        headerImage: formData.headerImage || 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
        tags: formData.cuisineTypes.split(',').map(s => s.trim()),
        cuisines: formData.cuisineTypes.split(',').map(s => s.trim()),
        dietary: formData.dietary ? formData.dietary.split(',').map(s => s.trim()) : [],
        features: featuresArr,
        specialty: formData.specialty,
        contact: formData.phone,
        email: formData.email,
        website: formData.website,
        mapLink: formData.mapLink,
        about: formData.about
      };

      // Add restaurant info to foods
      const foodsToAdd = parsedMenu.map((f, i) => ({
        ...f,
        id: f.id || `custom-food-${newRestId}-${i}`,
        restaurantId: newRestId,
        restaurantName: newRestaurant.name,
        rating: f.rating || 4.5,
        deliveryTime: '30-40 min',
        isAvailable: true
      }));

      // Save to local storage
      const existingRests = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
      existingRests.push(newRestaurant);
      localStorage.setItem('customRestaurants', JSON.stringify(existingRests));

      const existingFoods = JSON.parse(localStorage.getItem('customFoods') || '[]');
      const allNewFoods = [...existingFoods, ...foodsToAdd];
      localStorage.setItem('customFoods', JSON.stringify(allNewFoods));

      setIsSubmitting(false);
      toast('Restaurant sent for admin approval! (Added locally for demo)', 'success');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-6 px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Partner with Us' }]} />
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate('/')} className="p-2 mr-4 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Partner with FudBuddy</h1>
            <p className="text-gray-600 text-sm md:text-base mt-1">Fill out the form below to list your restaurant on our platform.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Basic Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-2 rounded-lg">
                <Store size={20} className="text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Restaurant Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Restaurant Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location Area *</label>
                <input type="text" name="location" required value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Distance (e.g. 2.5 km)</label>
                <input type="text" name="distance" value={formData.distance} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Price Level ($, $$, $$$)</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Cost for Two</label>
                <input type="text" name="costForTwo" value={formData.costForTwo} onChange={handleChange} placeholder="SR 50 for two" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Specialty</label>
                <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Cuisine Types * (Comma separated)</label>
                <input type="text" name="cuisineTypes" required value={formData.cuisineTypes} onChange={handleChange} placeholder="e.g. Indian, Chinese" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Dietary Tags (Comma separated)</label>
                <input type="text" name="dietary" value={formData.dietary} onChange={handleChange} placeholder="e.g. Halal, Vegan" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">About Description *</label>
                <textarea name="about" required value={formData.about} onChange={handleChange} rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"></textarea>
              </div>
            </div>
          </div>

          {/* Section 2: Contact Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <User size={20} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Owner Name *</label>
                <input type="text" name="ownerName" required value={formData.ownerName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Website (Optional)</label>
                <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Google Maps Link</label>
                <input type="text" name="mapLink" value={formData.mapLink} onChange={handleChange} placeholder="https://maps.google.com/..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none" />
              </div>
            </div>
          </div>

          {/* Section 4: Features */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-2 rounded-lg">
                <CheckCircle size={20} className="text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Features & Services</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="checkbox" name="hasTakeaway" checked={formData.hasTakeaway} onChange={handleChange} className="w-5 h-5 accent-green-600" />
                <span className="font-bold text-gray-700">Takeaway Available</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="checkbox" name="hasDineIn" checked={formData.hasDineIn} onChange={handleChange} className="w-5 h-5 accent-green-600" />
                <span className="font-bold text-gray-700">Dine-in Available</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="checkbox" name="hasOnlineOrder" checked={formData.hasOnlineOrder} onChange={handleChange} className="w-5 h-5 accent-green-600" />
                <span className="font-bold text-gray-700">Accept Online Orders</span>
              </label>
            </div>
          </div>

          {/* Section 5: Document Uploads & JSON */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <UploadCloud size={20} className="text-purple-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Menu & Assets</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Logo Image URL</label>
                  <input type="text" name="logo" value={formData.logo} onChange={handleChange} placeholder="https://..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Header Image URL</label>
                  <input type="text" name="headerImage" value={formData.headerImage} onChange={handleChange} placeholder="https://..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none" />
                </div>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <FileJson size={16} />
                  Menu JSON Array *
                </label>
                <textarea 
                  name="menuJson"
                  required
                  value={formData.menuJson}
                  onChange={handleChange}
                  rows="10"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none font-mono text-sm bg-gray-50"
                ></textarea>
                <p className="text-xs text-gray-500 mt-2">Paste an array of food objects in JSON format to be automatically imported.</p>
              </div>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-md transition-all ${isSubmitting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'}`}>
            {isSubmitting ? 'Submitting Application...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegistration;
