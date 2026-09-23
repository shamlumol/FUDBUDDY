import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import RestaurantCard from './RestaurantCard';
import { restaurants } from '../../data/mockDatabase';

const RestaurantSection = () => {
  return (
    <section className="mb-0">
      <div className="pl-4 md:pl-8">
        <SectionHeader title="Popular Restaurants" />
      </div>
      
      {/* Vertical list for both mobile and desktop */}
      <div className="flex flex-col gap-4 pl-4 md:pl-8 pr-1">
        {restaurants.slice(0, 2).map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} layout="horizontal" />
        ))}
        
        {/* View More */}
        <div className="flex justify-center mt-2 pt-2">
          <Link to="/search" className="text-[#8cc63f] font-bold text-sm hover:underline">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
