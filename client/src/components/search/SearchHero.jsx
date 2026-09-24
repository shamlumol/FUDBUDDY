import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LocationSelector from '../home/LocationSelector';
import { restaurants } from '../../data/mockDatabase';

const SearchHero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  const trendingSearches = Array.from(new Set(restaurants.flatMap(r => r.tags))).slice(0, 6);

  return (
    <section className="w-full bg-white md:bg-[#f2f4f5] rounded-none md:rounded-3xl p-0 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <div className="flex-1 w-full max-w-2xl z-10">
        <h1 className="text-[28px] md:text-[44px] font-extrabold text-[#112431] mb-2 tracking-tight">
          What are you craving?
        </h1>
        <p className="text-[#3a444a] text-[15px] md:text-base font-medium mb-6 max-w-md">
          Discover top-rated restaurants, hidden gems, and the best dining experiences near you.
        </p>

        <div className="relative mb-8 bg-white rounded-xl border border-gray-200 shadow-sm focus-within:border-green-500 overflow-visible z-20">
          <div className="flex items-center px-4 py-2 border-b border-gray-100 relative z-30">
            <LocationSelector />
          </div>
          <form onSubmit={handleSearch} className="relative z-10 flex items-center">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search your cravings..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full py-3 pl-11 pr-4 bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none text-[15px] font-medium rounded-b-xl"
            />
          </form>
        </div>

        <div>
          <h4 className="text-[#112431] font-extrabold text-[17px] mb-3">Try asking</h4>
          <div className="flex flex-wrap gap-2.5">
            {trendingSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => navigate(`/search?q=${encodeURIComponent(term)}`)}
                className="bg-[#f3f4f6] md:bg-white border-0 md:border md:border-gray-100 rounded-lg md:rounded-full px-4 py-2 text-[13px] font-bold text-[#112431] md:text-gray-700 hover:bg-gray-200 transition-colors shadow-none md:shadow-sm"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-[320px] h-[320px] rounded-full overflow-hidden flex-shrink-0 relative shadow-xl z-10 mt-0 border-[6px] border-white">
        <img loading="lazy"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SearchHero;
