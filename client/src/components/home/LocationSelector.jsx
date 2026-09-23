import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const locations = [
  "Abha",
  "Al Hasa",
  "Al Qatif",
  "Arar",
  "Buraidah",
  "Dammam",
  "Dhahran",
  "Hail",
  "Jeddah",
  "Jizan",
  "Jubail",
  "Khamis Mushait",
  "Khobar",
  "Mecca",
  "Medina",
  "Najran",
  "Riyadh",
  "Tabuk",
  "Taif",
  "Yanbu"
];

const LocationSelector = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
        aria-label="Select location"
      >
        <MapPin size={16} className={`transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 ${isOpen ? "text-green-500" : "text-gray-500 group-hover:text-green-500"}`} />
        <span className="truncate max-w-[120px]">{selectedLocation}</span>
        <ChevronDown size={16} className={`text-gray-400 transition-all duration-300 group-hover:translate-y-0.5 ${isOpen ? "rotate-180 text-green-500" : "group-hover:text-green-500"}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-50 py-2 max-h-60 overflow-y-auto">
          {locations.map((loc, idx) => (
            <button
              key={idx}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${selectedLocation === loc ? 'text-green-600 font-bold bg-green-50/50' : 'text-gray-700'}`}
              onClick={() => {
                setSelectedLocation(loc);
                setIsOpen(false);
              }}
            >
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
