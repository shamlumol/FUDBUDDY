import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, MapPin, Heart, User, Tag, Menu, Bell } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between h-16 md:hidden">
          {location.pathname === '/search' ? (
            <div className="flex items-center gap-4 w-full">
              <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Search</h1>
            </div>
          ) : (
            <>
              <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="FoodBuddy Logo" className="h-8 object-contain" />
              </Link>

              <div className="flex items-center gap-2 sm:gap-4">
                <Link to="/offers" className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0f8e8] text-[#8cc63f] rounded-full text-xs font-bold hover:bg-[#e2f0d9] transition-colors">
                  <span>OFFERS</span>
                </Link>
                <Link to="/wishlist" className="w-8 h-8 flex items-center justify-center text-[#8cc63f] rounded-full hover:bg-gray-50">
                  <Heart size={20} />
                </Link>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
                  <Bell size={20} />
                </button>
                <Link to="/profile" className="w-8 h-8 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
                  <User size={20} />
                </Link>
              </div>
            </>
          )}
        </div>

        {/* DESKTOP HEADER */}
        <div className="hidden md:flex items-center justify-between h-20 gap-6">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="FoodBuddy Logo" className="h-10 object-contain" />
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Link to="/offers" className="flex items-center gap-1.5 px-4 py-2 bg-[#f0f8e8] text-[#8cc63f] rounded-full text-sm font-bold hover:bg-[#e2f0d9] transition-colors">
              <Tag size={16} />
              <span>OFFERS</span>
            </Link>
            <Link to="/wishlist" className="w-10 h-10 flex items-center justify-center text-[#8cc63f] rounded-full hover:bg-gray-50">
              <Heart size={20} />
            </Link>
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
              <Bell size={20} />
            </button>
            <Link to="/profile" className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-full hover:bg-gray-50">
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
