import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, UserCheck, HelpCircle, Download, Printer, Award, Clock, Calendar, CheckSquare } from 'lucide-react';
import { COURSES_DATA, FAQS_DATA } from '../data/collegeData';
import { AdmissionFormData, FormErrors } from '../types';

interface AdmissionsProps {
  preselectedCourse: string;
}

export const Admissions: React.FC<AdmissionsProps> = ({ preselectedCourse }) => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    fullName: '',
    fatherName: '',
    email: '',
    phone: '',
    cnic: '',
    dob: '',
    gender: 'Male',
    address: '',
    city: 'Charsadda',
    previousQualification: 'Intermediate / A-Level',
    marksPercentage: '',
    selectedCourse: preselectedCourse || COURSES_DATA[0].title,
    studyShift: 'Morning',
    howDidYouHear: 'Social Media / Facebook',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    trackingId: string;
    timestamp: string;
    data: AdmissionFormData;
  } | null>(null);

  // Update selected course if prop changes from external clicks
  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, selectedCourse: preselectedCourse }));
    }
  }, [preselectedCourse]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    else if (formData.fullName.trim().length < 3) newErrors.fullName = 'Enter your complete full name.';

    if (!formData.fatherName.trim()) newErrors.fatherName = "Father's Name is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email Address is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email address.';

    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    if (!formData.phone.trim()) newErrors.phone = 'Mobile / WhatsApp number is required.';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Enter a valid 11-digit phone number.';

    if (!formData.cnic.trim()) newErrors.cnic = 'CNIC or B-Form number is required.';
    else if (formData.cnic.length < 11) newErrors.cnic = 'Enter valid CNIC (e.g., 17301-1234567-1).';

    if (!formData.dob) newErrors.dob = 'Date of birth is required.';
    if (!formData.address.trim()) newErrors.address = 'Residential address is required.';
    if (!formData.marksPercentage.trim()) newErrors.marksPercentage = 'Enter your percentage or GPA.';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the college rules and admission terms.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error on typing
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to top of form
      const formEl = document.getElementById('admission-form-anchor');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = 'KCGSPE-2026-' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedReceipt({
        trackingId: randomId,
        timestamp: new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }),
        data: { ...formData },
      });
      // Scroll to receipt
      window.scrollTo({ top: document.getElementById('admissions')?.offsetTop || 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setFormData({
      fullName: '',
      fatherName: '',
      email: '',
      phone: '',
      cnic: '',
      dob: '',
      gender: 'Male',
      address: '',
      city: 'Charsadda',
      previousQualification: 'Intermediate / A-Level',
      marksPercentage: '',
      selectedCourse: COURSES_DATA[0].title,
      studyShift: 'Morning',
      howDidYouHear: 'Social Media / Facebook',
      agreeToTerms: false,
    });
  };

  return (
    <section id="admissions" className="py-16 bg-[#002147] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0056b3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0056b3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0056b3] text-white text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Online Admissions Portal 2026</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase">
            Secure Your Admission in 3 Easy Steps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            Join thousands of successful graduates. Read our eligibility guidelines, review required documents, and submit your verified application directly online.
          </p>
        </div>

        {/* Step-by-Step Guide & Eligibility Cards Grid - Clean Minimalism Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          
          {/* Step 1: Process */}
          <div className="bg-[#001833] border-l-4 border-l-[#0056b3] border-y border-r border-white/10 rounded p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-[#0056b3] text-white font-bold text-base flex items-center justify-center mb-5 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>Admission Process</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                  <span><strong>Step 1:</strong> Select your desired diploma or certificate course from the catalog.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                  <span><strong>Step 2:</strong> Fill out the online form below with accurate personal and academic data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                  <span><strong>Step 3:</strong> Receive your tracking ID and visit campus for document verification & fee deposit.</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] uppercase tracking-wider font-bold text-sky-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Average response time: 24 Business Hours</span>
            </div>
          </div>

          {/* Step 2: Eligibility Criteria */}
          <div className="bg-[#001833] border-l-4 border-l-[#0056b3] border-y border-r border-white/10 rounded p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-[#0056b3] text-white font-bold text-base flex items-center justify-center mb-5 shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                Eligibility Criteria
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                  <span><strong>IT & Web Courses:</strong> Matriculation / SSC or equivalent with minimum 45% marks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                  <span><strong>Spoken English / IELTS:</strong> Open to all age groups, students, and working professionals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                  <span><strong>Beautician Course:</strong> Reserved exclusively for female candidates (Middle / Matric).</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] uppercase tracking-wider font-bold text-sky-300 flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>Merit Scholarships available up to 30%</span>
            </div>
          </div>

          {/* Step 3: Required Documents */}
          <div className="bg-[#001833] border-l-4 border-l-[#0056b3] border-y border-r border-white/10 rounded p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-[#0056b3] text-white font-bold text-base flex items-center justify-center mb-5 shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                Required Documents
              </h3>
              <p className="text-xs text-slate-300 mb-3">Please bring photocopies of the following when visiting campus:</p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                  <span>Matric / Inter Marksheet & Degree (2 copies)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                  <span>Applicant's CNIC / Form-B (2 copies)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                  <span>Father / Guardian CNIC (1 copy)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                  <span>4 Passport size photographs (Blue background)</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] uppercase tracking-wider font-bold text-sky-300 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Originals required for physical verification only</span>
            </div>
          </div>

        </div>

        {/* Admission Form Area */}
        <div id="admission-form-anchor" className="bg-white text-[#333333] rounded p-6 sm:p-10 lg:p-12 shadow-lg border border-slate-300">
          
          {submittedReceipt ? (
            /* SUBMISSION SUCCESS RECEIPT CARD */
            <div className="max-w-2xl mx-auto py-8 text-center space-y-6 animate-scaleUp">
              <div className="w-16 h-16 rounded bg-[#eef6ff] text-[#0056b3] flex items-center justify-center mx-auto border border-blue-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="bg-[#002147] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  Application Successfully Registered
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide">
                  Welcome to Khyber College!
                </h3>
                <p className="text-[#666666] text-xs sm:text-sm">
                  Dear <strong className="text-[#002147]">{submittedReceipt.data.fullName}</strong>, your online application has been recorded in our admissions system.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="bg-[#f8fafd] border border-slate-300 rounded p-6 text-left space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#666666]">Application Tracking ID</span>
                    <span className="text-lg font-mono font-bold text-[#0056b3]">{submittedReceipt.trackingId}</span>
                  </div>
                  <div className="sm:text-right mt-2 sm:mt-0">
                    <span className="block text-[10px] uppercase font-bold text-[#666666]">Submission Time</span>
                    <span className="text-xs font-semibold text-[#333333]">{submittedReceipt.timestamp}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="block text-[11px] text-[#666666]">Selected Course:</span>
                    <strong className="text-[#002147] font-bold">{submittedReceipt.data.selectedCourse}</strong>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#666666]">Preferred Shift:</span>
                    <strong className="text-[#002147] font-bold">{submittedReceipt.data.studyShift} Shift</strong>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#666666]">Father's Name:</span>
                    <span className="text-[#333333] font-medium">{submittedReceipt.data.fatherName}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#666666]">CNIC / Form-B:</span>
                    <span className="text-[#333333] font-mono">{submittedReceipt.data.cnic}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#666666]">Email Address:</span>
                    <span className="text-[#333333]">{submittedReceipt.data.email}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#666666]">Contact Number:</span>
                    <span className="text-[#333333] font-mono">{submittedReceipt.data.phone}</span>
                  </div>
                </div>

                <div className="bg-[#eef6ff] p-3 rounded border-l-4 border-l-[#0056b3] text-xs text-[#002147] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0056b3] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Next Step:</strong> Please take a screenshot or print this receipt and visit the college admission desk along with 2 sets of required documents to confirm your batch allocation.
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#002147] hover:bg-[#001833] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            /* ADMISSION FORM INTERFACE */
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded bg-[#0056b3]" />
                  Official Admission Application Form
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] mt-1">
                  Please fill out all mandatory fields (<span className="text-red-500">*</span>) accurately. Our admissions officer will verify your details.
                </p>
              </div>

              {/* Section 1: Course Selection */}
              <div className="bg-[#f8fafd] p-6 rounded border border-slate-200 space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0056b3]" />
                  <span>1. Course & Shift Allocation</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-2">
                      Select Program / Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="selectedCourse"
                      value={formData.selectedCourse}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-slate-300 text-[#333333] font-semibold text-xs focus:outline-none focus:border-[#0056b3] shadow-sm"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title} ({c.code}) - {c.duration}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-2">
                      Preferred Study Shift <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Morning', 'Evening', 'Weekend'].map((shift) => (
                        <label
                          key={shift}
                          className={`flex items-center justify-center p-2.5 rounded border cursor-pointer text-xs uppercase font-bold tracking-wider transition-all ${
                            formData.studyShift === shift
                              ? 'bg-[#002147] text-white border-[#002147] shadow-sm'
                              : 'bg-white text-[#666666] border-slate-300 hover:text-[#002147]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="studyShift"
                            value={shift}
                            checked={formData.studyShift === shift}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span>{shift} Shift</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Personal Information */}
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#0056b3]" />
                  <span>2. Personal Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Applicant Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Muhammad Ahmad Khan"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.fullName}</p>}
                  </div>

                  {/* Father's Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Father's / Guardian's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      placeholder="e.g. Tariq Mehmood Khan"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.fatherName ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.fatherName && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.fatherName}</p>}
                  </div>

                  {/* CNIC */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      CNIC / Form-B Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cnic"
                      placeholder="17301-1234567-1"
                      value={formData.cnic}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border font-mono text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.cnic ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.cnic && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.cnic}</p>}
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.dob ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.dob && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.dob}</p>}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3]"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0348-9779591"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border font-mono text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.phone ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      City / District
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3]"
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Complete Residential Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Mohla Khattak, Hesara Full, Dargai, Charsadda"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.address ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.address && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.address}</p>}
                  </div>
                </div>
              </div>

              {/* Section 3: Academic Background */}
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#002147] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0056b3]" />
                  <span>3. Academic Background</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="previousQualification"
                      value={formData.previousQualification}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3]"
                    >
                      <option value="Matric / O-Level">Matriculation / O-Level</option>
                      <option value="Intermediate / A-Level">Intermediate / A-Level (FA/FSc/ICS)</option>
                      <option value="Bachelor">Bachelor Degree (BS/BA/BSc)</option>
                      <option value="Master">Master Degree or above</option>
                      <option value="Other">Other / Vocational Certificate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      Marks Percentage / Division / GPA <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="marksPercentage"
                      placeholder="e.g. 78% or 1st Division"
                      value={formData.marksPercentage}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-xs text-[#333333] focus:outline-none transition-all ${
                        errors.marksPercentage ? 'border-red-500' : 'border-slate-300 focus:border-[#0056b3]'
                      }`}
                    />
                    {errors.marksPercentage && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.marksPercentage}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#002147] mb-1.5">
                      How Did You Hear About Us?
                    </label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3]"
                    >
                      <option value="Social Media / Facebook">Facebook / Instagram</option>
                      <option value="Friend / Alumni Referral">Friend / Alumni Referral</option>
                      <option value="Google Search / Website">Google Search</option>
                      <option value="Newspaper / Billboards">Newspaper / Billboard</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Terms & Agreement Checkbox */}
              <div className="pt-4 border-t border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 text-[#0056b3] rounded border-slate-300 focus:ring-[#0056b3]"
                  />
                  <span className="text-xs text-[#666666] leading-relaxed">
                    I declare that all information submitted above is true and accurate to the best of my knowledge. I agree to abide by the disciplinary rules, attendance criteria, and fee policies of <strong className="text-[#002147]">Khyber College of Global Sciences & Professional Education</strong>. <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.agreeToTerms && <p className="text-[11px] text-red-500 mt-2 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.agreeToTerms}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider text-white shadow-sm flex items-center justify-center gap-2 transition-all ${
                    isSubmitting
                      ? 'bg-[#0056b3]/70 cursor-not-allowed'
                      : 'bg-[#0056b3] hover:bg-[#004085]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Official Application Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
