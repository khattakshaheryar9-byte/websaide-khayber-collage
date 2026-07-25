/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Admissions } from './components/Admissions';
import { Faculty } from './components/Faculty';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedCourse, setPreselectedCourse] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Scroll spy to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'admissions', 'faculty', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourseForAdmission = (courseTitle: string) => {
    setPreselectedCourse(courseTitle);
    handleNavigate('admissions');
    setTimeout(() => {
      const formEl = document.getElementById('admission-form-anchor');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white relative">
      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onApplyClick={() => handleNavigate('admissions')}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onExploreCourses={() => handleNavigate('courses')}
          onApplyNow={() => handleNavigate('admissions')}
          onContactUs={() => handleNavigate('contact')}
        />

        <About />

        <Courses
          onSelectCourseForAdmission={handleSelectCourseForAdmission}
        />

        <Admissions
          preselectedCourse={preselectedCourse}
        />

        <Faculty />

        <Gallery />

        <Testimonials />

        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Floating WhatsApp Live Chat Widget */}
      <WhatsAppWidget />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

