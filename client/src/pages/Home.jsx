import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHero from '../components/search/SearchHero';
import CategorySection from '../components/home/CategorySection';
import TrendingSection from '../components/home/TrendingSection';
import RestaurantSection from '../components/home/RestaurantSection';
import OfferSection from '../components/home/OfferSection';
import Footer from '../components/layout/Footer';
import { restaurants } from '../data/mockDatabase';

const Home = () => {
  const navigate = useNavigate();
  // Extract unique tags from all restaurants and take the first 8
  const dynamicTags = Array.from(new Set(restaurants.flatMap(r => r.tags))).slice(0, 8);
  return (
    <div className="w-full bg-white min-h-screen">
      <main className="w-full mx-auto px-4 md:px-6 lg:px-8 pt-4 pb-20 md:pb-8">
        
        {/* HERO / DISCOVERY */}
        <SearchHero />

        {/* POPULAR CATEGORIES */}
        <CategorySection />

        {/* TRENDING & POPULAR RESTAURANTS SPLIT */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 md:mb-12">
          {/* Left: Trending Near You */}
          <div className="w-full md:w-[65%]">
            <TrendingSection />
          </div>

          {/* Right: Popular Restaurants */}
          <div className="w-full md:w-[35%]">
            <RestaurantSection />
          </div>
        </div>

        {/* FEATURED OFFERS */}
        <OfferSection />
        
        {/* ADDITIONAL DISCOVERY SECTION - Explore by Food */}
        <section className="mb-10 md:mb-12">
            <div className="bg-green-50 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-3">Partner with FudBuddy</h3>
                <p className="text-gray-600 mb-6 max-w-md">Grow your business and reach new customers by partnering with us. We handle the delivery so you can focus on the food.</p>
                
                <button onClick={() => navigate('/partner-with-us')} className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors shadow-sm hover:scale-105 active:scale-95">
                  List Your Restaurant
                </button>
              </div>
              
              <div className="w-full md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img loading="lazy" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600" alt="Chef Partner" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

      </main>

      {/* DESKTOP FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
