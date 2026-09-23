import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import FavoriteButton from '../common/FavoriteButton';
import { highlightText } from '../../utils/highlight';

const RestaurantCard = ({ restaurant, layout = 'vertical', showHeart = false, showTags = false, searchQuery = '' }) => {
  if (layout === 'horizontal') {
    return (
      <Link 
        to={`/restaurant/${restaurant.id}`} 
        className="group flex items-center bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-md hover:border-green-100 transition-all cursor-pointer relative"
      >
        <div className="w-16 h-16 bg-gray-50 rounded-[20px] overflow-hidden flex-shrink-0 border border-gray-100 flex items-center justify-center">
          {(restaurant.logo || restaurant.image) ? (
            <img 
              src={restaurant.logo || restaurant.image} 
              alt={restaurant.name} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          )}
        </div>
        
        <div className="flex flex-col flex-1 pl-4 pr-2 min-w-0">
          <h4 className="text-sm font-extrabold text-gray-900 mb-1 truncate">
            {highlightText(restaurant.name, searchQuery)}
          </h4>
          <div className="flex items-center gap-3 text-[11px] mb-1">
            <span className="text-gray-500 font-medium truncate max-w-[120px]">{restaurant.location}</span>
            <div className="flex items-center text-[13px] text-gray-500 font-medium truncate">
              <span className="truncate">
                {Array.isArray(restaurant.cuisines) ? restaurant.cuisines.join(' · ') : restaurant.cuisines}
              </span>
            </div>
          </div>
          {(showHeart || showTags) && restaurant.cuisines && (
            <p className="text-[11px] text-gray-400 font-medium truncate mb-2">
              {Array.isArray(restaurant.cuisines) ? restaurant.cuisines.join(' · ') : restaurant.cuisines}
            </p>
          )}
          
          {/* Tags for active search results */}
          {showTags && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Healthy', 'Less spicy', 'Top rated'].map((tag, idx) => (
                <span key={idx} className="bg-gray-50 text-gray-500 border border-gray-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {showHeart && (
          <div className="pl-2">
            <FavoriteButton className="w-6 h-6 text-gray-400" />
          </div>
        )}
      </Link>
    );
  }

  // Vertical layout (default)
  return (
    <Link 
      to={`/restaurant/${restaurant.id}`} 
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-3 hover:shadow-md hover:border-green-100 transition-all cursor-pointer relative"
    >
      <div className="w-full h-36 bg-gray-50 rounded-xl overflow-hidden relative mb-3 flex items-center justify-center">
        {restaurant.image ? (
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            loading="lazy"
          />
        ) : (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        )}
        {restaurant.offer && (
          <div className="absolute top-2 left-2 bg-[#8cc63f] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
            {restaurant.offer}
          </div>
        )}
        <div className="absolute top-2 right-2 z-10">
          <FavoriteButton />
        </div>
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-[15px] font-extrabold text-gray-900 line-clamp-1 mr-2">
            {highlightText(restaurant.name, searchQuery)}
          </h4>
          <div className="flex items-center gap-1 text-gray-700 font-medium bg-gray-50 px-1.5 py-0.5 rounded text-[11px] flex-shrink-0 group-hover:bg-yellow-50 transition-colors">
            <Star size={12} className="text-yellow-500 fill-yellow-500 group-hover:rotate-[72deg] group-hover:scale-125 transition-all duration-500" /> {restaurant.rating}
          </div>
        </div>
        
        <p className="text-xs text-gray-500 font-medium mb-2">{restaurant.location}</p>
        
        <div className="mt-auto flex flex-wrap gap-1">
          {(Array.isArray(restaurant.cuisines) ? restaurant.cuisines : (restaurant.cuisines || '').split(', ')).slice(0, 3).map((cuisine, idx) => (
            <span key={idx} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full font-medium">
              {cuisine}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
