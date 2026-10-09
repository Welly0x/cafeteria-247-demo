import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';
import { MessageCircle, ArrowRight, Sparkles, Bike, Clock, Flame } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hi Cafeteria 24/7, I would like to place an order.');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#0B0B0C]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-[#FBBF24]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -translate-x-1/4 w-80 h-80 bg-[#FBBF24]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Cafeteria Strip Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FBBF24_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Neighborhood Pill Bar */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
              <span>Jumeirah Village Triangle, Dubai</span>
              <span className="text-neutral-600">·</span>
              <span className="text-[#FBBF24]">Free Delivery up to AED 10</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-[1.05] text-balance">
              Your Cravings.<br />
              <span className="text-[#FBBF24] inline-block relative">
                Anytime.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FBBF24]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              {RESTAURANT_INFO.subTagline} Freshly made with authentic cafeteria flavor, prepared hot for your late-night cravings or fast daytime bite.
            </p>

            {/* Key Micro-Perks */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-neutral-400">
              <div className="flex items-center gap-1.5 text-neutral-200">
                <Bike className="w-4 h-4 text-[#FBBF24]" />
                <span>Fast Home Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-200">
                <Flame className="w-4 h-4 text-[#FBBF24]" />
                <span>Signature Paratha Roll</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-200">
                <Clock className="w-4 h-4 text-[#FBBF24]" />
                <span>Late-Night Until 12:30 AM</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-black text-base rounded-xl shadow-xl shadow-[#FBBF24]/20 hover:shadow-[#FBBF24]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950 stroke-neutral-950 group-hover:scale-110 transition-transform" />
                <span>ORDER ON WHATSAPP</span>
              </button>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900/90 hover:bg-neutral-800 text-white font-display font-bold text-base rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 text-[#FBBF24] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick WhatsApp helper note */}
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>WhatsApp orders directly dispatched: </span>
              <a href="https://wa.me/971589981799" target="_blank" rel="noreferrer" className="text-[#FBBF24] hover:underline font-bold">
                +971 58 998 1799
              </a>
            </div>

          </div>

          {/* Right Column: Floating 3D Product Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Layered Decorative Backdrop Circle */}
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-[#FBBF24]/30 animate-pulse [animation-duration:4s]" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-[#1e1c14] border border-neutral-800 shadow-2xl" />

              {/* Yellow Graphic Shape Accent */}
              <div 
                className="absolute -top-4 -right-4 w-28 h-28 bg-[#FBBF24] rounded-2xl rotate-12 flex flex-col items-center justify-center shadow-lg transition-transform duration-300"
                style={{
                  transform: `rotate(12deg) translate(${tilt.x * 0.4}px, ${tilt.y * 0.4}px)`,
                }}
              >
                <span className="font-display font-black text-neutral-950 text-2xl leading-none">AED 18</span>
                <span className="text-[10px] font-extrabold uppercase text-neutral-900 tracking-wider mt-0.5">Mighty Zinger</span>
              </div>

              {/* Floating Product Image with 3D Depth */}
              <div
                className="relative z-20 w-[88%] aspect-square flex items-center justify-center transition-transform duration-200 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.03, 1.03, 1.03)`,
                }}
              >
                <img
                  src="src/assets/images/Crispy_fried_chicken_burger_2K_20261006234203-removebg-preview.png"
                  alt="Mighty Zinger Burger at Cafeteria 24/7"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] select-none pointer-events-none"
                />
              </div>

              {/* Floating Micro Badge: 24/7 Bestseller */}
              <div 
                className="absolute -bottom-3 -left-3 z-30 bg-[#121214] border border-neutral-800/90 rounded-xl px-4 py-2.5 shadow-2xl flex items-center gap-3 transition-transform duration-300"
                style={{
                  transform: `translate(${-tilt.x * 0.3}px, ${-tilt.y * 0.3}px)`,
                }}
              >
                <div className="w-9 h-9 rounded-lg bg-[#FBBF24] text-neutral-950 flex items-center justify-center font-display font-black text-sm">
                  24/7
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>Mighty Zinger Burger</span>
                    <Sparkles className="w-3 h-3 text-[#FBBF24]" />
                  </div>
                  <div className="text-[11px] text-neutral-400 font-medium">Double patty · Pure crunch</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
