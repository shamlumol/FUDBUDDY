import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ className = "" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`group relative flex items-center bg-white border border-gray-200 rounded-xl px-3 h-10 shadow-sm focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 transition-all ${className}`}
    >
      <Search size={20} className="text-gray-400 mr-3 flex-shrink-0 transition-all duration-300 group-focus-within:text-green-500 group-focus-within:scale-110 group-focus-within:-rotate-12" />
      <input
        type="text"
        placeholder="Search your cravings..."
        className="w-full bg-transparent text-base text-gray-900 focus:outline-none placeholder:text-gray-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
