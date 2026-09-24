import React from 'react';
import { ArrowLeft, MapPin, Ticket, AlertCircle } from 'lucide-react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const DiningPass = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { restaurant, bookingDetails } = location.state || {};

  if (!restaurant || !bookingDetails) {
    return (
      <div className="p-10 text-center">
        <p>Invalid pass.</p>
        <button onClick={() => navigate('/')} className="text-primary mt-4">Go Home</button>
      </div>
    );
  }

  // A simple static QR mock for the frontend demo
  const mockQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`FB-PASS-${id}`)}`;

  return (
    <div className="w-full bg-primary min-h-screen font-sans flex flex-col pt-6 px-5 pb-10">
      
      <header className="flex items-center text-white mb-6">
        <button onClick={() => navigate('/')} className="mr-3">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">My Dining Pass</h1>
      </header>

      {/* The Pass Ticket */}
      <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
        
        {/* Top Section */}
        <div className="p-6 text-center border-b-2 border-dashed border-gray-200 bg-gray-50">
          <h2 className="text-2xl font-extrabold text-primary mb-1">
            {bookingDetails.offer ? bookingDetails.offer.discount : 'CONFIRMED'}
          </h2>
          <p className="text-sm font-bold text-gray-900">{restaurant.name}</p>
          <p className="text-[10px] text-gray-500 mt-1 flex items-center justify-center">
            <MapPin size={10} className="mr-1" /> {restaurant.location}
          </p>
        </div>
        
        {/* Semi circles for ticket cut effect */}
        <div className="absolute left-[-15px] top-[100px] w-[30px] h-[30px] bg-primary rounded-full"></div>
        <div className="absolute right-[-15px] top-[100px] w-[30px] h-[30px] bg-primary rounded-full"></div>

        {/* Middle Section: QR Code */}
        <div className="p-8 flex flex-col items-center">
          <p className="text-xs font-bold text-gray-900 mb-4 text-center">
            Show this QR code at the restaurant
          </p>
          <div className="w-48 h-48 bg-white border-4 border-primary rounded-2xl p-2 mb-4 shadow-sm">
            <img loading="lazy" src={mockQrUrl} alt="QR Code" className="w-full h-full" />
          </div>
          <p className="text-[10px] text-gray-400">Scan to validate booking and offer</p>
        </div>

        {/* Bottom Section: Details */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Date</span>
            <span className="font-bold text-gray-900">{bookingDetails.date}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Time</span>
            <span className="font-bold text-gray-900">{bookingDetails.time}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Guests</span>
            <span className="font-bold text-gray-900">{bookingDetails.guests} People</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Booking ID</span>
            <span className="font-bold text-gray-900">{id}</span>
          </div>
        </div>

      </div>

      <div className="w-full max-w-sm mx-auto mt-6 flex items-start text-white/80 text-xs">
        <AlertCircle size={14} className="mr-2 flex-shrink-0 mt-0.5" />
        <p>This pass is valid only for the specified date and time. Do not share this QR code.</p>
      </div>

    </div>
  );
};

export default DiningPass;
