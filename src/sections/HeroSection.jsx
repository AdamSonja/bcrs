import React from 'react';
import { HERO_IMAGE, SCHOOL_INFO } from '../data/constants';

const HeroSection = () => {
  const handleExplore = () => {
    alert('Explore Curriculum clicked! Loading curriculum details...');
    // In a real app, this would navigate to curriculum page
  };

  const handleVirtualTour = () => {
    alert('Virtual Tour clicked! Starting campus tour...');
    // In a real app, this would open a virtual tour or modal
  };

  return (
    <header id="home" className="relative h-[500px] md:h-[650px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <p className="text-yellow-400 font-bold text-lg md:text-xl mb-2">Welcome to</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {SCHOOL_INFO.name}
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6 drop-shadow-md max-w-2xl mx-auto">
            {SCHOOL_INFO.tagline}
          </p>
          <p className="text-base md:text-lg text-yellow-200 drop-shadow-md mb-8">
            Holistic Education | Values-Based Learning | Residential Excellence
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
          <button
            onClick={handleExplore}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold transition duration-300 shadow-lg transform hover:scale-105"
          >
            Explore Academics
          </button>
          <button
            onClick={handleVirtualTour}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold transition duration-300 shadow-lg transform hover:scale-105"
          >
            Virtual Tour
          </button>
          <button
            onClick={() => alert('Admissions Form opened!')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold transition duration-300 shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
