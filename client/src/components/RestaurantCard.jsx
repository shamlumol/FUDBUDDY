import React, { useState, useEffect } from 'react';
import { Star, MapPin, Heart } from 'lucide-react';

const RestaurantCard = ({ restaurant, isCompact = false }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRestaurants') || '[]');
    setIsSaved(saved.some(r => r.id === restaurant.id));
  }, [restaurant.id]);

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let saved = JSON.parse(localStorage.getItem('savedRestaurants') || '[]');
    if (isSaved) {
      saved = saved.filter(r => r.id !== restaurant.id);
    } else {
      saved.push(restaurant);
    }
    localStorage.setItem('savedRestaurants', JSON.stringify(saved));
    setIsSaved(!isSaved);
  };

  const mainImage = restaurant.images?.[0] || restaurant.headerImage || restaurant.logo;

  return (
    <div className={`flex bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer relative overflow-hidden ${isCompact ? 'p-2.5 items-center' : 'p-3 items-center shadow-sm'}`}>
      
      {/* Save Button */}
      <button 
        onClick={toggleSave}
        className="absolute top-2.5 right-2.5 p-1 z-10"
      >
        <Heart size={14} className={`${isSaved ? 'fill-primary text-primary' : 'text-gray-300 hover:text-gray-400'} transition-colors`} />
      </button>

      {/* Thumbnail */}
      <div className={`relative bg-white rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center ${isCompact ? 'w-[70px] h-[70px] mr-3' : 'w-24 h-24 mr-4'}`}>
        <img 
          src={mainImage} 
          alt={restaurant.name} 
          className="w-full h-full object-contain p-1" 
        />
      </div>

      {/* Info Section */}
      <div className="flex-1 min-w-0 pr-6 flex flex-col justify-center">
        <h4 className={`font-extrabold text-gray-900 truncate mb-1 ${isCompact ? 'text-sm' : 'text-base'}`}>{restaurant.name}</h4>
        
        <div className={`flex items-center text-gray-500 truncate mb-1.5 ${isCompact ? 'text-[10px]' : 'text-xs'}`}>
          <MapPin size={10} className="mr-1 shrink-0" />
          <span className="truncate">{restaurant.location}</span>
        </div>

        <div className={`flex items-center text-gray-500 font-medium ${isCompact ? 'text-[10px]' : 'text-xs'}`}>
          <Star size={10} className="mr-1 text-yellow-500 fill-yellow-500 shrink-0" />
          <span className="mr-2 text-gray-900">{restaurant.rating || 4.8}</span>
          {!isCompact && (
            <>
              <span className="text-gray-300 mx-1">·</span>
              <span className="truncate">{restaurant.cuisines || restaurant.tags?.join(', ')}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
