import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingReview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { restaurant, bookingDetails } = location.state || {};

  if (!restaurant || !bookingDetails) {
    return (
      <div className="p-10 text-center">
      <Breadcrumbs items={[{ label: 'Booking Review' }]} />
        <p>Invalid booking session.</p>
        <button onClick={() => navigate('/')} className="text-primary mt-4">Go Home</button>
      </div>
    );
  }

  const handleConfirm = () => {
    // Generate a mock booking ID
    const bookingId = `FB-${Math.floor(10000 + Math.random() * 90000)}`;
    navigate(`/booking/confirmation/${bookingId}`, {
      state: { restaurant, bookingDetails, bookingId }
    });
  };

  return (
    <div className="w-full bg-background min-h-screen pb-24 font-sans max-w-2xl mx-auto md:pt-10 md:px-5">
      
      {/* Header */}
      <header className="flex items-center px-5 pt-6 pb-4 bg-white sticky top-0 z-20 shadow-sm md:rounded-t-2xl border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 leading-tight">Review Booking</h1>
      </header>

      <div className="p-5 bg-white md:rounded-b-2xl md:shadow-sm md:pb-6">
        
        {/* Restaurant Summary */}
        <div className="flex items-center mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
          <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden mr-4">
            <img decoding="async" loading="lazy" src={restaurant.logo} alt={restaurant.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-1">{restaurant.name}</h2>
            <p className="text-xs text-gray-500 flex items-center">
              <MapPin size={12} className="mr-1" /> {restaurant.location}
            </p>
          </div>
        </div>

        {/* Booking Details Grid */}
        <h3 className="text-sm font-bold text-gray-900 mb-4">Reservation Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">Date</p>
            <p className="text-sm font-bold text-gray-900">{bookingDetails.date}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">Time</p>
            <p className="text-sm font-bold text-gray-900">{bookingDetails.time}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">Guests</p>
            <p className="text-sm font-bold text-gray-900">{bookingDetails.guests} People</p>
          </div>
          {bookingDetails.offer && (
            <div className="bg-[#f0f8e8] border border-primary rounded-2xl p-4">
              <p className="text-xs text-primary mb-1">Applied Offer</p>
              <p className="text-sm font-extrabold text-primary">{bookingDetails.offer.discount}</p>
            </div>
          )}
        </div>

        {/* Terms */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <h4 className="text-xs font-bold text-gray-900 mb-2">Important Information</h4>
          <ul className="text-[11px] text-gray-500 space-y-2 list-disc pl-4">
            <li>Your table will be held for 15 minutes from the reservation time.</li>
            <li>Offers are subject to restaurant verification upon arrival.</li>
            <li>For parties larger than 10, please contact the restaurant directly.</li>
          </ul>
        </div>

      </div>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-5 md:relative md:bg-transparent md:border-none md:p-0 md:mt-6">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={handleConfirm}
            className="w-full py-4 bg-primary text-white rounded-xl text-base font-bold shadow-md hover:bg-red-600 transition-all"
          >
            CONFIRM BOOKING
          </button>
        </div>
      </div>

    </div>
  );
};

export default BookingReview;
