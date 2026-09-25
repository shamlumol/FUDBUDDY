import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import MobileBottomNav from './components/layout/MobileBottomNav';
import { ToastContainer } from './components/ui/Toast';
import PartnerRegistration from './pages/PartnerRegistration';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import Search from './pages/Search';
import CategoryPage from './pages/CategoryPage';
import RestaurantDetail from './pages/RestaurantDetail';
import Menu from './pages/Menu';
import FoodDetails from './pages/FoodDetails';
import Offers from './pages/Offers';
import OfferRedemption from './pages/OfferRedemption';
import Profile from './pages/Profile';
import Dining from './pages/Dining';
import BookTable from './pages/BookTable';
import BookingReview from './pages/BookingReview';
import BookingConfirmation from './pages/BookingConfirmation';
import DiningPass from './pages/DiningPass';
import Wishlist from './pages/Wishlist';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="bg-white min-h-screen relative flex flex-col w-full font-sans text-gray-900">
      <ScrollToTop />
      <ToastContainer />
      {/* Header handles both Desktop and Mobile top views */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/partner-with-us" element={<PartnerRegistration />} />

          <Route path="/search" element={<Search />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/restaurant/:id/menu" element={<Menu />} />
          <Route path="/restaurant/:id/book" element={<BookTable />} />
          <Route path="/booking/review" element={<BookingReview />} />
          <Route path="/booking/confirmation/:id" element={<BookingConfirmation />} />
          <Route path="/dining-pass/:id" element={<DiningPass />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/redeem/:offerId" element={<OfferRedemption />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}

export default App;
