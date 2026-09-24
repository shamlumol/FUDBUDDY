import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { offersData, restaurants } from '../data/mockData';

const OfferRedemption = () => {
  const navigate = useNavigate();
  const { offerId } = useParams();
  
  const offer = offersData.find(o => o.id === parseInt(offerId)) || offersData[0];
  const restaurant = restaurants.find(r => r.id === offer?.restaurantId) || restaurants[0];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  // 1: Offer detail, 2: QR Code

  const handleClaim = () => setStep(2);
  const handleScan = () => setStep(3);

  if (!offer) return <div className="p-10 text-center">Offer not found.</div>;

  return (
    <div className="w-full bg-background min-h-screen pb-24 md:pb-10 font-sans">
      
      {/* ========================================================= */}
      {/* MOBILE LAYOUT                                             */}
      {/* ========================================================= */}
      <div className="md:hidden flex flex-col items-center">
        {step < 3 && (
          <header className="w-full flex items-center px-5 pt-6 pb-4">
            <button onClick={() => step === 1 ? navigate(-1) : setStep(step - 1)} className="mr-3 text-gray-900">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-gray-900">
              {step === 1 ? 'Offer Details' : 'My QR Code'}
            </h1>
          </header>
        )}

        <div className="px-5 w-full flex-1 flex flex-col mt-4">
          {step === 1 && (
            <div className="w-full flex flex-col">
              <div className="w-full h-56 bg-gray-200 rounded-2xl mb-6 relative overflow-hidden">
                <img loading="lazy" src={offer.image} alt={offer.discount} className="w-full h-full object-cover" />
              </div>
              
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{offer.discount}</h2>
              <p className="text-sm text-gray-500 mb-2">{offer.title}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-8">{restaurant.name}</h3>

              <div className="space-y-4 mb-8">
                 <div className="flex items-center text-sm text-gray-600"><span className="w-6 font-bold">1.</span> Sign up / Login with your mobile & email</div>
                 <div className="flex items-center text-sm text-gray-600"><span className="w-6 font-bold">2.</span> Claim the offer</div>
                 <div className="flex items-center text-sm text-gray-600"><span className="w-6 font-bold">3.</span> Show the QR code at the restaurant</div>
                 <div className="flex items-center text-sm text-gray-600"><span className="w-6 font-bold">4.</span> Let the restaurant scan and redeem</div>
              </div>
              
              {!isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(true)} className="w-full bg-primary text-white font-bold text-sm py-4 rounded-xl mb-4">
                  Login to Claim
                </button>
              ) : (
                <button onClick={handleClaim} className="w-full bg-primary text-white font-bold text-sm py-4 rounded-xl mb-4">
                  Claim Offer
                </button>
              )}
              <p className="text-center text-[10px] text-gray-400">Valid till 30 Sep 2025</p>
            </div>
          )}

          {step === 2 && (
            <div className="w-full text-center flex flex-col items-center mt-6">
              <div className="mb-8 flex justify-center">
                <img loading="lazy" src="/logo.png" alt="Fudbuddy Logo" className="h-8 object-contain" />
              </div>
              <p className="text-sm text-gray-600 mb-8 max-w-[200px] mx-auto">
                Show this QR code at the restaurant
              </p>
              
              <div className="w-48 h-48 bg-white border border-gray-100 p-2 mb-8 mx-auto">
                 <img loading="lazy" src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=fudbuddy-offer-${offer.id}`} alt="QR Code" className="w-full h-full object-contain" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{offer.discount}</h3>
              <p className="text-sm text-gray-600 font-bold mb-8">{restaurant.name}</p>
              
              <p className="text-[10px] text-gray-400 mb-12">Valid till 30 Sep 2025</p>

              <button onClick={handleScan} className="w-full bg-gray-100 text-gray-700 font-bold text-sm py-4 rounded-xl">
                Let the restaurant scan this QR code to redeem your offer.
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="w-full text-center flex flex-col items-center justify-center min-h-[50vh]">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} className="text-[#4CAF50]" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">OFFER REDEEMED</h2>
              <button onClick={() => navigate('/')} className="mt-8 bg-primary text-white font-bold text-sm px-8 py-3 rounded-xl">
                Done
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT                                            */}
      {/* ========================================================= */}
      <div className="hidden md:flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 md:px-6 lg:px-8 py-10 bg-[#f9fafb]">
        <div className="bg-white border border-gray-100 rounded-[32px] p-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex w-full w-full gap-10">
          
          {/* Left Col: Offer Summary */}
          <div className="w-[320px] flex-shrink-0 bg-[#f3f4f6] rounded-3xl p-6 flex flex-col items-center pb-10 border border-gray-100">
             <div className="w-full h-[260px] bg-gray-200 rounded-2xl mb-8 overflow-hidden shadow-sm">
               <img loading="lazy" src={offer.image} alt="Offer" className="w-full h-full object-cover" />
             </div>
             
             <div className="bg-[#8cc63f] text-white font-extrabold text-[22px] px-10 py-4 rounded-2xl w-full text-center mb-8 shadow-sm">
               {offer.discount}
             </div>
             
             <h3 className="font-extrabold text-[#112431] text-[18px] mb-2 text-center">{restaurant.name}</h3>
             <p className="text-[13px] text-gray-500 font-medium">Valid till 30 Sep 21:05</p>
          </div>

          {/* Center Col: Instructions & QR */}
          <div className="flex-1 border border-gray-100 rounded-3xl p-10 flex flex-col relative">
             <h4 className="font-extrabold text-[#112431] text-[20px] mb-8">Get Your Offer</h4>
             
             <div className="space-y-5 mb-10">
                <div className="flex items-center text-[14px] text-[#3a444a] font-medium">
                  <span className="w-7 h-7 rounded-full bg-[#f3f4f6] text-[#3a444a] flex items-center justify-center font-bold mr-4 text-[13px]">1</span> 
                  Sign up / Login with your mobile & email
                </div>
                <div className="flex items-center text-[14px] text-[#3a444a] font-medium">
                  <span className="w-7 h-7 rounded-full bg-[#f3f4f6] text-[#3a444a] flex items-center justify-center font-bold mr-4 text-[13px]">2</span> 
                  Claim the offer
                </div>
                <div className="flex items-center text-[14px] text-[#3a444a] font-medium">
                  <span className="w-7 h-7 rounded-full bg-[#f3f4f6] text-[#3a444a] flex items-center justify-center font-bold mr-4 text-[13px]">3</span> 
                  Show the QR code at the restaurant
                </div>
                <div className="flex items-center text-[14px] text-[#3a444a] font-medium">
                  <span className="w-7 h-7 rounded-full bg-[#f3f4f6] text-[#3a444a] flex items-center justify-center font-bold mr-4 text-[13px]">4</span> 
                  Let the restaurant scan and redeem
                </div>
             </div>
             
              <div className="flex flex-col items-center mt-6">
               {!isLoggedIn ? (
                 <div className="w-[200px] h-[200px] bg-gray-100 border border-gray-200 flex flex-col items-center justify-center p-4 mb-6 rounded-2xl">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <p className="text-sm font-bold text-gray-500 text-center">Login required to view QR Code</p>
                 </div>
               ) : (
                 <div className="w-[200px] h-[200px] bg-white border border-gray-100 p-2 mb-6">
                    <img loading="lazy" src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=fudbuddy-offer-${offer.id}`} alt="QR Code" className="w-full h-full object-contain" />
                 </div>
               )}
               
               {isLoggedIn && (
                 <>
                   <p className="font-extrabold text-[#112431] text-[16px] mb-1">Your QR Code</p>
                   <p className="text-[14px] text-gray-500 font-bold tracking-wider mb-8">FB-245B-7A9</p>
                 </>
               )}
               
               {!isLoggedIn ? (
                 <button onClick={() => setIsLoggedIn(true)} className="bg-[#8cc63f] text-white text-[15px] font-bold px-12 py-4 rounded-xl shadow-sm hover:bg-[#7ab135] transition-colors w-[300px]">
                   Login to Claim
                 </button>
               ) : (
                 <button className="bg-[#8cc63f] text-white text-[15px] font-bold px-12 py-4 rounded-xl shadow-sm hover:bg-[#7ab135] transition-colors w-[300px]">
                   Download / Share
                 </button>
               )}
              </div>
          </div>

          {/* Right Col: Helpers */}
          <div className="w-[280px] flex-shrink-0 flex flex-col gap-6">
             <div className="bg-[#f9fafb] border border-gray-100 rounded-3xl p-8 flex flex-col items-center flex-1 justify-center">
               <div className="w-[140px] h-[140px] bg-gray-200 rounded-full mb-8 mt-4 flex items-center justify-center overflow-hidden shadow-inner">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
               </div>
               <p className="text-[15px] text-[#3a444a] font-bold text-center leading-relaxed">
                 Show this QR code at the restaurant
               </p>
             </div>
             
             <div className="bg-[#f9fafb] border border-gray-100 rounded-3xl p-8 flex flex-col justify-center h-[180px]">
               <p className="text-[15px] text-[#3a444a] font-bold text-center leading-relaxed">
                 Let the restaurant scan this QR code to redeem your offer.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OfferRedemption;
