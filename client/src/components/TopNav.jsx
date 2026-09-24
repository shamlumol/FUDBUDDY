import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { userProfile } from '../data/mockData';

const TopNav = () => {
  return (
    <div className="hidden md:flex w-full bg-white border-b border-gray-100 py-4 px-8 items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex-shrink-0 mr-8">
        <Link to="/" className="flex items-center">
          <img loading="lazy" src="/logo.png" alt="Fudbuddy Logo" className="h-8 object-contain" />
        </Link>
      </div>

      {/* Global Search Bar
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative flex items-center w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 hover:bg-gray-100 transition-colors">
          <Search size={18} className="text-gray-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder=""
            className="w-full bg-transparent text-sm text-gray-900 focus:outline-none placeholder:text-gray-400"
          />
        </div>
      </div> */}

      {/* Right side controls */}
      <div className="flex items-center space-x-6 flex-shrink-0">
        <div className="flex items-center text-sm font-medium text-gray-700">
          <MapPin size={16} className="mr-1.5 text-gray-400" />
          Dammam, Alkhobar
        </div>

        <Link to="/offers" className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm hover:opacity-90 transition-opacity">
          Offers
        </Link>

        <Link to="/profile" className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
          <img loading="lazy" src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
