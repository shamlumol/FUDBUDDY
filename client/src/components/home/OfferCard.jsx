import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = ({ offer }) => {
  return (
    <Link 
      to={`/offers/${offer.id}`} 
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-red-100 transition-all cursor-pointer flex-shrink-0 w-[240px] md:w-auto"
    >
      <div className="w-full h-32 bg-gray-50 relative overflow-hidden">
        <img decoding="async" 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-[#8cc63f] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm">
          {offer.discount}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-[15px] font-extrabold text-gray-900 mb-1">{offer.title}</h4>
        <p className="text-xs text-gray-500 font-medium mb-3 line-clamp-1">{offer.description}</p>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-[11px] text-gray-400 font-medium">{offer.restaurantName}</span>
          <button className="bg-[#f0f8e8] text-[#8cc63f] text-[11px] font-bold px-3 py-1.5 rounded-full group-hover:bg-[#8cc63f] group-hover:text-white transition-colors">
            View Offer
          </button>
        </div>
      </div>
    </Link>
  );
};

export default OfferCard;
