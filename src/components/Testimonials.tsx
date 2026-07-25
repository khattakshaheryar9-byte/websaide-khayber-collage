import React from 'react';
import { Star, Quote, Award, CheckCircle2, MessageSquare, Briefcase } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/collegeData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#002147] text-white relative overflow-hidden border-b border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0056b3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0056b3] text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Alumni Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase">
            Hear From Our Successful Graduates & Freelancers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            From zero coding knowledge to Top Rated Upwork sellers, and from beginners to successful salon owners—our alumni are making their mark worldwide.
          </p>
        </div>

        {/* Testimonials Grid - Clean Minimalism Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#001833] border border-white/15 rounded p-6 shadow-md flex flex-col justify-between relative hover:border-[#0056b3] transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4 text-white/10 group-hover:text-[#0056b3]/30 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>

                <div className="space-y-3 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded object-cover border border-[#0056b3] shadow-sm flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm leading-tight uppercase tracking-wide">
                      {item.name}
                    </h4>
                    <p className="text-xs font-bold text-sky-300 mt-0.5 uppercase tracking-wider">
                      {item.currentRole}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-300 mt-1 uppercase">
                      <span>{item.course}</span>
                      <span>•</span>
                      <span>{item.graduationYear}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner below testimonials */}
        <div className="mt-14 bg-[#001833] rounded p-8 border border-white/20 text-center space-y-4 max-w-3xl mx-auto shadow-md">
          <h3 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-wide">
            Ready to Write Your Own Success Story?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200">
            Admissions are open for the upcoming intake. Secure your seat today with online registration!
          </p>
          <div className="pt-2">
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Apply Online Now</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
