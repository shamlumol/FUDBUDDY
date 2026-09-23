import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import FoodCard from '../FoodCard';

const FoodGrid = ({ foods, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse bg-white rounded-[24px] border border-gray-100 p-3 h-[320px]">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
            <div className="mt-auto flex justify-between">
              <div className="h-6 bg-gray-200 rounded w-16"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!foods || foods.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 p-12 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <UtensilsCrossed size={40} className="text-gray-300" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">No food items found</h3>
        <p className="text-gray-500 font-medium max-w-sm">We couldn't find any items matching your current filters in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {foods.map((food) => (
        <FoodCard key={food.id || food._id} food={food} />
      ))}
    </div>
  );
};

export default FoodGrid;
