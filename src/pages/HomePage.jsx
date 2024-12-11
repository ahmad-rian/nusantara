import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import CultureSection from '../components/sections/CultureSection';
import GallerySection from '../components/sections/GallerySection';
import ActivitySection from '../components/sections/ActivitySection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection preview />
      <CultureSection preview />
      <GallerySection preview />
      <ActivitySection preview />
    </div>
  );
};

export default HomePage;