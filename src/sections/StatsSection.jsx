import React from 'react';
import { STATS } from '../data/constants';

const StatsCard = ({ stat, index }) => (
  <div className="text-center p-6 md:p-8 rounded-xl bg-white shadow-lg transform hover:scale-105 transition duration-300 border-t-4 border-yellow-500">
    <p className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-3">
      {stat.value}
    </p>
    <p className="text-gray-700 text-lg md:text-xl font-semibold">{stat.label}</p>
  </div>
);

const StatsSection = () => {
  return (
    <section id="statistics" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Why Choose BCRS?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the achievements and growth of our students
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, index) => (
            <StatsCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
