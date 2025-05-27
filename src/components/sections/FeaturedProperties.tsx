import React from 'react';
import { PropertyCard } from '../property/PropertyCard';

const FEATURED_PROPERTIES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=800',
    title: 'Modern Downtown Apartment',
    price: 1000,
    location: 'Cantoments, La',
    beds: 2,
    baths: 2,
    sqft: 1200
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&w=800',
    title: 'Luxury Waterfront Villa',
    price: 3000,
    location: 'Marcathy Hills',
    beds: 4,
    baths: 3,
    sqft: 2800
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=800',
    title: 'Cozy Studio Loft',
    price: 700,
    location: 'Ahodwo, Kumasi',
    beds: 1,
    baths: 1,
    sqft: 750
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}