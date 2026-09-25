import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import RestaurantCard from '../home/RestaurantCard';
import FoodCard from '../FoodCard';
import { getRestaurants, getFoods } from '../../services/api';

const SearchResults = ({ query = '', showTags = false, showHeart = false, filters = {}, initialTab = 'Restaurants' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(initialTab || 'Restaurants');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);

  const prevDeps = useRef({ query, activeTab, filters });

  useEffect(() => {
    if (initialTab && (initialTab === 'Restaurants' || initialTab === 'Food') && initialTab !== activeTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (
      prevDeps.current.query !== query ||
      prevDeps.current.activeTab !== activeTab ||
      JSON.stringify(prevDeps.current.filters) !== JSON.stringify(filters)
    ) {
      setPage(1);
      setSearchParams(prev => {
        prev.set('page', '1');
        return prev;
      });
      prevDeps.current = { query, activeTab, filters };
    }
  }, [query, activeTab, filters, setSearchParams]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const params = {
          search: query,
          page,
          limit: 9,
          category: filters.category || '',
          type: filters.type || '',
          price: filters.price || '',
          distance: filters.distance || '',
          rating: filters.rating || ''
        };
        
        let res;
        if (activeTab === 'Restaurants') {
          res = await getRestaurants(params);
        } else {
          res = await getFoods(params);
        }
        
        setData(res.data || []);
        setTotalPages(res.totalPages || 1);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch results. Please ensure the backend server is running on port 5000.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [query, activeTab, page, filters]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      setSearchParams(prev => {
        prev.set('page', newPage.toString());
        return prev;
      });
    }
  };

  return (
    <div className="flex-1">
      <h2 className="text-xl font-extrabold text-[#112431] mb-6">
        {query ? `Results for "${query}"` : 'Suggested Results'}
      </h2>
      
      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('Restaurants')}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
            activeTab === 'Restaurants' 
              ? 'bg-[#8cc63f] text-white shadow-md' 
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Restaurants
        </button>
        <button 
          onClick={() => setActiveTab('Food')}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
            activeTab === 'Food' 
              ? 'bg-[#8cc63f] text-white shadow-md' 
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Food
        </button>
      </div>

      {/* Results List */}
      <div className="flex flex-col gap-4">
        {loading ? (
          <div className="p-8 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
            Loading...
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500 font-bold bg-white rounded-2xl border border-red-100">
            {error}
          </div>
        ) : activeTab === 'Restaurants' ? (
          data.length > 0 ? (
            <>
              {data.map(restaurant => (
                <RestaurantCard 
                  key={restaurant.id} 
                  restaurant={restaurant} 
                  layout="horizontal" 
                  showTags={showTags}
                  showHeart={showHeart}
                  searchQuery={query}
                />
              ))}
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-end items-center gap-2 mt-4 pt-2">
                  <button 
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  {(() => {
                    let pages = [];
                    if (totalPages <= 3) {
                      for (let i = 1; i <= totalPages; i++) pages.push(i);
                    } else {
                      if (page <= 2) pages = [1, 2, 3];
                      else if (page >= totalPages - 1) pages = [totalPages - 2, totalPages - 1, totalPages];
                      else pages = [page - 1, page, page + 1];
                    }
                    return pages.map(p => (
                      <button 
                        key={p} 
                        onClick={() => handlePageChange(p)}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${
                          page === p ? 'bg-[#8cc63f] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {p}
                      </button>
                    ));
                  })()}

                  <button 
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="p-8 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
              No restaurant results found for "{query}".
            </div>
          )
        ) : (
          data.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(food => (
                  <FoodCard 
                    key={food.id} 
                    food={food} 
                    searchQuery={query}
                  />
                ))}
              </div>
                            {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-end items-center gap-2 mt-4 pt-2">
                  <button 
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  {(() => {
                    let pages = [];
                    if (totalPages <= 3) {
                      for (let i = 1; i <= totalPages; i++) pages.push(i);
                    } else {
                      if (page <= 2) pages = [1, 2, 3];
                      else if (page >= totalPages - 1) pages = [totalPages - 2, totalPages - 1, totalPages];
                      else pages = [page - 1, page, page + 1];
                    }
                    return pages.map(p => (
                      <button 
                        key={p} 
                        onClick={() => handlePageChange(p)}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${
                          page === p ? 'bg-[#8cc63f] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {p}
                      </button>
                    ));
                  })()}

                  <button 
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="p-8 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
              No food results found for "{query}".
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchResults;
