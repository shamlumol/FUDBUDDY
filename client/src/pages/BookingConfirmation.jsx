import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, Calendar, Users } from 'lucide-react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { restaurant, bookingDetails } = location.state || {};

  const [status, setStatus] = useState('PENDING'); // PENDING -> CONFIRMED

  useEffect(() => {
    // Simulate restaurant accepting the booking after 2.5 seconds
    const timer = setTimeout(() => {
      setStatus('CONFIRMED');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!restaurant || !bookingDetails) {
    return (
      <div className="p-10 text-center">
        <p>Invalid booking session.</p>
        <button onClick={() => navigate('/')} className="text-primary mt-4">Go Home</button>
      </div>
    );
  }

  const handleViewPass = () => {
    navigate(`/dining-pass/${id}`, {
      state: { restaurant, bookingDetails, bookingId: id }
    });
  };

  return (
    <div className="w-full bg-background min-h-screen font-sans flex flex-col justify-center items-center p-5">
      
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Loading / Success Animation */}
        <div className="mb-6 relative">
          {status === 'PENDING' ? (
            <div className="w-20 h-20 rounded-full border-4 border-gray-100 border-t-primary animate-spin"></div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center animate-bounce">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
          )}
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
          {status === 'PENDING' ? 'Booking Requested' : 'Booking Confirmed!'}
        </h1>
        
        <p className="text-sm text-gray-500 mb-8">
          {status === 'PENDING' 
            ? 'Your table request has been sent to the restaurant. Waiting for confirmation...' 
            : 'Your table is ready. We canâ€™t wait to host you!'}
        </p>

        {/* Booking Card */}
        <div className="w-full bg-gray-50 rounded-2xl border border-gray-100 p-5 mb-8 text-left">
          <h2 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">{restaurant.name}</h2>
          
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-700">
              <Calendar size={16} className="text-gray-400 mr-3" />
              {bookingDetails.date}
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Clock size={16} className="text-gray-400 mr-3" />
              {bookingDetails.time}
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Users size={16} className="text-gray-400 mr-3" />
              {bookingDetails.guests} Guests
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-xs">
            <span className="text-gray-500">Booking ID</span>
            <span className="font-bold text-gray-900">{id}</span>
          </div>
        </div>

        {/* Actions */}
        {status === 'CONFIRMED' && (
          <div className="w-full space-y-3">
            <button 
              onClick={handleViewPass}
              className="w-full py-3.5 bg-primary text-white rounded-xl text-sm font-bold shadow-md hover:bg-red-600 transition-all"
            >
              VIEW DINING PASS
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default BookingConfirmation;
