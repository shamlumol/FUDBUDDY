import React, { useState } from 'react';
import { ChevronDown, Utensils, Tag, MapPin, Star, Heart, Filter } from 'lucide-react';

const FilterSidebar = ({ filters = {}, onFilterChange = () => {} }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const filterConfigs = [
    {
      name: 'Type',
      icon: Utensils,
      key: 'type',
      options: ['Arabic', 'Indian', 'Italian', 'American']
    },
    {
      name: 'Price',
      icon: Tag,
      key: 'price',
      options: ['Under SR 50', 'SR 50 - 150', 'SR 150+']
    },
    {
      name: 'Distance',
      icon: MapPin,
      key: 'distance',
      options: ['2', '5', '10', '20'] // in km
    },
    {
      name: 'Top rated',
      icon: Star,
      key: 'rating',
      options: ['3.0', '4.0', '4.5']
    }
  ];

  const clearAll = () => {
    onFilterChange('category', '');
    onFilterChange('type', '');
    onFilterChange('price', '');
    onFilterChange('distance', '');
    onFilterChange('rating', '');
  };

  return (
    <div className="w-full md:w-64 flex-shrink-0">
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

      <div className={`md:block ${isMobileOpen ? 'block mb-6' : 'hidden'}`}>
        <div className="hidden md:flex items-center justify-between mb-6">
          <h2 className="text-[17px] font-extrabold text-[#112431]">Filters</h2>
          <button 
            onClick={clearAll} 
            className="text-[13px] font-medium text-gray-400 hover:text-gray-600"
          >
            Clear all
          </button>
        </div>
        
        <div className="md:hidden flex justify-end mb-3">
          <button 
            onClick={clearAll} 
            className="text-[13px] font-medium text-[#8cc63f]"
          >
            Clear all
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {filterConfigs.map((config, index) => {
            const Icon = config.icon;
            const isOpen = openDropdown === config.name;
            const activeValue = filters[config.key];

            return (
              <div key={index} className="flex flex-col gap-1">
                <div 
                  onClick={() => toggleDropdown(config.name)}
                  className={`border rounded-xl p-3.5 flex justify-between items-center cursor-pointer shadow-sm transition-colors ${
                    activeValue ? 'border-[#8cc63f] bg-[#f4faeb]' : 'border-gray-100 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={activeValue ? 'text-[#8cc63f]' : 'text-[#112431]'} />
                    <span className={`font-bold text-[15px] ${activeValue ? 'text-[#8cc63f]' : 'text-[#112431]'}`}>
                      {activeValue ? `${config.name}: ${activeValue}${config.key === 'distance' ? ' km' : ''}${config.key === 'rating' ? '+' : ''}` : config.name}
                    </span>
                  </div>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#8cc63f]' : 'text-gray-400'}`} />
                </div>
                
                {isOpen && (
                  <div className="bg-white border border-gray-100 rounded-xl p-2 shadow-md z-10 flex flex-col gap-1">
                    {config.options.map((opt, i) => (
                      <div 
                        key={i}
                        onClick={() => {
                          onFilterChange(config.key, activeValue === opt ? '' : opt);
                          setOpenDropdown(null);
                        }}
                        className={`px-3 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                          activeValue === opt ? 'bg-[#8cc63f] text-white' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {opt}{config.key === 'distance' ? ' km' : ''}{config.key === 'rating' ? ' +' : ''}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 mb-4 md:hidden">
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

export default FilterSidebar;
