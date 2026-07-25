import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap, ArrowRight, BookOpen, Sparkles, Award } from 'lucide-react';
import { NAV_ITEMS, COLLEGE_INFO } from '../data/collegeData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar - Clean Navy with Blue Accent Border */}
      <div className="bg-[#002147] text-white text-xs sm:text-sm py-2.5 px-4 border-b-[3px] border-[#0056b3]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left font-medium">
            <span className="bg-[#0056b3] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              Admissions Open 2026
            </span>
            <span className="text-slate-100">Enroll now in CIT, Full-Stack Web Dev & AI Digital Skills! Merit Scholarships Available.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-200">
            <a 
              href={`tel:${COLLEGE_INFO.phonePrimary}`} 
              className="flex items-center gap-1.5 hover:text-[#eef6ff] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#0056b3] fill-[#0056b3]" />
              <span>{COLLEGE_INFO.phonePrimary}</span>
            </a>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">{COLLEGE_INFO.officeHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 bg-white ${
        isScrolled 
          ? 'py-3.5 shadow-md border-b border-slate-200' 
          : 'py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & College Brand */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded bg-[#002147] flex items-center justify-center text-white group-hover:bg-[#0056b3] transition-colors">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-[#002147] tracking-wide uppercase leading-tight">
                  Khyber College <span className="text-[#0056b3]">●</span>
                </span>
                <span className="text-[10px] font-semibold text-[#666666] tracking-wider uppercase">
                  Global Sciences & Professional Ed.
                </span>
              </div>
            </a>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`px-3.5 py-2 rounded text-xs uppercase font-bold tracking-wider transition-all duration-150 relative ${
                      isActive 
                        ? 'text-[#0056b3] bg-[#eef6ff]' 
                        : 'text-[#002147] hover:text-[#0056b3] hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0056b3]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onApplyClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onApplyClick}
                className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#0056b3] text-white font-bold text-xs uppercase"
              >
                <span>Apply</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded text-[#002147] hover:text-[#0056b3] hover:bg-slate-100 focus:outline-none transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`px-3 py-2.5 rounded text-xs uppercase font-bold tracking-wider flex items-center justify-between transition-colors ${
                      isActive 
                        ? 'bg-[#002147] text-white' 
                        : 'bg-[#eef6ff] text-[#002147] hover:bg-blue-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]" />}
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onApplyClick();
                }}
                className="w-full py-3 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Start Online Admission Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COLLEGE_INFO.phonePrimary}`}
                className="w-full py-2.5 rounded bg-slate-100 text-[#002147] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0056b3]" />
                <span>Call Admissions Office</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

