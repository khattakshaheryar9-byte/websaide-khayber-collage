import React, { useState } from 'react';
import { BookOpen, Clock, CheckCircle2, DollarSign, Award, Search, ArrowRight, Monitor, Code2, Cpu, Palette, MessageSquare, Sparkles, Calculator, X, Calendar, UserCheck } from 'lucide-react';
import { COURSES_DATA } from '../data/collegeData';
import { Course } from '../types';

interface CoursesProps {
  onSelectCourseForAdmission: (courseTitle: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourseForAdmission }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedModalCourse, setSelectedModalCourse] = useState<Course | null>(null);

  const categories = ['All', 'IT & Computing', 'Language & Comm.', 'Vocational & Arts', 'Business & Digital'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="courses" className="py-16 bg-white text-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="clean-section-title justify-center mb-3">
            Academic & Professional Programs
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#002147] tracking-tight uppercase">
            Featured Professional Programs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed">
            Choose from industry-aligned courses designed for immediate employment, freelancing, and university credit transfer. Merit scholarships are available for deserving candidates.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#f8fafd] p-4 sm:p-6 rounded border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills - Clean Minimalism Style */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded text-xs uppercase font-bold tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#002147] text-white shadow-sm'
                      : 'bg-white text-[#666666] hover:text-[#002147] border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
            <input
              type="text"
              placeholder="Search by course name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded bg-white border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3] transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#666666] hover:text-[#002147]"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-[#eef6ff] rounded border border-dashed border-[#0056b3]/40">
            <BookOpen className="w-10 h-10 text-[#0056b3] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#002147] uppercase tracking-wide">No Courses Found</h3>
            <p className="text-xs text-[#666666] mt-1">Try adjusting your category filter or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#0056b3] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#004085] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              return (
                <div
                  key={course.id}
                  className="bg-[#eef6ff] rounded border-l-4 border-l-[#0056b3] border-y border-r border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  {/* Image Header & Badges */}
                  <div>
                    <div className="relative h-44 overflow-hidden bg-[#002147] border-b border-blue-100">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-transparent to-transparent" />
                      
                      {/* Popular Badge */}
                      {course.popular && (
                        <div className="absolute top-2.5 left-2.5 bg-[#0056b3] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">
                          Popular Choice
                        </div>
                      )}

                      {/* Course Code Badge */}
                      <div className="absolute top-2.5 right-2.5 bg-[#002147] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-white/20">
                        {course.code}
                      </div>

                      {/* Category Label */}
                      <div className="absolute bottom-2.5 left-2.5 text-white font-bold text-[11px] uppercase tracking-wider bg-[#002147]/90 px-2.5 py-1 rounded">
                        {course.category}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded bg-white text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white transition-colors border border-slate-200">
                          {getCourseIcon(course.iconName)}
                        </div>
                        <h3 className="font-bold text-base text-[#002147] group-hover:text-[#0056b3] transition-colors line-clamp-2 uppercase tracking-wide leading-snug">
                          {course.title}
                        </h3>
                      </div>

                      <p className="text-[#666666] text-xs leading-relaxed line-clamp-3">
                        {course.description}
                      </p>

                      {/* Info Pills */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-100">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#002147]">
                          <Clock className="w-3.5 h-3.5 text-[#0056b3] flex-shrink-0" />
                          <span className="truncate">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#0056b3]">
                          <DollarSign className="w-3.5 h-3.5 text-[#0056b3] flex-shrink-0" />
                          <span className="truncate">{course.fees.split(' ')[0]} {course.fees.split(' ')[1]}</span>
                        </div>
                      </div>

                      {/* Highlights Preview */}
                      <div className="bg-white p-3 rounded space-y-1.5 border border-slate-200/80">
                        <p className="text-[10px] font-bold text-[#002147] uppercase tracking-wider">Key Learning Outcomes:</p>
                        {course.highlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-[#333333]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0056b3] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 flex items-center gap-2.5">
                    <button
                      onClick={() => setSelectedModalCourse(course)}
                      className="w-1/2 py-2 px-3 rounded bg-white hover:bg-slate-100 text-[#002147] font-bold text-xs uppercase tracking-wider transition-colors text-center border border-slate-300"
                    >
                      View Syllabus
                    </button>
                    <button
                      onClick={() => onSelectCourseForAdmission(course.title)}
                      className="w-1/2 py-2 px-3 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1 group/btn"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Course Syllabus Modal - Clean Minimalism Style */}
        {selectedModalCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-slate-300 relative animate-scaleUp">
              
              {/* Modal Header */}
              <div className="relative h-44 sm:h-48 bg-[#002147] text-white p-6 sm:p-8 flex flex-col justify-end border-b-4 border-b-[#0056b3]">
                <img
                  src={selectedModalCourse.image}
                  alt={selectedModalCourse.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  referrerPolicy="no-referrer"
                />
                
                <button
                  onClick={() => setSelectedModalCourse(null)}
                  className="absolute top-4 right-4 p-2 rounded bg-[#0056b3] text-white hover:bg-[#004085] transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10 space-y-2">
                  <div className="inline-block bg-[#0056b3] text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    {selectedModalCourse.code} • {selectedModalCourse.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide leading-tight">
                    {selectedModalCourse.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-[#333333]">
                
                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#eef6ff] p-4 rounded border border-blue-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0056b3]" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-[#666666]">Duration</span>
                      <span className="text-xs sm:text-sm font-bold text-[#002147]">{selectedModalCourse.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#0056b3]" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-[#666666]">Tuition Fee</span>
                      <span className="text-xs sm:text-sm font-bold text-[#0056b3]">{selectedModalCourse.fees}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#0056b3]" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-[#666666]">Class Timings</span>
                      <span className="text-xs sm:text-sm font-bold text-[#002147]">{selectedModalCourse.schedule}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wider">Course Overview</h4>
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                    {selectedModalCourse.description}
                  </p>
                </div>

                {/* Eligibility */}
                <div className="bg-[#eef6ff] p-4 rounded border-l-4 border-l-[#0056b3] flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-[#0056b3] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-[#002147] uppercase tracking-wide">Eligibility Criteria</h5>
                    <p className="text-xs text-[#333333] mt-0.5 font-medium">{selectedModalCourse.eligibility}</p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wider">What You Will Learn (Syllabus Highlights)</h4>
                  <ul className="space-y-2">
                    {selectedModalCourse.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333] bg-[#f8fafd] p-3 rounded border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedModalCourse(null)}
                    className="px-5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 text-[#002147] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = selectedModalCourse.title;
                      setSelectedModalCourse(null);
                      onSelectCourseForAdmission(title);
                    }}
                    className="flex-1 py-2.5 px-6 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Apply For This Course Online</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

