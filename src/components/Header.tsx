import React from 'react';
import { Home, Search, User, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              RenTopia
            </span>
          </div>
          
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <div className="w-full relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, property type..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900">
              List your property
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="w-6 h-6 text-gray-600" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}