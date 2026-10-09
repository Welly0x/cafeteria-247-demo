import React, { useState, useEffect } from 'react';
import { 
  RESTAURANT_INFO, 
  OPENING_HOURS, 
  getDubaiCurrentStatus 
} from '../data/restaurantData.ts';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Share2,
  Copy,
  Check
} from 'lucide-react';

export const LocationAndHours: React.FC = () => {
  const [status, setStatus] = useState(getDubaiCurrentStatus());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getDubaiCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.addressDetailed}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#0B0B0C] border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBBF24] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND US IN DUBAI</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            LOCATION & <span className="text-[#FBBF24]">HOURS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Conveniently located at Imperial Residence in Jumeirah Village Triangle (JVT), Dubai.
          </p>
        </div>

        {/* 2-Column Grid: Map + Hours & Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Map Container */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full h-[400px] sm:h-[460px] bg-[#141416] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Google Maps iFrame */}
              <iframe
                title="Cafeteria 24/7 Location Map"
                src="https://maps.google.com/maps?q=Cafeteria%2024/7%20Imperial%20Residence%20Jumeirah%20Village%20Triangle%20Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Address Bar on Top of Map */}
              <div className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-[#121214]/95 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow-2xl flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FBBF24] text-neutral-950 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-white">
                      Cafeteria 24/7
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5 leading-snug">
                      Shop 25, Imperial Residence, Jumeirah Village Triangle, Dubai
                    </p>
                    <span className="inline-block text-[11px] font-mono text-[#FBBF24] mt-1">
                      Plus Code: 25WW+Q7V
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 text-neutral-400 hover:text-white bg-neutral-900 rounded-lg border border-neutral-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Bottom Direction Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-black text-xs sm:text-sm rounded-xl shadow-xl transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <div className="bg-neutral-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-800 text-xs font-semibold text-neutral-300">
                  Near Safestway Supermarket
                </div>
              </div>

            </div>

            {/* Quick Action Contact Bar below Map */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="p-4 rounded-2xl bg-[#141416] hover:bg-[#1a1a1d] border border-neutral-800 flex items-center gap-3 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors">
                  <Phone className="w-4 h-4 text-[#FBBF24] group-hover:text-neutral-950" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Call Cafeteria</div>
                  <div className="font-display font-bold text-white text-sm">{RESTAURANT_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(RESTAURANT_INFO.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#141416] hover:bg-[#1a1a1d] border border-neutral-800 flex items-center gap-3 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#FBBF24] group-hover:text-neutral-950" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">WhatsApp Orders</div>
                  <div className="font-display font-bold text-white text-sm">{RESTAURANT_INFO.whatsappNumber}</div>
                </div>
              </a>

              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#141416] hover:bg-[#1a1a1d] border border-neutral-800 flex items-center gap-3 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors">
                  <Navigation className="w-4 h-4 text-[#FBBF24] group-hover:text-neutral-950" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Google Maps</div>
                  <div className="font-display font-bold text-white text-sm">Open Route</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Opening Hours Schedule Card */}
          <div id="hours" className="lg:col-span-5 bg-[#141416] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header with Live Status Indicator */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">TIMINGS</span>
                  <h3 className="font-display font-black text-2xl text-white mt-0.5">
                    Opening Hours
                  </h3>
                </div>

                <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 ${
                  status.isOpen 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                  <span className="text-xs font-bold">{status.statusText}</span>
                </div>
              </div>

              {/* Live Info Banner */}
              <div className="mt-4 p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FBBF24]" />
                  <span>Dubai Local Time: <strong className="text-white font-mono">{status.dubaiTimeString}</strong></span>
                </span>
                <span className="text-neutral-400">{status.nextEventText}</span>
              </div>

              {/* Schedule Days List */}
              <div className="mt-6 flex flex-col gap-2.5">
                {OPENING_HOURS.map((slot) => {
                  const isToday = status.todayName === slot.day;
                  return (
                    <div
                      key={slot.day}
                      className={`p-3 rounded-xl transition-colors flex items-center justify-between ${
                        isToday 
                          ? 'bg-[#FBBF24]/10 border border-[#FBBF24]/30' 
                          : 'bg-neutral-900/40 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`text-xs font-bold ${isToday ? 'text-[#FBBF24]' : 'text-neutral-300'}`}>
                          {slot.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-black px-1.5 py-0.2 bg-[#FBBF24] text-neutral-950 rounded">
                            Today
                          </span>
                        )}
                      </div>

                      {/* Display Hours: Note Friday's split schedule */}
                      <div className="text-right">
                        {slot.isSplit && slot.splitHours ? (
                          <div className="flex flex-col items-end">
                            <span className={`text-xs font-bold font-mono ${isToday ? 'text-white' : 'text-neutral-300'}`}>
                              {slot.splitHours[0]}
                            </span>
                            <span className={`text-xs font-bold font-mono ${isToday ? 'text-[#FBBF24]' : 'text-neutral-400'}`}>
                              {slot.splitHours[1]}
                            </span>
                          </div>
                        ) : (
                          <span className={`text-xs font-bold font-mono ${isToday ? 'text-white' : 'text-neutral-300'}`}>
                            {slot.hours}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note on Friday Split Schedule */}
              <div className="mt-6 p-3 bg-neutral-900/60 rounded-xl border border-neutral-800 text-[11px] text-neutral-400">
                <span className="text-[#FBBF24] font-bold">Friday Note:</span> Cafeteria operates a morning shift (6:00 AM – 12:00 PM), closes briefly for Friday Jummah prayer, and reopens at 2:00 PM until 12:30 AM.
              </div>
            </div>

            {/* Quick Order Button */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hi Cafeteria 24/7, are you open for delivery right now?')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                <span>Confirm Delivery on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
