import React from 'react';
import SectionHeader from '../common/SectionHeader';
import FoodCard from './FoodCard';
import { foods } from '../../data/foods';

const TrendingSection = () => {
  return (
    <section className="mb-0">
      <div className="px-1">
        <SectionHeader title="Trending Near You" seeAllLink="/search?tab=Food" />
      </div>
      
      {/* Mobile: Horizontal Scroll */}
      <div className="flex md:hidden space-x-4 overflow-x-auto scrollbar-hide pb-4 px-1 -mx-1 snap-x">
        {foods.slice(0, 5).map((food) => (
          <div key={food.id} className="snap-start">
            <FoodCard food={food} compact={true} />
          </div>
        ))}
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-5">
        {foods.slice(0, 5).map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
