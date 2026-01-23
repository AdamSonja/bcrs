import React from 'react';
import { Target, Compass, Heart, Lightbulb } from 'lucide-react';
import { VISION_MISSION } from '../data/constants';

const VisionMissionSection = () => {
  return (
    <section id="visionmission" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Guiding our commitment to holistic education and student excellence
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-blue-900">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                <Target className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {VISION_MISSION.vision}
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-yellow-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <Compass className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <ul className="space-y-4">
              {VISION_MISSION.mission.map((point, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Compassion', desc: 'Care for every individual' },
              { icon: Lightbulb, title: 'Excellence', desc: 'Striving for the best' },
              { icon: Target, title: 'Integrity', desc: 'Honesty and ethics' },
              { icon: Compass, title: 'Growth', desc: 'Continuous improvement' }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition transform hover:scale-105">
                  <Icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-blue-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;