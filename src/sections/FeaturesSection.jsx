import React from 'react';
import { Book, Users, Trophy, Shield } from 'lucide-react';
import { KEY_FEATURES } from '../data/constants';

const iconMap = {
  '📚': Book,
  '🌟': Users,
  '🏆': Trophy,
  '🛡️': Shield
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Why Students Choose BCRS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our comprehensive approach to education ensures holistic development of every student
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {KEY_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] || Book;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded group-hover:from-blue-900 transition"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;