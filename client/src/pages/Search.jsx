import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/layout/Footer';

import FilterSidebar from '../components/search/FilterSidebar';
import SearchResults from '../components/search/SearchResults';
import ActiveSearchHeader from '../components/search/ActiveSearchHeader';


const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  const tab = searchParams.get('tab');
  
  const initialCategory = searchParams.get('category') || '';
  
  const [filters, setFilters] = React.useState({
    category: initialCategory,
    type: '',
    price: '',
    distance: '',
    rating: ''
  });
  
  useEffect(() => {
    const cat = new URLSearchParams(location.search).get('category') || '';
    if (filters.category !== cat) {
      setFilters(prev => ({ ...prev, category: cat }));
    }
  }, [location.search]);
  
  // Handle updates from different components
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: prev[key] === value ? '' : value }));
  };
  
  // For demo purposes, we will treat any query as an active search, 
  // or default to active if 'q=demo' is passed.
  const isSearching = !!query;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <main className="flex-1 w-full w-full mx-auto px-4 md:px-6 lg:px-8 pt-4 md:pt-8 pb-20 md:pb-12">
        {!isSearching ? (
          <>

            <div className="flex flex-col md:flex-row relative">
              <div className="md:w-64 flex-shrink-0 md:pr-8 md:border-r border-gray-100">
                <FilterSidebar filters={filters} onFilterChange={updateFilter} />
              </div>
              <div className="flex-1 md:pl-8 mt-8 md:mt-0">
                <SearchResults query={query} filters={filters} initialTab={tab} />
              </div>
            </div>
          </>
        ) : (
          <>
            <ActiveSearchHeader query={query} activeFilter={filters.category} onFilterChange={(val) => updateFilter('category', val)} />
              <div className="flex-1 md:pr-8 mt-8 md:mt-0">
                <SearchResults query={query} filters={filters} showTags={true} showHeart={true} initialTab={tab} />
              </div>
          </>
        )}
      </main>

      {/* Desktop footer */}
      <Footer />
    </div>
  );
};

export default Search;
