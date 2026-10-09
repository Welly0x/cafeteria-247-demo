import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingMobileBar: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(RESTAURANT_INFO.defaultWhatsAppMessage);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0C]/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 px-4 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={RESTAURANT_INFO.phoneTel}
          className="flex items-center justify-center gap-2 py-3 bg-neutral-900 text-white font-bold text-xs sm:text-sm rounded-xl border border-neutral-800 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#FBBF24]" />
          <span>Call 04 554 1799</span>
        </a>

        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 py-3 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-extrabold text-xs sm:text-sm rounded-xl shadow-lg active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-neutral-950" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </div>
  );
};
