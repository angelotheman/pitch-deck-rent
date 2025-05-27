import React, { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Square, MessageCircle } from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg font-bold text-blue-600">Ghs{price.toLocaleString()}/mo</p>
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