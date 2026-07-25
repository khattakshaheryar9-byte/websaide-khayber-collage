import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Open WhatsApp Web with pre-filled message
    const formattedPhone = COLLEGE_INFO.phoneSecondary.replace(/[^0-9]/g, '');
    const url = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(
      `Hello Khyber College Admissions Team,\n\n${message}`
    )}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Popup Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-white rounded shadow-2xl border border-slate-300 overflow-hidden animate-scaleUp">
          {/* Header */}
          <div className="bg-[#002147] p-4 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#0056b3] flex items-center justify-center font-bold text-sm text-white shadow-sm">
                KC
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider">Khyber College Help Desk</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-sky-300 uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Typically replies instantly</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#f8fafd] space-y-3 max-h-64 overflow-y-auto text-xs">
            <div className="bg-white p-3 rounded rounded-tl-none shadow-sm text-[#333333] max-w-[85%] border border-slate-300">
              <p className="font-bold text-[#0056b3] mb-1 uppercase tracking-wider">Admissions Counselor</p>
              <p>Assalam-u-Alaikum! Welcome to Khyber College of Global Sciences & Professional Education.</p>
              <p className="mt-1">How may we assist you with admissions or course information today?</p>
              <span className="block text-[9px] text-[#666666] text-right mt-1">10:00 AM</span>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-300 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 rounded bg-[#f8fafd] border border-slate-300 text-xs text-[#333333] focus:outline-none focus:border-[#0056b3]"
              autoFocus
            />
            <button
              type="submit"
              className="p-2 rounded bg-[#0056b3] hover:bg-[#004085] text-white transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button - Clean Minimalism Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp live chat"
        className="group relative flex items-center gap-2 px-4 py-3 rounded bg-[#002147] hover:bg-[#0056b3] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all border border-white/20"
      >
        <div className="w-5 h-5 rounded bg-[#0056b3] flex items-center justify-center">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="hidden sm:inline font-bold">WhatsApp Chat</span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-ping" />
        )}
      </button>
    </div>
  );
};
