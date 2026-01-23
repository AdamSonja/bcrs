import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const SchoolWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. TOP BAR (Contact Info) */}
      <div className="bg-blue-900 text-white py-2 px-6 hidden md:flex justify-between text-sm">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> +1 (555) 0123</span>
          <span className="flex items-center gap-1"><Mail size={14} /> info@excellenceschool.edu</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">Parent Portal</a>
          <a href="#" className="hover:text-yellow-400">Staff Login</a>
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white">E</div>
          EXCELLENCE ACADEMY
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 font-medium text-gray-700">
          {['Home', 'About Us', 'Academics', 'Admissions', 'Student Life', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-blue-900 transition">
              {item}
            </a>
          ))}
        </div>

        <button className="hidden lg:block bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition">
          Enquire Now
        </button>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* 3. HERO SECTION */}
      <header className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')" }}
        ></div>
        
        <div className="relative z-20 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Nurturing Minds, Shaping Futures</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">A tradition of excellence in a world of innovation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-bold">Explore Curriculum</button>
            <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold">Virtual Tour</button>
          </div>
        </div>
      </header>

      {/* 4. QUICK INFO / STATS */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-900">25+</p>
            <p className="text-gray-600">Years Excellence</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-900">15:1</p>
            <p className="text-gray-600">Student Ratio</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-900">100%</p>
            <p className="text-gray-600">College Placements</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-900">40+</p>
            <p className="text-gray-600">Extra-Curriculars</p>
          </div>
        </div>
      </section>

      {/* 5. NOTICE BOARD & NEWS */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Latest Updates</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 border rounded-xl overflow-hidden hover:shadow-lg transition">
                <img src={`https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80`} alt="News" className="w-full md:w-48 h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-bold uppercase">Academic</span>
                  <h3 className="text-xl font-bold mt-2">New STEM Lab Inauguration Scheduled for March</h3>
                  <p className="text-gray-600 mt-2">The school is proud to announce the opening of our state-of-the-art Science and Robotics center...</p>
                  <button className="mt-4 text-blue-900 font-bold flex items-center gap-1">Read More <ExternalLink size={16}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Notice Board */}
        <aside>
          <div className="bg-blue-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-4">Notice Board</h2>
            <ul className="space-y-6">
              <li className="group cursor-pointer">
                <p className="text-yellow-400 text-sm font-bold">JAN 25, 2026</p>
                <p className="group-hover:underline">Admissions Open for Academic Year 2026-27</p>
              </li>
              <li className="group cursor-pointer">
                <p className="text-yellow-400 text-sm font-bold">FEB 02, 2026</p>
                <p className="group-hover:underline">Winter Break Extension Notice</p>
              </li>
              <li className="group cursor-pointer">
                <p className="text-yellow-400 text-sm font-bold">FEB 10, 2026</p>
                <p className="group-hover:underline">Monthly Newsletter Published</p>
              </li>
            </ul>
            <button className="w-full mt-8 border border-white py-2 rounded hover:bg-white hover:text-blue-900 transition">View All Notices</button>
          </div>
        </aside>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Excellence Academy</h3>
            <p className="mb-4">Providing quality education since 2001. We believe in empowering every student to reach their full potential.</p>
            <div className="flex gap-4">
              <MapPin size={20} /> 123 Education Lane, Learning City
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Curriculum</a></li>
              <li><a href="#" className="hover:text-white">Admission Process</a></li>
              <li><a href="#" className="hover:text-white">Events Calendar</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get latest school updates.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="p-2 rounded-l bg-gray-800 border-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-900 text-white px-4 py-2 rounded-r">Join</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SchoolWebsite;