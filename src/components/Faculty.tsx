import React, { useState } from 'react';
import { Users, Award, BookOpen, Mail, Linkedin, Twitter, ExternalLink, X, GraduationCap } from 'lucide-react';
import { FACULTY_DATA } from '../data/collegeData';
import { FacultyMember } from '../types';

export const Faculty: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  return (
    <section id="faculty" className="py-16 bg-[#f8fafd] text-[#333333] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#002147] text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-sky-400" />
            <span>Academic & Technical Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#002147] tracking-tight uppercase">
            Learn From Industry Practitioners & Scholars
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed">
            Our faculty members combine top-tier academic degrees with proven real-world industry and freelancing experience. They mentor you every step of the way.
          </p>
        </div>

        {/* Faculty Grid - Clean Minimalism Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACULTY_DATA.map((member) => {
            return (
              <div
                key={member.id}
                className="bg-white rounded border border-slate-300 overflow-hidden shadow-sm hover:shadow-md hover:border-[#0056b3] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Top & Department Tag */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#001833]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001833] via-[#001833]/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#0056b3] text-white font-bold text-[10px] uppercase tracking-wider mb-2">
                      {member.department}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-xs text-sky-300 font-semibold mt-0.5 uppercase tracking-wider">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2 text-xs text-[#333333] bg-[#f8fafd] p-3 rounded border border-slate-200">
                      <GraduationCap className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#002147] font-bold">Qualification:</strong>
                        <span>{member.qualification}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#002147] bg-[#eef6ff] p-3 rounded border border-blue-200 font-semibold">
                      <Award className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                      <span>{member.experience}</span>
                    </div>

                    <p className="text-[#666666] text-xs sm:text-sm leading-relaxed line-clamp-3 pt-1">
                      {member.bio}
                    </p>
                  </div>

                  {/* Actions & Socials */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedFaculty(member)}
                      className="text-xs font-bold uppercase tracking-wider text-[#0056b3] hover:text-[#002147] flex items-center gap-1 group-hover:underline"
                    >
                      <span>Read Full Biography</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2 text-slate-400">
                      <a
                        href={`mailto:${member.email}`}
                        title={`Email ${member.name}`}
                        className="p-1.5 rounded hover:bg-slate-100 hover:text-[#0056b3] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          title="LinkedIn Profile"
                          className="p-1.5 rounded hover:bg-slate-100 hover:text-[#0056b3] transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faculty Detail Modal */}
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded max-w-2xl w-full overflow-hidden shadow-xl border border-slate-300 relative animate-scaleUp">
              
              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-4 right-4 p-2 rounded bg-[#002147] text-white hover:bg-[#001833] transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="sm:col-span-5 h-64 sm:h-auto relative bg-[#001833]">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001833] sm:hidden via-transparent to-transparent" />
                </div>

                <div className="sm:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#eef6ff] text-[#0056b3] font-bold text-xs uppercase tracking-wider">
                      {selectedFaculty.department}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#002147] leading-tight uppercase tracking-wide">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0056b3] uppercase tracking-wider">
                      {selectedFaculty.designation}
                    </p>
                    
                    <div className="space-y-2 pt-2 text-xs text-[#333333]">
                      <p><strong className="text-[#002147]">Credentials:</strong> {selectedFaculty.qualification}</p>
                      <p><strong className="text-[#002147]">Experience:</strong> {selectedFaculty.experience}</p>
                      <p><strong className="text-[#002147]">Official Email:</strong> {selectedFaculty.email}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#666666] mb-1">About & Teaching Philosophy</h4>
                      <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                        {selectedFaculty.bio}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex justify-end">
                    <button
                      onClick={() => setSelectedFaculty(null)}
                      className="px-6 py-2.5 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Close Profile
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
