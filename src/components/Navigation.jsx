import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, SCHOOL_INFO } from '../data/constants';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleEnquireClick = () => {
    alert('Enquire Now button clicked! Redirecting to admissions form...');
    // In a real app, this would navigate to an admissions form
  };

  const handleNavigation = (item) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const sectionId = item.toLowerCase().replace(/\s+/g, '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
      {/* Logo & School Name */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
          {SCHOOL_INFO.logo}
        </div>
        <div className="flex flex-col">
          <span className="hidden sm:inline text-lg md:text-xl font-bold text-blue-900">
            {SCHOOL_INFO.shortName}
          </span>
          <span className="text-xs md:text-sm text-gray-600 font-medium">
            {SCHOOL_INFO.location}
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 xl:gap-8 font-medium text-gray-700">
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className="hover:text-blue-900 transition duration-300 text-sm xl:text-base hover:border-b-2 hover:border-yellow-500 pb-1"
          >
            {item}
          </button>
        ))}
      </div>

      {/* CTA Button - Desktop */}
      <button
        onClick={handleEnquireClick}
        className="hidden lg:block bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-bold hover:from-yellow-600 hover:to-yellow-700 transition duration-300 shadow-md transform hover:scale-105"
      >
        Enquire Now
      </button>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} className="text-blue-900" /> : <Menu size={24} className="text-blue-900" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t-2 border-blue-900 shadow-xl lg:hidden">
          <div className="flex flex-col p-4 gap-3 max-h-96 overflow-y-auto">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-gray-700 hover:text-blue-900 transition text-left py-2 px-3 rounded hover:bg-blue-50 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                handleEnquireClick();
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-3 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition mt-4"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
