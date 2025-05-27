import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">© RenTopia, 2024</div>
          
          <div className="flex items-center gap-6">
            <a href="https://facebook.com/themanangelo" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/theman_angelo" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/_angelotheman" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/angelotheman" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Shield className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}