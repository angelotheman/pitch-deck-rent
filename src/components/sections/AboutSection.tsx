import React from 'react';
import { Building, Shield, Search } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Verified Properties',
      description: 'Every listing is thoroughly verified for your peace of mind'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Process',
      description: 'Safe and transparent rental process from start to finish'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Easy Search',
      description: 'Find your perfect home with our intuitive search tools'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About RenTopia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Looking for your next rental home? We’re here to make the process simple, secure, and stress-free—connecting you to verified properties with just a click
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}