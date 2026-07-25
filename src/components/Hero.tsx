import React from 'react';
import { ArrowRight, Award, BookOpen, GraduationCap, Users, CheckCircle2, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface HeroProps {
  onExploreCourses: () => void;
  onApplyNow: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onApplyNow, onContactUs }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[linear-gradient(135deg,rgba(0,33,71,0.97),rgba(0,86,179,0.92))] text-white">
      {/* Background Image with Clean Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000"
          alt="Khyber College Campus Background"
          className="w-full h-full object-cover object-center opacity-15"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#00bfa5]" />
              <span>Accredited Technical & Professional Excellence Since 2012</span>
            </div>

            {/* College Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                KHYBER COLLEGE <br />
                <span className="text-sky-200 font-normal">
                  Global Sciences & Professional Ed.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {COLLEGE_INFO.slogan}
              </p>
            </div>

            {/* Quick Overview Paragraph */}
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to Peshawar's premier institution for career-oriented education. Whether you want to master Full-Stack Web Development, Artificial Intelligence, Graphic Design, Spoken English, or Professional Cosmetology, we equip you with industry-approved diplomas and hands-on skills to thrive globally.
            </p>

            {/* Key Highlights bullet pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 bg-white/10 border border-white/25 px-3 py-1.5 rounded text-xs font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#00bfa5]" />
                <span>Govt. Recognized Diplomas</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 border border-white/25 px-3 py-1.5 rounded text-xs font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-300" />
                <span>100% Practical Computer Labs</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 border border-white/25 px-3 py-1.5 rounded text-xs font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#00bfa5]" />
                <span>Upwork & Fiverr Career Cell</span>
              </div>
            </div>

            {/* Call to Action Buttons - Clean Minimalism Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onApplyNow}
                className="w-full sm:w-auto px-7 py-3 rounded bg-white hover:bg-slate-100 text-[#002147] font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Apply Now (Online Form)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-7 py-3 rounded border border-white hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-sky-200" />
                <span>Explore Courses</span>
              </button>

              <button
                onClick={onContactUs}
                className="w-full sm:w-auto px-6 py-3 rounded bg-transparent hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-white/50"
              >
                <PhoneCall className="w-4 h-4 text-[#00bfa5]" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* Right Visual Card / Announcement Box - Styled like .sidebar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white text-[#333333] border border-[#eee] rounded-lg p-6 sm:p-8 shadow-md">
              <div className="absolute -top-3 -right-3 bg-[#0056b3] text-white font-bold text-xs px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                Admissions Open 2026
              </div>

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="p-2.5 rounded bg-[#eef6ff] text-[#0056b3]">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#002147] uppercase tracking-wide">Why Study At Khyber?</h3>
                  <p className="text-xs text-[#666666]">Bridging Education with Industry Income</p>
                </div>
              </div>

              <ul className="space-y-3.5 mb-6">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#002147] font-bold">Job-Ready Curriculum:</strong> Designed with feedback from tech software houses and salons.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#002147] font-bold">Merit Scholarships:</strong> Up to 30% tuition fee waiver for high achievers & deserving youth.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#002147] font-bold">Separate Female Wing:</strong> Dedicated safe campus and trainers for cosmetology & IT.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#002147] font-bold">Freelance Mentorship:</strong> Direct guidance to earn in USD via international marketplaces.
                  </span>
                </li>
              </ul>

              <div className="bg-[#eef6ff] rounded p-4 border border-[#0056b3]/20 text-center space-y-2">
                <p className="text-[11px] text-[#666666] uppercase tracking-wider font-bold">Quick Admission Inquiry</p>
                <p className="text-base font-bold text-[#002147]">{COLLEGE_INFO.phonePrimary}</p>
                <button
                  onClick={onApplyNow}
                  className="w-full py-2 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Fill Online Admission Form Now →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="mt-14 pt-8 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {COLLEGE_INFO.stats.map((stat, idx) => {
            return (
              <div
                key={idx}
                className="bg-white/10 hover:bg-white/15 border border-white/20 rounded p-5 transition-all duration-200 flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-4"
              >
                <div className="w-10 h-10 rounded bg-white/20 text-white flex items-center justify-center">
                  {stat.icon === 'GraduationCap' && <GraduationCap className="w-5 h-5" />}
                  {stat.icon === 'BookOpen' && <BookOpen className="w-5 h-5" />}
                  {stat.icon === 'Users' && <Users className="w-5 h-5" />}
                  {stat.icon === 'Award' && <Award className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-sky-200 mt-0.5 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

