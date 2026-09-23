import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch, value = '', onChange = () => {} }) => {
  const navigate = useNavigate();
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (onSearch) onSearch(value);
      else navigate(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  const handleSearchClick = () => {
    if (onSearch) onSearch(value);
    else navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center bg-white border border-gray-200 rounded-lg px-4 py-3 mb-3 shadow-sm">
        <Search size={18} className="text-gray-400 mr-2 flex-shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search your cravings..."
          className="w-full bg-transparent text-sm text-gray-900 focus:outline-none placeholder:text-gray-400"
        />
      </div>
      <button 
        onClick={handleSearchClick}
        className="w-full bg-primary text-white font-bold text-sm py-3.5 rounded-lg mb-2 hover:bg-[#7ab135] transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
