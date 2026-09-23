import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Heart } from 'lucide-react';
import { userProfile } from '../data/mockData';

const TopNavigation = () => {
  return (
    <div className="hidden md:flex w-full bg-white py-4 px-8 items-center justify-between sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      {/* Logo */}
      <div className="flex-shrink-0 mr-8">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="FoodBuddy Logo" className="h-6 object-contain" />
        </Link>
      </div>

      {/* Center: Search & Location */}
      {/* <div className="flex-1 flex justify-center max-w-3xl mx-4 gap-4">
        <div className="flex-1 relative flex items-center bg-background rounded-full px-4 py-2 border border-gray-100">
          <Search size={18} className="text-gray-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder=""
            className="w-full bg-transparent text-sm text-gray-900 focus:outline-none placeholder:text-gray-400"
          />
        </div>
        <div className="hidden lg:flex items-center text-sm font-medium text-gray-600 bg-background rounded-full px-4 py-2 border border-gray-100">
          <MapPin size={16} className="mr-1.5 text-gray-400" />
          Dammam, Alkhobar
        </div>
      </div> */}

      {/* Right side controls */}
      <div className="flex items-center space-x-6 flex-shrink-0">
        <Link to="/dining" className="text-gray-600 hover:text-primary font-bold text-sm transition-colors">
          Dining
        </Link>
        <Link to="/offers" className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider hover:bg-red-600 transition-colors">
          Offers
        </Link>
        <Link to="/profile" className="text-gray-600 hover:text-primary transition-colors">
          <Heart size={20} />
        </Link>
        <Link to="/profile" className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
          <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </div>
  );
};

export default TopNavigation;
