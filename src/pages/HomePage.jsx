import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import HeroSection from '../sections/HeroSection';
import VisionMissionSection from '../sections/VisionMissionSection';
import FeaturesSection from '../sections/FeaturesSection';
import StatsSection from '../sections/StatsSection';
import PrincipalsMessageSection from '../sections/PrincipalsMessageSection';
import NewsSection from '../sections/NewsSection';
import GallerySection from '../sections/GallerySection';
import Footer from '../sections/Footer';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <FeaturesSection />
        <StatsSection />
        <PrincipalsMessageSection />
        <NewsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
