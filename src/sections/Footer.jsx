import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { SCHOOL_INFO, QUICK_LINKS } from '../data/constants';

const FooterSection = ({ title, children }) => (
  <div>
    <h3 className="text-white text-xl font-bold mb-6 border-b-2 border-yellow-500 pb-3">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert(`Successfully subscribed with email: ${email}`);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } else {
      alert('Please enter a valid email address');
    }
  };

  const handleSocialClick = (platform) => {
    alert(`Following on ${platform}! Redirecting to social media...`);
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
      {/* Main Footer Content */}
      <div className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* About Section */}
          <FooterSection title={SCHOOL_INFO.shortName}>
            <p className="mb-6 leading-relaxed text-gray-300">
              {SCHOOL_INFO.name} is dedicated to providing quality education in a disciplined, caring, and value-based environment.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Phone size={20} className="flex-shrink-0 mt-1 text-yellow-500" />
                <span className="text-gray-200">{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={20} className="flex-shrink-0 mt-1 text-yellow-500" />
                <span className="text-gray-200">{SCHOOL_INFO.email}</span>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-yellow-500" />
                <span className="text-gray-200">{SCHOOL_INFO.address}</span>
              </div>
            </div>
          </FooterSection>

          {/* Quick Links Section */}
          <FooterSection title="Quick Links">
            <ul className="space-y-4">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full group-hover:w-3 transition"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Important Links */}
          <FooterSection title="Resources">
            <ul className="space-y-4">
              {[
                { label: 'Academic Calendar', href: '#' },
                { label: 'Curriculum', href: '#' },
                { label: 'Campus Facilities', href: '#' },
                { label: 'Student Handbook', href: '#' },
                { label: 'Fee Structure', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Loading: ${link.label}`);
                    }}
                    className="hover:text-yellow-400 transition duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full group-hover:w-3 transition"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Newsletter Section */}
          <FooterSection title="Newsletter">
            <p className="mb-6 text-gray-300">Subscribe to get latest school updates and news.</p>
            <form onSubmit={handleNewsletterSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none flex-1 text-white text-sm"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-gray-900 px-4 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 font-bold flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send size={16} /> Join
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-sm">✓ Subscription successful!</p>
              )}
            </form>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-300 text-sm font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' }
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => handleSocialClick(label)}
                    className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition duration-300 text-gray-400 hover:text-gray-900"
                    aria-label={`Follow on ${label}`}
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </FooterSection>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <p className="text-center md:text-left text-gray-400">
              &copy; {currentYear} {SCHOOL_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6 justify-center md:justify-center text-sm">
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy'); }} className="hover:text-yellow-400 transition">
                Privacy Policy
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service'); }} className="hover:text-yellow-400 transition">
                Terms of Service
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Contact Us'); }} className="hover:text-yellow-400 transition">
                Sitemap
              </a>
            </div>
            <p className="text-center md:text-right text-gray-500 text-sm">
              Designed with ❤️ for Excellence in Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
