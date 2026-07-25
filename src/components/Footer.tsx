import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { COLLEGE_INFO, NAV_ITEMS, COURSES_DATA } from '../data/collegeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <footer className="bg-[#001833] text-slate-300 pt-16 pb-12 border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: College Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded bg-[#0056b3] flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight uppercase">
                  KHYBER COLLEGE
                </span>
                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider">
                  Global Sciences & Prof. Ed.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Empowering the youth of Khyber Pakhtunkhwa since {COLLEGE_INFO.established} with state-of-the-art technical, computing, linguistic, and vocational training designed for modern global careers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded bg-[#002147] hover:bg-[#0056b3] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/15">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded bg-[#002147] hover:bg-[#0056b3] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/15">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded bg-[#002147] hover:bg-[#0056b3] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/15">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded bg-[#002147] hover:bg-[#0056b3] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/15">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider border-b border-white/10 pb-2">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_ITEMS.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="hover:text-sky-300 transition-colors flex items-center gap-1.5 uppercase tracking-wide text-slate-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#0056b3]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider border-b border-white/10 pb-2">Top Diploma Courses</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {COURSES_DATA.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a
                    href="#courses"
                    onClick={(e) => handleLinkClick(e, 'courses')}
                    className="hover:text-sky-300 transition-colors flex items-center gap-1.5 truncate uppercase tracking-wide text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] flex-shrink-0" />
                    <span className="truncate">{c.title.split('(')[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider border-b border-white/10 pb-2">Contact Information</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                <span>{COLLEGE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                <a href={`tel:${COLLEGE_INFO.phonePrimary}`} className="hover:text-white">{COLLEGE_INFO.phonePrimary}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.email}`} className="hover:text-white">{COLLEGE_INFO.email}</a>
              </div>
            </div>

            <div className="pt-2">
              <h5 className="font-bold text-[11px] uppercase tracking-wider text-white mb-2">Subscribe to Admissions Alerts</h5>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="bg-[#002147] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0056b3] flex-1"
                />
                <button
                  onClick={() => alert('Thank you! You have been subscribed to Khyber College updates.')}
                  className="bg-[#0056b3] hover:bg-[#004085] text-white font-bold px-3.5 py-2 rounded text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} {COLLEGE_INFO.name}. All Rights Reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-white transition-colors underline uppercase tracking-wide"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-white transition-colors underline uppercase tracking-wide"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <a
              href="#admissions"
              onClick={(e) => handleLinkClick(e, 'admissions')}
              className="text-sky-300 font-bold hover:underline uppercase tracking-wide"
            >
              Apply Online
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
