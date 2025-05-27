import React from 'react';
import { Home as HomeIcon, DollarSign, Filter } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <button className="flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium">
            <HomeIcon className="w-4 h-4 mr-2" />
            All Properties
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-100">
            <DollarSign className="w-4 h-4 mr-2" />
            Price Range
          </button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-gray-100">
            Bedrooms
          </button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-gray-100">
            Property Type
          </button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-gray-100">
            Amenities
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-100 ml-auto">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>
    </div>
  );
}