import React from 'react';

const FoodSuggestions = () => {
  const foodCompanions = [
    {
      id: 1,
      name: 'Grilled Chicken Bowl',
      price: 'SR 16',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 2,
      name: 'Quinoa Salad Bowl',
      price: 'SR 14',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="w-full">
      <h2 className="text-lg font-extrabold text-[#112431] mb-5">Food Suggestions</h2>
      
      {/* Food Companions Section */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-500 mb-4">Food Companions</h3>
        <div className="flex gap-4">
          {foodCompanions.map(food => (
            <div key={food.id} className="flex-1 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-full h-24 rounded-xl overflow-hidden mb-3">
                <img decoding="async" loading="lazy" src={food.image} alt={food.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-[13px] font-extrabold text-gray-900 mb-2 leading-tight line-clamp-2">
                {food.name}
              </h4>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-gray-900">{food.price}</span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-gray-700">
                  <span className="text-yellow-500">â˜…</span> {food.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Veggy Sides Section */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 mb-4">Veggy Sides</h3>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[14px] font-extrabold text-gray-900 mb-2">Vegetable Pasta</h4>
              <div className="flex items-center gap-4">
                <span className="text-[14px] font-bold text-gray-900">SR 14</span>
                <div className="flex items-center gap-1 text-[12px] font-bold text-gray-700">
                  <span className="text-yellow-500">â˜…</span> 4.5
                </div>
              </div>
            </div>
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
              <img decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=200" alt="Veggy Pasta" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSuggestions;
