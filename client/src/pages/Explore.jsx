import React, { useState } from 'react';
import { FiSearch, FiSliders, FiHeart, FiStar, FiMap, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Map pins

const Explore = () => {
  const [view, setView] = useState('list'); // 'list' or 'map'

  // Dummy data representing the wireframe list
  const restaurants = [
    { id: 1, name: 'Burger House', rating: 4.8, reviews: 324, price: '$$', cuisine: 'Burgers', distance: '1.2 km', offer: '20% OFF' },
    { id: 2, name: 'Cafe Moka', rating: 4.7, reviews: 212, price: '$$', cuisine: 'Coffee', distance: '1.1 km', offer: '15% OFF' },
    { id: 3, name: 'Al Tazaj', rating: 4.6, reviews: 154, price: '$', cuisine: 'Saudi', distance: '1.3 km', offer: 'Free Drink' },
    { id: 4, name: 'Sushi Yaki', rating: 4.8, reviews: 310, price: '$$$', cuisine: 'Japanese', distance: '2.1 km', offer: '10% OFF' },
    { id: 5, name: 'Mama Noura', rating: 4.5, reviews: 98, price: '$', cuisine: 'Arabic', distance: '2.4 km', offer: null },
  ];

  return (
    <div className="flex flex-col h-full bg-white pb-6 relative">
      
      {/* Header Overlay for Map View Toggle */}
      <div className="flex justify-between items-center px-5 pt-4 pb-2">
        <h2 className="text-xl font-bold text-gray-900">Explore</h2>
        <button 
          onClick={() => setView(view === 'list' ? 'map' : 'list')}
          className="flex items-center text-primary text-sm font-bold bg-primary/10 px-3 py-1.5 rounded-full"
        >
          {view === 'list' ? <><FiMap className="mr-1.5" /> Map View</> : <><FiList className="mr-1.5" /> List View</>}
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-5 mb-4">
        <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl">
          <FiSearch size={18} className="text-gray-400 mr-3" />
          <input 
            type="text" 
            placeholder="" 
            className="w-full bg-transparent text-sm text-gray-900 focus:outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="px-5 mb-6">
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide pb-1">
          <button className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">All</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-50 whitespace-nowrap">Nearby</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-50 whitespace-nowrap">Offers</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-50 whitespace-nowrap">Open Now</button>
          <button className="bg-white border border-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-50 flex-shrink-0 ml-1">
            <FiSliders size={14} />
          </button>
        </div>
      </div>

      {/* CONDITIONAL RENDER: LIST VS MAP */}
      {view === 'list' ? (
        <div className="px-5 flex flex-col space-y-5">
          {restaurants.map((r, idx) => (
            <Link to={`/restaurant/${r.id}`} key={idx} className="flex bg-white relative">
              {/* Image Placeholder */}
              <div className="w-28 h-28 bg-gray-100 rounded-xl relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                  <span className="text-4xl font-light">âœ•</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="ml-4 flex-1 py-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 text-base leading-tight mb-1">{r.name}</h4>
                  <button className="text-gray-400 hover:text-[#8cc63f]">
                    <FiHeart size={18} />
                  </button>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <FiStar size={12} className="text-gray-900 mr-1 fill-current" />
                  <span className="font-bold text-gray-900">{r.rating}</span>
                  <span className="ml-1">({r.reviews})</span>
                  <span className="mx-2">â€¢</span>
                  <span>{r.price}</span>
                </div>
                
                <div className="text-xs text-gray-500 font-medium mb-3">
                  {r.cuisine} <span className="mx-2">â€¢</span> {r.distance}
                </div>
                
                {r.offer && (
                  <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-1 rounded">
                    {r.offer}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex-1 relative bg-[#e5e3df] min-h-[500px]">
          {/* Static Map Background Placeholder (Simulating Google Maps style lines) */}
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, #fff 48%, #fff 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, #fff 48%, #fff 52%, transparent 52%)', backgroundSize: '100px 100px' }}></div>
          
          {/* Map Pins */}
          <FaMapMarkerAlt size={28} className="absolute top-1/4 left-1/4 text-gray-800" />
          <FaMapMarkerAlt size={28} className="absolute top-1/3 right-1/4 text-gray-800" />
          <FaMapMarkerAlt size={28} className="absolute bottom-1/3 left-1/3 text-gray-800" />
          <FaMapMarkerAlt size={34} className="absolute bottom-1/4 right-1/3 text-primary drop-shadow-lg scale-110" />

          {/* Selected Restaurant Card Overlay */}
          <div className="absolute bottom-6 left-5 right-5">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <span className="text-3xl font-light">âœ•</span>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-bold text-gray-900 text-base mb-1">Burger House</h4>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <FiStar size={12} className="text-gray-900 mr-1 fill-current" />
                    <span className="font-bold text-gray-900">4.8</span>
                    <span className="ml-1">(324)</span>
                    <span className="mx-2">â€¢</span>
                    <span>$$</span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium mb-2">
                    Burgers <span className="mx-2">â€¢</span> 1.2 km
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-1 rounded">
                    20% OFF
                  </span>
                </div>
              </div>
              <Link to="/restaurant/1" className="block w-full mt-4 border border-gray-300 text-gray-900 font-bold text-sm py-2 text-center rounded-xl hover:bg-gray-50 transition-colors">
                View Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
