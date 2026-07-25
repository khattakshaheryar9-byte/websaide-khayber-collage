import React, { useState } from 'react';
import { Award, Target, Eye, Heart, CheckCircle2, Quote, Shield, Laptop, UserCheck, Briefcase, Wifi, HeartHandshake, ArrowRight } from 'lucide-react';
import { COLLEGE_INFO, WHY_CHOOSE_US, FACULTY_DATA } from '../data/collegeData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const principal = FACULTY_DATA[0]; // Prof. Dr. Tariq Mehmood Khattak

  return (
    <section id="about" className="py-16 bg-white text-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="clean-section-title justify-center mb-3">
            About Khyber College
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#002147] tracking-tight uppercase">
            Pioneering Excellence in Education & Vocational Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#666666] leading-relaxed">
            Established in {COLLEGE_INFO.established}, {COLLEGE_INFO.name} is dedicated to fostering intellectual curiosity, technical competence, and ethical leadership among the youth of Khyber Pakhtunkhwa and Pakistan.
          </p>
        </div>

        {/* Intro & Mission/Vision Tabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Campus Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded border border-[#eee] overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000"
                alt="Khyber College Campus Life"
                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay Badge Card */}
            <div className="absolute -bottom-5 -right-3 sm:-right-4 z-20 bg-[#002147] text-white p-5 rounded shadow-md max-w-[250px] border-l-4 border-l-[#0056b3]">
              <div className="text-2xl font-bold text-sky-200">14+ Years</div>
              <p className="text-[11px] font-semibold text-slate-200 mt-1 uppercase tracking-wide">
                Of Academic Distinction & Professional Skill Development in Peshawar
              </p>
            </div>
          </div>

          {/* Right Column: Mission, Vision, Core Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide">
                Building the Next Generation of Global Professionals
              </h3>
              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                At KCGSPE, we believe education must translate into tangible socioeconomic independence. We bridge the traditional university curriculum with rigorous practical training in Information Technology, Digital Arts, Linguistics, and Cosmetology.
              </p>
            </div>

            {/* Interactive Tabs - Clean Minimalism Style */}
            <div className="border-b-2 border-slate-200 flex space-x-2">
              <button
                onClick={() => setActiveTab('mission')}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-[3px] -mb-[2px] transition-all ${
                  activeTab === 'mission'
                    ? 'border-[#0056b3] text-[#0056b3] bg-[#eef6ff]'
                    : 'border-transparent text-[#666666] hover:text-[#002147]'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-[3px] -mb-[2px] transition-all ${
                  activeTab === 'vision'
                    ? 'border-[#0056b3] text-[#0056b3] bg-[#eef6ff]'
                    : 'border-transparent text-[#666666] hover:text-[#002147]'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Our Vision</span>
              </button>

              <button
                onClick={() => setActiveTab('values')}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-[3px] -mb-[2px] transition-all ${
                  activeTab === 'values'
                    ? 'border-[#0056b3] text-[#0056b3] bg-[#eef6ff]'
                    : 'border-transparent text-[#666666] hover:text-[#002147]'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Core Values</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm min-h-[170px] flex items-center">
              {activeTab === 'mission' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-base text-[#002147] uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded bg-[#0056b3]" />
                    Our Mission
                  </h4>
                  <p className="text-[#333333] text-xs sm:text-sm leading-relaxed">
                    To deliver accessible, high-quality technical and vocational education that equips our youth with cutting-edge digital and practical skills, enabling them to secure honorable employment, launch entrepreneurial ventures, and compete in the global marketplace.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-base text-[#002147] uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded bg-[#0056b3]" />
                    Our Vision
                  </h4>
                  <p className="text-[#333333] text-xs sm:text-sm leading-relaxed">
                    To become the premier model college in Khyber Pakhtunkhwa where academic theory seamlessly merges with practical industry demands, recognized nationwide for academic integrity, innovation, and female empowerment.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-base text-[#002147] uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded bg-[#0056b3]" />
                    Our Core Values
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#333333]">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0056b3]" /> <strong className="text-[#002147]">Excellence:</strong> Uncompromising quality.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0056b3]" /> <strong className="text-[#002147]">Integrity:</strong> Honest & ethical standards.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0056b3]" /> <strong className="text-[#002147]">Inclusivity:</strong> Safe, empowering space.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0056b3]" /> <strong className="text-[#002147]">Innovation:</strong> Adopting AI & tech.</li>
                  </ul>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Principal's Message Banner - Clean Navy with Blue Border */}
        <div className="bg-[#002147] rounded p-8 sm:p-10 text-white border-l-[6px] border-l-[#0056b3] shadow-md mb-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <Quote className="w-80 h-80 text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded overflow-hidden border-2 border-[#0056b3] shadow-md mb-4">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-lg text-white uppercase tracking-wide">{principal.name}</h4>
              <p className="text-xs text-sky-200 font-bold uppercase tracking-wider mt-1">{principal.designation}</p>
              <p className="text-xs text-slate-300 mt-1">{principal.qualification}</p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0056b3] text-white text-xs font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5" />
                <span>Principal's Message</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight uppercase tracking-wide">
                "Education without Practical Skill is Incomplete in the Digital Age"
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                {principal.bio}
              </p>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                "At Khyber College of Global Sciences & Professional Education, we have transformed our curriculum to focus on real competence. Whether you study Certificate in Information Technology (CIT), Generative AI, or Professional Beautician courses, our commitment is that you graduate with confidence, ethical character, and the ability to earn honorably."
              </p>
              <div className="pt-2 font-bold text-base text-sky-200 uppercase tracking-widest">
                — Prof. Dr. Tariq Mehmood Khattak
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our College Grid - Styled like .course-card */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="clean-section-title justify-center mb-2">Why Study With Us</div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide">
              Why Choose Khyber College?
            </h3>
            <p className="text-[#666666] mt-2 text-xs sm:text-sm">
              Discover what sets us apart as Peshawar's most student-focused professional institute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-[#eef6ff] p-6 rounded-r border-l-4 border-l-[#0056b3] border-y border-r border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded bg-white text-[#0056b3] flex items-center justify-center mb-5 group-hover:bg-[#0056b3] group-hover:text-white transition-all duration-200 shadow-sm border border-slate-200">
                      {item.icon === 'Award' && <Award className="w-6 h-6" />}
                      {item.icon === 'Laptop' && <Laptop className="w-6 h-6" />}
                      {item.icon === 'UserCheck' && <UserCheck className="w-6 h-6" />}
                      {item.icon === 'Briefcase' && <Briefcase className="w-6 h-6" />}
                      {item.icon === 'Wifi' && <Wifi className="w-6 h-6" />}
                      {item.icon === 'HeartHandshake' && <HeartHandshake className="w-6 h-6" />}
                    </div>
                    <h4 className="font-bold text-base text-[#002147] uppercase tracking-wide group-hover:text-[#0056b3] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#666666] text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-blue-100 flex items-center text-xs font-bold text-[#0056b3] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

