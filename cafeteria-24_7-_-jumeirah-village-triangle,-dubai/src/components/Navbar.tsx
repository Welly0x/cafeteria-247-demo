import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { RESTAURANT_INFO, getDubaiCurrentStatus } from '../data/restaurantData.ts';
import { Phone, MessageCircle, Menu, X, Clock } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getDubaiCurrentStatus());

  useEffect(() => {
    // Update live status every minute
    const interval = setInterval(() => {
      setStatus(getDubaiCurrentStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: '24/7 Paratha', href: '#paratha' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Hours', href: '#hours' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(RESTAURANT_INFO.defaultWhatsAppMessage);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B0C]/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Zone */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] rounded-lg group"
          aria-label="Cafeteria 24/7 Home"
        >
          <Logo size="sm" />
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-[#FBBF24] transition-colors leading-none">
              CAFETERIA 24/7
            </span>
            <span className="text-[11px] font-medium text-neutral-400 mt-1 flex items-center gap-1.5">
              <span className={`inline-block w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
              <span className="font-semibold text-neutral-300">{status.statusText}</span>
              <span className="text-neutral-500">·</span>
              <span className="hidden sm:inline text-neutral-400">{status.nextEventText}</span>
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-neutral-300 hover:text-[#FBBF24] transition-colors whitespace-nowrap focus:outline-none focus-visible:text-[#FBBF24]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={RESTAURANT_INFO.phoneTel}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors whitespace-nowrap"
            title="Call Cafeteria 24/7"
          >
            <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>{RESTAURANT_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-extrabold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-neutral-950 stroke-neutral-950" />
            <span>ORDER ON WHATSAPP</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111113] border-b border-neutral-800 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 text-xs flex items-center justify-between text-neutral-300">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FBBF24]" />
                <span className="font-semibold">{status.statusText}</span>
              </span>
              <span className="text-neutral-400">{status.nextEventText}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-neutral-200 hover:bg-neutral-800/80 rounded-lg hover:text-[#FBBF24] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-neutral-800/60 flex flex-col gap-2">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-3 bg-neutral-900 text-neutral-200 font-bold text-sm rounded-lg border border-neutral-800"
              >
                <Phone className="w-4 h-4 text-[#FBBF24]" />
                <span>Call {RESTAURANT_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#FBBF24] text-neutral-950 font-display font-extrabold text-sm rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
