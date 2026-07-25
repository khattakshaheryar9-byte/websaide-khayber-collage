import React, { useState } from 'react';
import { Camera, Eye, X, Calendar, Filter, Maximize2 } from 'lucide-react';
import { GALLERY_DATA } from '../data/collegeData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Campus', 'Classrooms', 'Computer Lab', 'Student Activities', 'Events'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-white text-[#333333] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0056b3] text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Tour & Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#002147] tracking-tight uppercase">
            Our Vibrant Campus & High-Tech Facilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed">
            Take a look inside our modern computer laboratories, interactive classrooms, dedicated female cosmetology studios, and annual student exhibition events.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs uppercase font-bold tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#002147] text-white shadow-sm'
                    : 'bg-[#f8fafd] text-[#666666] hover:text-[#002147] border border-slate-300 hover:border-[#0056b3]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Clean Minimalism Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative h-72 sm:h-80 rounded overflow-hidden bg-[#001833] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-slate-300 hover:border-[#0056b3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001833] via-[#001833]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge Top Right */}
                <div className="absolute top-3 right-3 bg-[#002147]/90 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded border border-white/20">
                  {item.category}
                </div>

                {/* Hover Eye Icon Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded bg-[#0056b3] text-white flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Title Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] text-sky-300 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                  <h3 className="font-bold text-sm sm:text-base leading-snug uppercase tracking-wide group-hover:text-sky-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Screen Lightbox Modal */}
        {lightboxItem && (
          <div
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#001833] rounded max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 relative animate-scaleUp"
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 p-2 rounded bg-black/60 text-white hover:bg-[#0056b3] transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[65vh] sm:max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-auto max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#001833] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-[#0056b3] text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {lightboxItem.category}
                    </span>
                    <span className="text-xs text-sky-300 font-semibold">{lightboxItem.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {lightboxItem.description}
                  </p>
                </div>

                <button
                  onClick={() => setLightboxItem(null)}
                  className="px-5 py-2.5 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shadow-sm"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
