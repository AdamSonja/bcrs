import React from 'react';
import { Quote } from 'lucide-react';
import { PRINCIPALS_MESSAGE, PRINCIPAL_IMG } from '../data/constants';

const PrincipalsMessageSection = () => {
  return (
    <section id="principal" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Principal's Message
          </h2>
          <p className="text-blue-100 text-lg">
            A word from our leadership
          </p>
        </div>

        {/* Message Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-yellow-500 h-1"></div>
          
          <div className="p-8 md:p-12">
            {/* Quote Icon */}
            <div className="mb-8 flex justify-center">
              <Quote className="w-12 h-12 text-blue-900 opacity-30" />
            </div>

            {/* Message Text */}
            <div className="mb-8">
              {PRINCIPALS_MESSAGE.message.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 text-lg leading-relaxed mb-6 text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
              <div className="border-t-2 border-gray-200 pt-8 flex flex-col items-center">
              <div className="h-56 flex items-center mb-4">
                <img
                  src={PRINCIPAL_IMG}
                  alt="Principal"
                  className="w-56 h-56 rounded-full object-cover border-2 border-blue-900"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-900 mb-1">
                  {PRINCIPALS_MESSAGE.signature}
                </p>
                <p className="text-gray-600 font-medium">
                  {PRINCIPALS_MESSAGE.school}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
     
      </div>
    </section>
  );
};

export default PrincipalsMessageSection;