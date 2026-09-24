import React from 'react';
import { Link } from 'react-router-dom';
import { Sandwich, Flame, UtensilsCrossed, Coffee, Soup, Leaf, Pizza, Fish, Cake, Sun, CupSoda, Utensils, Beef } from 'lucide-react';

const iconMap = {
  'indian': Flame,
  'chinese': UtensilsCrossed,
  'seafood': Fish,
  'biriyani': Soup,
  'desserts': Cake,
  'breakfast': Sun,
  'drinks': CupSoda,
  'burgers': Sandwich,
  'pizza': Pizza,
  'soups': Soup,
  'tandoori': Beef,
  'appetizers': Utensils,
  'noodles': UtensilsCrossed,
  'salads': Leaf
};

const CategoryCard = ({ category }) => {
    const IconComponent = iconMap[category.slug] || UtensilsCrossed;

    return (
      <Link 
        to={`/category/${category.slug}`}
        className="flex flex-col items-center group flex-shrink-0 w-16 md:w-24 gap-2 md:gap-3 py-2 transition-transform duration-300 hover:-translate-y-1.5"
      >
        <div className="w-12 h-12 md:w-18 md:h-18 rounded-lg md:rounded-full flex items-center justify-center bg-[#f7f8f9] group-hover:bg-[#8cc63f] text-[#112431] group-hover:text-white transition-all duration-300 ease-out shadow-sm border border-gray-100/50 group-hover:shadow-lg group-hover:shadow-[#8cc63f]/30">
          <IconComponent size={20} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 md:w-6 md:h-6" />
        </div>
        <span className="text-[10px] md:text-[13px] font-extrabold text-gray-500 group-hover:text-[#112431] text-center tracking-tight transition-colors">
          {category.name}
        </span>
      </Link>
    );
};

export default CategoryCard;
