import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/constants';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Events'];
  
  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Campus Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the beautiful campus and vibrant moments from our school life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold transition duration-300 ${
                activeCategory === category
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-end">
                  <div className="w-full p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-sm font-semibold">{item.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Images Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No images found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-yellow-400 transition duration-300"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg shadow-2xl max-h-[85vh] object-contain"
            />

            {/* Caption & Details */}
            <div className="mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.caption}</h3>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400 text-lg font-semibold">
                  {selectedImage.category}
                </span>
                <p className="text-gray-400 text-sm">
                  Image {selectedImage.id} of {GALLERY_IMAGES.length}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-6 justify-center">
              <button
                onClick={() => {
                  const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : GALLERY_IMAGES.length - 1;
                  setSelectedImage(GALLERY_IMAGES[prevIndex]);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-2 rounded-lg font-semibold transition duration-300"
              >
                ← Previous
              </button>
              <button
                onClick={() => {
                  const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = currentIndex < GALLERY_IMAGES.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(GALLERY_IMAGES[nextIndex]);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-2 rounded-lg font-semibold transition duration-300"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
