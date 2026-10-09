import cafeteriaStorefront from '../assets/images/cafeteria_storefront_1791399028110.jpg';
import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';
import { MapPin, Phone, MessageCircle, Users, Coffee, Sparkles } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const StorefrontAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0E0E10] border-b border-neutral-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storefront Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src={cafeteriaStorefront}
                alt="Cafeteria 24/7 Dubai Storefront"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              
              {/* Dark Gradient Overlay for legible badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Bottom Card Overlay on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#141416]/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Logo size="sm" />
                  <div>
                    <h4 className="font-display font-black text-white text-sm">
                      24/7 CAFETERIA
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      Imperial Residence · Jumeirah Village Triangle
                    </p>
                  </div>
                </div>

                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-extrabold text-xs rounded-lg whitespace-nowrap transition-colors"
                >
                  View on Maps
                </a>
              </div>

            </div>

            {/* Floating Storefront Badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-[#FBBF24] text-neutral-950 px-4 py-2 rounded-xl font-display font-black text-xs shadow-xl rotate-2">
              <Sparkles className="w-4 h-4 fill-neutral-950" />
              <span>JVT COMMUNITY FAVORITE</span>
            </div>
          </div>

          {/* Right Column: Authentic Story & Personality */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBBF24] mb-2">
              <span>OUR STORY & CULTURE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
              YOUR NEIGHBORHOOD CAFETERIA THAT’S READY <span className="text-[#FBBF24]">WHENEVER YOU ARE</span>.
            </h2>

            <p className="mt-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
              Cafeteria 24/7 was born from the timeless Dubai cafeteria spirit — bold yellow outdoor chairs, the crackle of freshly pressed paratha on a searing hot tava, ice-cold fruit juices in tall glass steins, and the aroma of aromatic Samovar karak chai.
            </p>

            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              Whether you’re catching up with friends outside, grabbing a quick zinger burger on the run, or ordering late-night comfort food at midnight after a long shift, we keep our burners hot and our delivery bikes fueled.
            </p>

            {/* Quick Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <Coffee className="w-5 h-5 text-[#FBBF24] mb-2" />
                <h4 className="font-display font-bold text-white text-sm">Chai & Paratha Culture</h4>
                <p className="text-xs text-neutral-400 mt-1">Authentic samovar tea and freshly flipped parathas daily.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <Users className="w-5 h-5 text-[#FBBF24] mb-2" />
                <h4 className="font-display font-bold text-white text-sm">Casual & Youthful</h4>
                <p className="text-xs text-neutral-400 mt-1">Chill outdoor yellow seating with an easy, welcoming vibe.</p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(RESTAURANT_INFO.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-extrabold text-sm rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                <span>Chat with Us on WhatsApp</span>
              </a>

              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold text-sm rounded-xl border border-neutral-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FBBF24]" />
                <span>Call 04 554 1799</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
