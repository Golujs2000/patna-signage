import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/signageData';

export default function WhatsAppFloating() {
  return (
    <a
      href={companyInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      aria-label="Chat with Patna Signage on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
      <span className="hidden sm:inline font-semibold text-xs tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
}
