import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded border border-slate-300 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative animate-scaleUp p-6 sm:p-10 text-[#333333]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded bg-[#f8fafd] text-[#666666] hover:bg-[#002147] hover:text-white transition-colors border border-slate-300"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="p-3 rounded bg-[#f8fafd] border border-slate-300 text-[#0056b3]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide">Privacy Policy</h3>
                <p className="text-xs text-[#666666] font-semibold">Effective Date: January 1, 2026 • {COLLEGE_INFO.name}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#333333] leading-relaxed">
              <p>
                At <strong className="text-[#002147]">{COLLEGE_INFO.name}</strong>, respecting the privacy and confidentiality of our students, applicants, and website visitors is our paramount duty. This Privacy Policy explains how we collect, use, and safeguard personal information.
              </p>

              <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wide">1. Information We Collect</h4>
              <p>
                When you submit an online admission form or contact inquiry, we collect personal details including your full name, father's/guardian's name, email address, phone number, CNIC/B-Form number, residential address, and academic qualifications.
              </p>

              <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wide">2. How We Use Your Data</h4>
              <p>
                Collected information is utilized strictly for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Processing academic admissions and batch allocations.</li>
                <li>Verifying eligibility with provincial technical education boards.</li>
                <li>Communicating schedule updates, exam results, and scholarship alerts.</li>
                <li>Issuing official student ID cards and completion certificates.</li>
              </ul>

              <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wide">3. Data Protection & Non-Disclosure</h4>
              <p>
                We employ industry-standard encryption and physical server safeguards. We never sell, rent, or trade student personal data to third-party marketing companies. Data is only disclosed to official examination or regulatory authorities when mandated by law.
              </p>

              <div className="bg-[#f8fafd] p-4 rounded border border-slate-300 text-xs text-[#002147]">
                If you have any privacy-related inquiries or wish to update your admission records, please contact our data registrar at <strong className="text-[#0056b3]">{COLLEGE_INFO.email}</strong>.
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="p-3 rounded bg-[#f8fafd] border border-slate-300 text-[#0056b3]">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002147] uppercase tracking-wide">Terms & Conditions</h3>
                <p className="text-xs text-[#666666] font-semibold">Academic & Disciplinary Code • {COLLEGE_INFO.name}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#333333] leading-relaxed">
              <p>
                By applying for admission or enrolling in any course at <strong className="text-[#002147]">{COLLEGE_INFO.name}</strong>, students agree to comply with the following institutional terms and conditions:
              </p>

              <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wide">1. Academic Attendance & Discipline</h4>
              <p>
                A minimum of <strong className="text-[#002147]">80% classroom and laboratory attendance</strong> is mandatory to be eligible for final certificate examinations. Students must maintain respectful, professional conduct towards faculty, staff, and fellow peers at all times.
              </p>

              <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wide">2. Fee Payment & Refund Policy</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tuition and registration fees must be deposited by the 10th of every month.</li>
                <li>Admission registration fee is non-refundable once batch allocation is finalized.</li>
                <li>Students withdrawing within the first week of classes are eligible for a 50% tuition fee refund upon formal written request to the Principal.</li>
              </ul>

              <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wide">3. Lab & Equipment Care</h4>
              <p>
                Students are responsible for the careful usage of computer laboratory workstations, styling equipment, and library resources. Any willful damage to college property will result in disciplinary fines or cancellation of enrollment.
              </p>

              <h4 className="font-bold text-[#002147] text-sm uppercase tracking-wide">4. Female Wing Security Standards</h4>
              <p>
                To maintain complete privacy and security, unauthorized entry into dedicated female training wings and cosmetology studios is strictly prohibited.
              </p>

              <div className="bg-[#f8fafd] p-4 rounded border border-slate-300 text-xs text-[#002147] flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#0056b3] flex-shrink-0" />
                <span>We are committed to providing a safe, empowering, and world-class educational environment for all students.</span>
              </div>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
