import React from 'react';
import { Logo } from './Logo.tsx';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';
import { Phone, MessageCircle, MapPin, ArrowUp, Bike } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Logo Lockup */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div>
                <span className="font-display font-black text-2xl text-white tracking-tight">
                  CAFETERIA 24/7
                </span>
                <p className="text-xs font-arabic font-bold text-neutral-400 mt-0.5" dir="rtl">
                  كافتيريا ٢٤/٧ · دبي
                </p>
              </div>
            </div>

            <p className="mt-5 text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Your neighborhood cafeteria in Jumeirah Village Triangle. Famous for freshly griddled Zinger Paratha, loaded burgers, broasted chicken, and fresh fruit juices.
            </p>

            {/* Delivery badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <Bike className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span className="text-[#FBBF24]">{RESTAURANT_INFO.deliveryPolicy}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-display font-bold text-white text-xs uppercase tracking-wider text-[#FBBF24]">
              Quick Links
            </span>
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#paratha" className="hover:text-white transition-colors">24/7 Paratha</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
            <a href="#hours" className="hover:text-white transition-colors">Opening Hours</a>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-display font-bold text-white text-xs uppercase tracking-wider text-[#FBBF24]">
              Contact & Order
            </span>
            <div className="flex items-center gap-2 text-neutral-300">
              <Phone className="w-4 h-4 text-[#FBBF24] shrink-0" />
              <a href={RESTAURANT_INFO.phoneTel} className="hover:text-[#FBBF24] font-medium">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <MessageCircle className="w-4 h-4 text-[#FBBF24] shrink-0" />
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(RESTAURANT_INFO.defaultWhatsAppMessage)}`}
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#FBBF24] font-medium"
              >
                {RESTAURANT_INFO.whatsappNumber}
              </a>
            </div>
            <div className="flex items-start gap-2 text-neutral-400 text-xs leading-relaxed mt-1">
              <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.addressDetailed}</span>
            </div>
          </div>

          {/* Col 4: Final Tagline & Scroll to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <div>
              <span className="font-display font-black text-xl text-white">
                "Order anytime."
              </span>
              <p className="text-xs text-neutral-400 mt-1">
                Open from 6:30 AM to 12:30 AM
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 lg:mt-0 p-3 bg-neutral-900 hover:bg-[#FBBF24] text-neutral-400 hover:text-neutral-950 rounded-xl border border-neutral-800 transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Cafeteria 24/7 (كافتيريا ٢٤/٧). All rights reserved.
          </div>
          <div className="text-neutral-400">
            Jumeirah Village Triangle, Dubai, United Arab Emirates
          </div>
        </div>

      </div>
    </footer>
  );
};
