import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../data/constants';

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-6 hidden md:flex justify-between text-sm shadow-md">
      <div className="flex gap-6 flex-wrap">
        <span className="flex items-center gap-2 hover:text-yellow-300 transition">
          <Phone size={16} /> {SCHOOL_INFO.phone}
        </span>
        <span className="flex items-center gap-2 hover:text-yellow-300 transition">
          <Mail size={16} /> {SCHOOL_INFO.email}
        </span>
        <span className="flex items-center gap-2 hover:text-yellow-300 transition">
          <Clock size={16} /> Office Hours: 08:00 AM - 04:00 PM
        </span>
      </div>
      <div className="flex gap-6">
        <a href="#admissions" className="hover:text-yellow-300 transition font-medium">
          Apply Now
        </a>
        <a href="#contact" className="hover:text-yellow-300 transition font-medium">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default TopBar;
