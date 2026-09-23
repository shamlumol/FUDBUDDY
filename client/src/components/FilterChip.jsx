import React from 'react';
import { ChevronDown } from 'lucide-react';

const FilterChip = ({ label, icon: Icon, active, onClick, hasDropdown = true }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-between border ${active ? 'border-brand bg-green-50' : 'border-gray-200 bg-white'} rounded-lg px-3 py-2 w-full mb-2 hover:bg-gray-50 transition-colors`}
    >
      <div className="flex items-center">
        {Icon && <Icon size={16} className={`mr-2 ${active ? 'text-brand' : 'text-gray-600'}`} />}
        <span className={`text-sm font-medium ${active ? 'text-brand' : 'text-gray-700'}`}>{label}</span>
      </div>
      {hasDropdown && <ChevronDown size={16} className="text-gray-400" />}
    </button>
  );
};

export default FilterChip;
