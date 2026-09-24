import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';

const Wishlist = () => {
  const [savedFoods, setSavedFoods] = useState([]);

  // Optional: add a function to refresh the wishlist
  const refreshWishlist = () => {
    const saved = JSON.parse(localStorage.getItem('savedFoods') || '[]');
    setSavedFoods(saved);
  };

  useEffect(() => {
    refreshWishlist();
    // Re-check periodically or add a global listener if needed, but for now simple refresh on mount
    window.addEventListener('storage', refreshWishlist);
    return () => window.removeEventListener('storage', refreshWishlist);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 w-full flex-1">
      <h1 className="text-3xl font-extrabold text-[#112431] mb-2">My Wishlist</h1>
      <p className="text-gray-500 font-medium mb-8">All your favorite saved dishes in one place.</p>
      
      {savedFoods.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-[24px] border border-gray-100 flex flex-col items-center justify-center">
          <p className="text-gray-500 font-bold mb-4">Your wishlist is currently empty.</p>
          <a href="/search" className="bg-[#112431] text-white px-6 py-3 rounded-full font-bold hover:bg-[#8cc63f] transition-colors">
            Discover Foods
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedFoods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
