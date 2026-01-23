import React from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const NewsCard = ({ news }) => {
  const handleReadMore = () => {
    alert(`Opening full article: "${news.title}"\n\nCategory: ${news.category}\nDate: ${news.date}`);
    // In a real app, this would navigate to a detailed article page
  };

  return (
    <article className="flex flex-col md:flex-row gap-6 border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 bg-white hover:border-yellow-500 h-full md:h-auto">
      {/* Image */}
      <div className="md:w-56 flex-shrink-0 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 md:h-56 object-cover hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-4 mb-3 flex-wrap">
            <span className="flex items-center gap-1 text-sm text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
              <Tag size={14} /> {news.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar size={14} /> {news.date}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 hover:text-blue-900 transition">
            {news.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {news.description}
          </p>
        </div>
        <button
          onClick={handleReadMore}
          className="text-blue-900 font-bold flex items-center gap-2 hover:text-yellow-600 transition hover:gap-3 group"
        >
          Read More <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
        </button>
      </div>
    </article>
  );
};

export default NewsCard;
