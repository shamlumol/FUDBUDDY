import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food, compact = false }) => {
  return (
    <Link 
      to={`/food/${food.id}`} 
      className={`group flex flex-col bg-white rounded-2xl border border-gray-100 p-3 hover:shadow-md hover:border-green-100 transition-all cursor-pointer flex-shrink-0 ${compact ? 'w-36 md:w-auto' : 'w-40 md:w-auto'}`}
    >
      <div className="w-full aspect-square bg-gray-50 rounded-xl mb-3 overflow-hidden relative flex items-center justify-center">
        {food.image ? (
          <img decoding="async" 
            src={food.image} 
            alt={food.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            loading="lazy"
          />
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <h4 className="text-[13px] md:text-sm font-extrabold text-gray-900 mb-1 line-clamp-2 leading-snug">{food.name}</h4>
        
        <div className="mt-auto pt-2 flex items-center gap-3 text-xs">
          <span className="font-extrabold text-[#3a6375]">{food.price}</span>
          <div className="flex items-center gap-1 text-gray-500 font-bold">
            <span className="text-yellow-500">â˜…</span> {food.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
