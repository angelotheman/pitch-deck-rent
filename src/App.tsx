import React from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { FeaturedProperties } from './components/sections/FeaturedProperties';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FilterBar />
      <FeaturedProperties />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;