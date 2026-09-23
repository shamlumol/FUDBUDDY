import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, Clock, Tag } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { restaurants, offersData } from '../data/mockData';

const BookTable = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id)) || restaurants[0];
  const availableOffers = offersData.filter(o => o.restaurantId === restaurant.id);

  const [date, setDate] = useState('Today, 18 Sep');
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState('');
  const [selectedOffer, setSelectedOffer] = useState(null);

  const timeSlots = [
    { time: '7:00 PM', status: 'Available' },
    { time: '7:30 PM', status: 'Available' },
    { time: '8:00 PM', status: 'Few tables left' },
    { time: '8:30 PM', status: 'Available' },
    { time: '9:00 PM', status: 'Unavailable' },
    { time: '9:30 PM', status: 'Unavailable' }
  ];

  const handleContinue = () => {
    if (!time) return;
    navigate('/booking/review', {
      state: {
        restaurant,
        bookingDetails: { date, guests, time, offer: selectedOffer }
      }
    });
  };

  return (
    <div className="w-full bg-background min-h-screen pb-24 font-sans max-w-2xl mx-auto md:pt-10 md:px-5">
      
      {/* Header */}
      <header className="flex items-center px-5 pt-6 pb-4 bg-white sticky top-0 z-20 shadow-sm md:rounded-t-2xl border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">Book a Table</h1>
          <p className="text-xs text-gray-500">{restaurant.name}</p>
        </div>
      </header>

      <div className="px-5 pt-6 bg-white md:rounded-b-2xl md:shadow-sm md:pb-6">
        
        {/* Step 1: Date */}
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <Calendar size={18} className="text-primary mr-2" />
            <h2 className="text-sm font-bold text-gray-900">Choose Date</h2>
          </div>
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
            {['Today, 18 Sep', 'Tomorrow, 19 Sep', 'Friday, 20 Sep'].map(d => (
              <button 
                key={d}
                onClick={() => setDate(d)}
                className={`px-5 py-2 rounded-xl text-sm font-bold whitespace-nowrap border transition-colors ${date === d ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200'}`}
              >
                {d}
              </button>
            ))}
          </div>
        </section>

        {/* Step 2: Guests */}
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <Users size={18} className="text-primary mr-2" />
            <h2 className="text-sm font-bold text-gray-900">Number of Guests</h2>
          </div>
          <div className="flex items-center space-x-6 bg-gray-50 border border-gray-100 p-2 rounded-2xl w-fit">
            <button 
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-900 font-bold text-xl"
            >
              âˆ’
            </button>
            <span className="text-xl font-extrabold text-gray-900 w-4 text-center">{guests}</span>
            <button 
              onClick={() => setGuests(Math.min(10, guests + 1))}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-900 font-bold text-xl"
            >
              +
            </button>
          </div>
        </section>

        {/* Step 3: Time */}
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <Clock size={18} className="text-primary mr-2" />
            <h2 className="text-sm font-bold text-gray-900">Choose Time</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map(slot => {
              const isUnavailable = slot.status === 'Unavailable';
              const isSelected = time === slot.time;
              return (
                <button 
                  key={slot.time}
                  disabled={isUnavailable}
                  onClick={() => setTime(slot.time)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                    isUnavailable ? 'bg-gray-50 border-gray-100 opacity-50 cursor-not-allowed' :
                    isSelected ? 'bg-primary border-primary text-white shadow-sm' :
                    'bg-white border-gray-200 text-gray-700 hover:border-primary'
                  }`}
                >
                  <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>{slot.time}</span>
                  <span className={`text-[10px] mt-1 ${isSelected ? 'text-white/90' : slot.status === 'Few tables left' ? 'text-orange-500' : 'text-green-600'}`}>
                    {slot.status}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 4: Offer */}
        {availableOffers.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-3">
              <Tag size={18} className="text-primary mr-2" />
              <h2 className="text-sm font-bold text-gray-900">Apply an Offer (Optional)</h2>
            </div>
            <div className="flex flex-col space-y-3">
              {availableOffers.map(offer => (
                <label 
                  key={offer.id} 
                  className={`flex items-start p-4 rounded-2xl border cursor-pointer transition-colors ${selectedOffer?.id === offer.id ? 'bg-[#f0f8e8] border-primary' : 'bg-white border-gray-200'}`}
                >
                  <input 
                    type="radio" 
                    name="offer" 
                    className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300"
                    checked={selectedOffer?.id === offer.id}
                    onChange={() => setSelectedOffer(offer)}
                  />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-extrabold text-primary mb-0.5">{offer.discount}</p>
                    <p className="text-xs text-gray-700 font-medium">{offer.title || 'Pre-book offer'}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-5 md:relative md:bg-transparent md:border-none md:p-0 md:mt-6">
        <div className="max-w-2xl mx-auto">
          <button 
            disabled={!time}
            onClick={handleContinue}
            className={`w-full py-4 rounded-xl text-base font-bold transition-all ${
              time ? 'bg-primary text-white shadow-md hover:bg-red-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>

    </div>
  );
};

export default BookTable;
