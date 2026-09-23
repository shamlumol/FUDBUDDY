import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Home, AlertCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';
import CategoryFilters from '../components/category/CategoryFilters';
import FoodGrid from '../components/category/FoodGrid';
import { getFoods } from '../services/api';

const formatCategoryName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [filters, setFilters] = useState({
    sort: 'popularity',
    isVeg: false,
    isAvailable: true
  });

  const categoryName = formatCategoryName(categorySlug || '');

  const fetchFoods = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Map categorySlug to our real categories (e.g. 'indian', 'drinks')
      // Note: The getFoods function in api.js supports filtering by category.
      const params = {
        category: categorySlug,
        ...filters
      };
      
      const response = await getFoods(params);
      setFoods(response.data);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while fetching data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
    window.scrollTo(0, 0);
  }, [categorySlug, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen flex flex-col">
      <main className="flex-1 w-full w-full mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-20 md:pb-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm font-medium text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#8cc63f] flex items-center transition-colors">
            <Home size={14} className="mr-1" />
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-gray-400">Categories</span>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-gray-900 font-bold">{categoryName}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#112431] mb-3">
            Best {categoryName} Near You
          </h1>
          <p className="text-gray-600 text-lg">
            Explore {isLoading ? '...' : foods.length} delicious {categoryName.toLowerCase()} options from top restaurants.
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center mb-8">
            <AlertCircle size={32} className="text-red-500 mb-3" />
            <h3 className="text-lg font-bold text-red-900 mb-1">Oops! Something went wrong</h3>
            <p className="text-red-700 mb-4">{error}</p>
            <button 
              onClick={fetchFoods}
              className="bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-6 rounded-full transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8 relative items-start">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <CategoryFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Food Grid */}
          <div className="flex-1 w-full">
            {!error && <FoodGrid foods={foods} isLoading={isLoading} />}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
