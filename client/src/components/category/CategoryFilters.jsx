import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const CategoryFilters = ({ filters, onFilterChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl md:border border-gray-100 md:p-5 sticky top-24">
      {/* Mobile Toggle Button */}
      <div 
        className="md:hidden flex items-center justify-between mb-4 border rounded-xl p-3.5 bg-white shadow-sm cursor-pointer" 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-[#112431]" />
          <span className="font-bold text-[15px] text-[#112431]">Filters</span>
        </div>
        <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileOpen ? 'rotate-180' : ''}`} />
      </div>

      <div className={`md:block ${isMobileOpen ? 'block border rounded-2xl p-5 shadow-sm bg-white mb-6' : 'hidden'}`}>
        <h3 className="hidden md:block text-lg font-extrabold text-gray-900 mb-6">Filters</h3>

        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Sort By</h4>
          <div className="space-y-2">
            {['popularity', 'price_asc', 'price_desc', 'rating_desc'].map(sortOption => (
              <label key={sortOption} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${filters.sort === sortOption ? 'border-[#8cc63f]' : 'border-gray-300 group-hover:border-[#8cc63f]'}`}>
                  {filters.sort === sortOption && <div className="w-2 h-2 rounded-full bg-[#8cc63f]" />}
                </div>
                <input
                  type="radio"
                  name="sort"
                  value={sortOption}
                  checked={filters.sort === sortOption}
                  onChange={() => onFilterChange('sort', sortOption)}
                  className="hidden"
                />
                <span className={`text-sm font-medium ${filters.sort === sortOption ? 'text-gray-900 font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                  {sortOption === 'popularity' && 'Popularity'}
                  {sortOption === 'price_asc' && 'Price: Low to High'}
                  {sortOption === 'price_desc' && 'Price: High to Low'}
                  {sortOption === 'rating_desc' && 'Rating: High to Low'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-100 mb-6" />

        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Preferences</h4>
          
          <label className="flex items-center justify-between cursor-pointer group mb-3">
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">Veg Only</span>
            <div className={`w-10 h-6 rounded-full p-1 transition-colors ${filters.isVeg ? 'bg-green-500' : 'bg-gray-200'}`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform ${filters.isVeg ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
            <input
              type="checkbox"
              checked={filters.isVeg}
              onChange={() => onFilterChange('isVeg', !filters.isVeg)}
              className="hidden"
            />
          </label>

        </div>

        <div className="mt-8 md:hidden">
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="w-full bg-[#8cc63f] text-white rounded-xl py-3.5 font-bold text-[15px] shadow-md hover:bg-[#7ab135] transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
