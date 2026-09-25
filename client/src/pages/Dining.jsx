import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { getRestaurants, getCollections } from '../services/api';
import { Link } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import FilterChip from '../components/FilterChip';
import Header from '../components/Header';

const Dining = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [restRes, collRes] = await Promise.all([
          getRestaurants(),
          getCollections()
        ]);
        setRestaurants(restRes.data || []);
        setCollections(collRes || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading...</div>;
  }
  
  if (restaurants.length === 0 && collections.length === 0) {
    return <div className="p-8 text-center text-red-500 font-bold">Failed to load data. Please ensure the backend server is running on port 5000.</div>;
  }

  return (
    <div className="w-full bg-background min-h-screen pb-24 md:pb-10 font-sans">
      <Breadcrumbs items={[{ label: 'Dining Pass' }]} />
      <div className="md:hidden">
        <Header />
      </div>

      <div className="w-full mx-auto px-5 md:px-10 pt-6">
        
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Dining Out</h1>
            <p className="text-gray-500 mt-1">Discover the best restaurants, cafes, and bars</p>
          </div>
        </div>

        {/* Mobile Title */}
        <h1 className="text-xl font-bold text-gray-900 mb-6 md:hidden">Dining Out</h1>

        {/* Collections */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Curated Collections</h3>
          </div>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-4 md:space-x-0 md:gap-4">
            {collections.map(col => (
              <div key={col.id} className="relative w-40 h-48 md:w-full md:h-64 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group shadow-sm">
                <img decoding="async" loading="lazy" src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm md:text-lg font-bold leading-tight">{col.title}</p>
                  <p className="text-[10px] md:text-xs mt-1">{col.places}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4 mb-6">
          <FilterChip label="Filters" />
          <FilterChip label="Offers" />
          <FilterChip label="Rating 4.0+" />
          <FilterChip label="Outdoor Seating" />
          <FilterChip label="Pure Veg" />
        </div>

        {/* Main Feed Grid */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Restaurants Near You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-8 md:gap-y-12">
             {restaurants.map(rest => (
               <Link to={`/restaurant/${rest.id}`} key={rest.id}>
                  <RestaurantCard restaurant={rest} isCompact={false} />
               </Link>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Dining;
