import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ShieldAlert, ArrowLeft, RefreshCw, AlertTriangle } from 'lucide-react';
import { toast } from '../components/ui/Toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    try {
      const data = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
      setRestaurants(data);
    } catch(e) {
      setRestaurants([]);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this restaurant and all its menu items?')) return;

    try {
      // Remove restaurant
      const rests = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
      const updatedRests = rests.filter(r => r.id !== id);
      localStorage.setItem('customRestaurants', JSON.stringify(updatedRests));

      // Remove associated foods
      const foods = JSON.parse(localStorage.getItem('customFoods') || '[]');
      const updatedFoods = foods.filter(f => f.restaurantId !== id);
      localStorage.setItem('customFoods', JSON.stringify(updatedFoods));

      toast('Restaurant deleted successfully', 'success');
      loadData();
    } catch(e) {
      toast('Failed to delete', 'error');
    }
  };

  const handleClearAll = () => {
    if (!window.confirm('WARNING: This will delete ALL custom restaurants and menus. Are you absolutely sure?')) return;
    
    localStorage.removeItem('customRestaurants');
    localStorage.removeItem('customFoods');
    toast('All custom data cleared', 'success');
    loadData();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center">
            <button onClick={() => navigate('/')} className="p-2 mr-4 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="text-red-600" size={24} />
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Admin Dashboard</h1>
              </div>
              <p className="text-gray-600 text-sm mt-1">Manage locally submitted restaurants</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button onClick={loadData} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
              <RefreshCw size={18} />
              Refresh
            </button>
            <button onClick={handleClearAll} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-medium transition-colors">
              <AlertTriangle size={18} />
              Clear All Data
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {restaurants.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldAlert className="text-gray-400" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Custom Data Found</h3>
              <p className="text-gray-500 max-w-sm mx-auto">There are no locally registered restaurants to manage. Visit the Partner page to add one.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-4 font-bold text-gray-600 text-sm">ID</th>
                    <th className="p-4 font-bold text-gray-600 text-sm">Restaurant Info</th>
                    <th className="p-4 font-bold text-gray-600 text-sm">Status</th>
                    <th className="p-4 font-bold text-gray-600 text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {restaurants.map((rest) => (
                    <tr key={rest.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-sm font-mono text-gray-500">#{rest.id}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img decoding="async" loading="lazy" src={rest.logo} alt={rest.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                          <div>
                            <div className="font-bold text-gray-900">{rest.name}</div>
                            <div className="text-xs text-gray-500">{rest.location} • {rest.contact}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                          Active (Local)
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleDelete(rest.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Restaurant"
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
