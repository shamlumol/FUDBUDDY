import React from 'react';
import { Sandwich } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-14 md:w-16">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-[14px] flex items-center justify-center mb-1.5 shadow-sm border border-gray-100 group-hover:border-gray-200 group-hover:shadow transition-all">
        {category.icon ? (
          <span className="flex items-center justify-center scale-90">{category.icon}</span>
        ) : (
          <Sandwich size={20} className="text-gray-600" />
        )}
      </div>
      <span className="text-[10px] font-bold text-gray-700 text-center leading-tight group-hover:text-primary transition-colors">
        {category.name}
      </span>
    </div>
  );
};

export default CategoryCard;
