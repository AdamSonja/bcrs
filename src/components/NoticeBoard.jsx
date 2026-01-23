import React, { useState } from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { NOTICES } from '../data/constants';

const NoticeItem = ({ notice, isHovered, onHover }) => (
  <li
    className="group cursor-pointer pb-4 border-b border-blue-600 last:border-b-0 px-2 py-3 rounded hover:bg-blue-800 transition duration-200 transform hover:translate-x-1"
    onMouseEnter={() => onHover(notice.id)}
    onMouseLeave={() => onHover(null)}
  >
    <div className="flex items-start gap-2">
      <ChevronRight
        size={16}
        className={`flex-shrink-0 mt-1 transition ${isHovered ? 'text-yellow-300' : 'text-blue-400'}`}
      />
      <div className="flex-1">
        <p className="text-yellow-400 text-xs font-bold mb-1">{notice.date}</p>
        <p className={`transition ${isHovered ? 'text-yellow-300 font-semibold' : 'text-white'}`}>
          {notice.title}
        </p>
      </div>
    </div>
  </li>
);

const NoticeBoard = () => {
  const [hoveredNotice, setHoveredNotice] = useState(null);

  const handleViewAll = () => {
    alert('View All Notices clicked! Loading all notices...');
    // In a real app, this would navigate to a notices page
  };

  return (
    <aside className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 md:p-8 rounded-2xl sticky top-24 shadow-lg border-l-4 border-yellow-500">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-600">
        <Bell size={24} className="text-yellow-400" />
        <h2 className="text-2xl font-bold">Notice Board</h2>
      </div>
      <ul className="space-y-2">
        {NOTICES.map((notice) => (
          <NoticeItem
            key={notice.id}
            notice={notice}
            isHovered={hoveredNotice === notice.id}
            onHover={setHoveredNotice}
          />
        ))}
      </ul>
      <button
        onClick={handleViewAll}
        className="w-full mt-8 border-2 border-white text-white py-3 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300 font-bold font-medium transform hover:scale-105 hover:shadow-lg"
      >
        View All Notices →
      </button>
    </aside>
  );
};

export default NoticeBoard;
