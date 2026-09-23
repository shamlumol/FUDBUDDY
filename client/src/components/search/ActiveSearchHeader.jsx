import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ActiveSearchHeader = ({ query = '', activeFilter = '', onFilterChange = () => {} }) => {
  const navigate = useNavigate();
  const [localQuery, setLocalQuery] = useState(query);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && localQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(localQuery)}`);
    }
  };
  return (
    <div className="w-full mb-8 pt-4">
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={20} className="text-[#1a5b82]" />
        </div>
        <input 
          type="text" 
          placeholder="Search your cravings..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 shadow-sm text-[15px] font-medium"
        />
      </div>
    </div>
  );
};

export default ActiveSearchHeader;
