import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Star, ArrowRight } from 'lucide-react';
import { highlightText } from '../utils/highlight';

const FoodCard = ({ food, searchQuery = '' }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedFoods') || '[]');
    setIsSaved(saved.some(f => f.id === food.id));
  }, [food.id]);

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let saved = JSON.parse(localStorage.getItem('savedFoods') || '[]');
    if (isSaved) {
      saved = saved.filter(f => f.id !== food.id);
    } else {
      saved.push(food);
    }
    localStorage.setItem('savedFoods', JSON.stringify(saved));
    setIsSaved(!isSaved);
  };

  return (
    <Link to={`/food/${food.id}`} className="flex flex-col bg-white rounded-[24px] border border-gray-100 hover:border-green-200 p-3 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative h-full">
      {/* Image & Veg Indicator */}
      <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl mb-4 relative overflow-hidden flex-shrink-0">
        <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
          <div className={`w-3 h-3 rounded-sm border ${food.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center bg-white`}>
            <div className={`w-1.5 h-1.5 rounded-full ${food.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
          </div>
          <span className="text-[10px] font-bold text-gray-700">{food.isVeg ? 'VEG' : 'NON-VEG'}</span>
        </div>
        
        {food.image ? (
          <img src={food.image} alt={food.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <span className="text-xs text-gray-400 font-bold m-auto h-full flex items-center">NO IMAGE</span>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-base font-extrabold text-gray-900 leading-tight">
            {highlightText(food.name, searchQuery)}
          </h4>
        </div>
        
        <p className="text-xs text-gray-500 font-medium line-clamp-2 mb-3">
          {food.description || 'Delicious food prepared with the finest ingredients.'}
        </p>

        <div className="mt-auto">
          {/* Restaurant Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded text-green-700 font-bold text-[10px]">
              <Star size={10} className="fill-green-700" />
              <span>{food.rating || '4.5'}</span>
            </div>
            <div className="text-[11px] font-bold text-gray-600 truncate flex-1">
              {food.restaurantName || 'Local Restaurant'}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
              <Clock size={10} />
              <span>{food.deliveryTime || '30 min'}</span>
            </div>
          </div>
          
          {/* Price & View Details */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <span className="text-lg font-extrabold text-[#112431]">{food.price || `₹${food.priceValue || 199}`}</span>
            
            <button 
              onClick={toggleSave}
              className="p-2.5 rounded-full hover:bg-red-50 transition-colors flex items-center justify-center group/wishlist"
            >
              <Heart size={20} className={`${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover/wishlist:text-red-500'} transition-colors`} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
