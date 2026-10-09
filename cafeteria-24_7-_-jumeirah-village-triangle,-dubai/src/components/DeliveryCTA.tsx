import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';
import { MessageCircle, Phone, Bike, Clock, Sparkles } from 'lucide-react';

export const DeliveryCTA: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(RESTAURANT_INFO.defaultWhatsAppMessage);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FBBF24] relative overflow-hidden text-neutral-950">
      {/* Background Graphic Accents */}
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full bg-black/5 blur-2xl pointer-events-none" />

      {/* Subtle diagonal stripe watermark */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-black tracking-wide uppercase shadow-lg mb-6">
            <Bike className="w-4 h-4 text-[#FBBF24]" />
            <span>{RESTAURANT_INFO.deliveryPolicy}</span>
          </div>

          {/* Main Hook */}
          <h2 className="font-display font-black text-5xl sm:text-7xl tracking-tight uppercase leading-none text-neutral-950">
            HUNGRY?
          </h2>

          <p className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight uppercase mt-2 text-neutral-900">
            ORDER DIRECTLY ON WHATSAPP.
          </p>

          <p className="mt-4 text-base sm:text-lg text-neutral-900 font-semibold max-w-xl">
            Quick response, hot and fresh packaging, and lightning-fast home delivery right to your door in Jumeirah Village Triangle.
          </p>

          {/* WhatsApp Direct Number Display */}
          <div className="mt-6 inline-flex items-center gap-3 bg-neutral-950 text-white px-6 py-3 rounded-2xl shadow-xl">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold">WhatsApp Hotline:</span>
            <span className="font-display font-black text-xl sm:text-2xl text-[#FBBF24] tracking-tight">
              {RESTAURANT_INFO.whatsappNumber}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-neutral-950 hover:bg-neutral-900 text-white font-display font-black text-lg rounded-2xl shadow-2xl hover:scale-103 active:scale-98 transition-all cursor-pointer group"
            >
              <MessageCircle className="w-6 h-6 fill-[#FBBF24] text-[#FBBF24] group-hover:scale-110 transition-transform" />
              <span>ORDER ON WHATSAPP NOW</span>
            </button>

            <a
              href={RESTAURANT_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 bg-white hover:bg-neutral-100 text-neutral-950 font-display font-extrabold text-base rounded-2xl shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 text-neutral-950" />
              <span>Call {RESTAURANT_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Supporting Micro-Notes */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-neutral-900">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Open 6:30 AM – 12:30 AM (Friday from 6:00 AM)</span>
            </span>
            <span>·</span>
            <span>JVT, Al Barsha South & Surrounding Areas</span>
          </div>

        </div>
      </div>
    </section>
  );
};
