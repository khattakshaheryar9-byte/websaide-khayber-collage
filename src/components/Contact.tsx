import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, MessageSquare, HelpCircle, ChevronDown, ChevronUp, ExternalLink, Globe, Shield, Share2 } from 'lucide-react';
import { COLLEGE_INFO, FAQS_DATA } from '../data/collegeData';

export const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Admission Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSent, setIsSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!contactForm.name.trim()) errs.name = 'Your name is required.';
    if (!contactForm.email.trim() && !contactForm.phone.trim()) {
      errs.email = 'Please provide either email or phone number.';
    }
    if (!contactForm.message.trim()) errs.message = 'Please enter your message or question.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSent(true);
    setTimeout(() => {
      // Keep success message visible
    }, 1000);
  };

  const handleReset = () => {
    setIsSent(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: 'General Admission Inquiry',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 bg-[#f8fafd] text-[#333333] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#002147] text-white text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
            <span>Get In Touch & Visit Campus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#002147] tracking-tight uppercase">
            We Are Here To Help You Get Started
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed">
            Have questions about fees, batch timings, scholarships, or syllabus details? Our academic counselors are available from Monday to Saturday.
          </p>
        </div>

        {/* Contact Grid: Details + Form - Clean Minimalism Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded border border-slate-300 shadow-sm space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#002147] uppercase tracking-wide pb-4 border-b border-slate-200">
                Official Campus Administration
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-[#f8fafd] border border-slate-200 text-[#0056b3] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147]">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-[#333333] mt-1 leading-relaxed">
                    {COLLEGE_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-[#f8fafd] border border-slate-200 text-[#0056b3] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147]">Phone & WhatsApp Help Desk</h4>
                  <div className="mt-1 space-y-1">
                    <a href={`tel:${COLLEGE_INFO.phonePrimary}`} className="block text-xs sm:text-sm text-[#0056b3] font-semibold hover:underline">
                      {COLLEGE_INFO.phonePrimary} (Primary)
                    </a>
                    <a href={`tel:${COLLEGE_INFO.phoneSecondary}`} className="block text-xs sm:text-sm text-[#666666] hover:text-[#0056b3] transition-colors">
                      {COLLEGE_INFO.phoneSecondary} (Admissions Cell)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-[#f8fafd] border border-slate-200 text-[#0056b3] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147]">Email Correspondence</h4>
                  <div className="mt-1 space-y-1">
                    <a href={`mailto:${COLLEGE_INFO.email}`} className="block text-xs sm:text-sm text-[#666666] hover:text-[#0056b3]">
                      {COLLEGE_INFO.email}
                    </a>
                    <a href={`mailto:${COLLEGE_INFO.admissionsEmail}`} className="block text-xs sm:text-sm text-[#0056b3] font-medium">
                      {COLLEGE_INFO.admissionsEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-[#f8fafd] border border-slate-200 text-[#0056b3] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147]">Visiting Hours</h4>
                  <p className="text-xs sm:text-sm text-[#666666] mt-1">
                    {COLLEGE_INFO.officeHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links Banner */}
            <div className="bg-[#001833] p-6 rounded text-white border border-white/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-sky-300">
                <Share2 className="w-4 h-4" />
                <span>Connect With Us Online</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Follow our official social media pages for daily IT tips, student exhibition updates, and scholarship announcements.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded bg-[#002147] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm border border-white/10"
                >
                  <span>Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded border border-slate-300 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mb-8">
                Fill out the form below and an academic advisor will get back to you within 24 hours.
              </p>

              {isSent ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded bg-[#eef6ff] text-[#0056b3] flex items-center justify-center mx-auto border border-blue-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide">Message Delivered!</h4>
                  <p className="text-xs sm:text-sm text-[#333333] max-w-md mx-auto">
                    Thank you, <strong className="text-[#002147]">{contactForm.name}</strong>. Your inquiry regarding "{contactForm.subject}" has been routed to our admissions desk. We will call or WhatsApp you soon.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 bg-[#0056b3] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#004085] transition-colors shadow-sm"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                          errors.name ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="0333-XXXXXXX"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3]"
                      >
                        <option value="General Admission Inquiry">General Admission Inquiry</option>
                        <option value="Fee Structure & Scholarship">Fee Structure & Scholarship</option>
                        <option value="Course Syllabus & Timings">Course Syllabus & Timings</option>
                        <option value="Female Wing Information">Female Wing Information</option>
                        <option value="Other">Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Your Question or Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please write your query here in detail..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.message ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>Send Inquiry Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Google Maps Integration (Interactive Visual Representation) */}
        <div className="bg-white rounded border border-slate-300 overflow-hidden shadow-sm mb-16">
          <div className="p-6 bg-[#001833] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide">Google Maps Integration: University Road, Peshawar</h3>
                <p className="text-xs text-slate-300">Conveniently located near Abdara Chowk and major transport stops</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=University+Road+Peshawar+Pakistan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#0056b3] hover:bg-[#004085] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-96 bg-slate-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600"
              alt="Peshawar Regional Map View"
              className="w-full h-full object-cover opacity-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#001833]/40 backdrop-blur-[2px]" />

            {/* Interactive Map Pin Marker */}
            <div className="absolute z-10 text-center bg-white p-5 rounded border border-slate-300 shadow-xl max-w-xs animate-bounce-slow">
              <div className="w-10 h-10 rounded bg-[#0056b3] text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#002147] uppercase tracking-wide">Khyber College Campus</h4>
              <p className="text-[11px] text-[#666666] mt-1">University Road, near Abdara Chowk, Peshawar, KP</p>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#002147] bg-[#eef6ff] py-1 px-2 rounded border border-blue-200">
                ● Open Now (8:00 AM – 6:00 PM)
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion - Clean Minimalism Style */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-3xl font-bold text-[#002147] uppercase tracking-wide">
              Frequently Asked Questions (FAQs)
            </h3>
            <p className="text-[#666666] text-xs sm:text-sm mt-1">Everything you need to know about our courses and admission policies.</p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded border border-slate-300 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm uppercase tracking-wider text-[#002147] flex items-center justify-between gap-4 hover:text-[#0056b3] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-3 text-xs sm:text-sm text-[#333333] leading-relaxed border-t border-slate-200 bg-[#f8fafd] animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
