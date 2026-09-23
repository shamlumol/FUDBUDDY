import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../../data/categories';

const CategorySection = () => {
  if (!categories || categories.length === 0) return null;
  return (
    <section className="mb-10 md:mb-12">
      <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-4 px-1">Popular Food</h3>
      
      {/* Mobile: Horizontal Scroll, Desktop: Centered */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pt-4 pb-6 px-4 -mx-4 snap-x md:justify-center">
        {categories.map((cat) => (
          <div key={cat.id} className="snap-start">
            <CategoryCard category={cat} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
