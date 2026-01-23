import React from 'react';
import { NEWS_ITEMS } from '../data/constants';
import NewsCard from '../components/NewsCard';

const NewsSection = () => {
  const handleViewAll = () => {
    alert('View All News clicked! Loading all updates...');
  };

  return (
    <section id="news" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Latest Updates & News
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed about school events, achievements, and important announcements
          </p>
        </div>

        <div className="space-y-6">
          {NEWS_ITEMS.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        <button
          onClick={handleViewAll}
          className="mt-10 mx-auto block bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition duration-300 transform hover:scale-105"
        >
          View All News
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
