import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import RestaurantCard from '../components/RestaurantCard';

const Wishlist = () => {
  const [savedFoods, setSavedFoods] = useState([]);
  const [savedRestaurants, setSavedRestaurants] = useState([]);
  const [activeTab, setActiveTab] = useState('foods');

  const refreshWishlist = () => {
    const userEmail = JSON.parse(localStorage.getItem('fudbuddy_current_user') || 'null')?.email || 'guest';
    const foods = JSON.parse(localStorage.getItem(`fudbuddy_savedFoods_${userEmail}`) || '[]');
    const restaurants = JSON.parse(localStorage.getItem(`fudbuddy_savedRestaurants_${userEmail}`) || '[]');
    setSavedFoods(foods);
    setSavedRestaurants(restaurants);
  };

  useEffect(() => {
    refreshWishlist();
    window.addEventListener('storage', refreshWishlist);
    return () => window.removeEventListener('storage', refreshWishlist);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 w-full flex-1 min-h-screen">
      <Breadcrumbs items={[{ label: 'Wishlist' }]} />
      
  
      <h1 className="text-3xl font-extrabold text-[#112431] mb-2">My Wishlist</h1>
      <p className="text-gray-500 font-medium mb-8">All your favorite saved items in one place.</p>
      
      {/* Tabs */}
      <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('foods')}
          className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-[14px] transition-colors ${activeTab === 'foods' ? 'bg-[#112431] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
        >
          Saved Foods ({savedFoods.length})
        </button>
        <button 
          onClick={() => setActiveTab('restaurants')}
          className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-[14px] transition-colors ${activeTab === 'restaurants' ? 'bg-[#112431] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
        >
          Saved Restaurants ({savedRestaurants.length})
        </button>
      </div>

      {activeTab === 'foods' && (
        <>
          {savedFoods.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-[24px] border border-gray-100 flex flex-col items-center justify-center animate-fade-in-down">
              <p className="text-gray-500 font-bold mb-4">You haven't saved any foods yet.</p>
              <Link to="/search?tab=Food" className="bg-[#8cc63f] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#7ab135] transition-colors shadow-sm">
                Discover Foods
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-down">
              {savedFoods.map(food => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'restaurants' && (
        <>
          {savedRestaurants.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-[24px] border border-gray-100 flex flex-col items-center justify-center animate-fade-in-down">
              <p className="text-gray-500 font-bold mb-4">You haven't saved any restaurants yet.</p>
              <Link to="/search?tab=Restaurants" className="bg-[#8cc63f] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#7ab135] transition-colors shadow-sm">
                Explore Restaurants
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-down">
              {savedRestaurants.map(restaurant => (
                <Link to={`/restaurant/${restaurant.id}/menu`} key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;
