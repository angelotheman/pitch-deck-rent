import React from 'react';
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
}

export function PropertyCard({ image, title, price, location, beds, baths, sqft }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg font-bold text-blue-600">${price.toLocaleString()}/mo</p>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">{location}</p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-600">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}