import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData.ts';
import { MessageCircle, Flame, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export const ParathaFeature: React.FC = () => {
  const parathaFavorites = [
    { name: 'Zinger Paratha', price: 'AED 13.00', note: 'Crunchy zinger chicken fillet rolled in hot layered paratha', tag: 'Bestseller' },
    { name: 'Oman Chips Paratha', price: 'AED 4.00', note: 'Crushed Oman chips, creamy Kraft cheese and hot sauce', tag: 'Dubai Classic' },
    { name: 'Francisco Paratha', price: 'AED 7.00', note: 'Chicken strips, Amwaj chips, crisp lettuce & mayo', tag: 'Local Favorite' },
    { name: 'Tikka Paratha', price: 'AED 10.00', note: 'Smoky spiced chicken tikka morsels & sliced onions', tag: 'Spicy' },
    { name: 'Chicken Nashif Paratha', price: 'AED 6.00', note: 'Traditional braised chicken gravy masala inside fresh paratha', tag: 'Savory' },
    { name: 'Cheese Honey Paratha', price: 'AED 4.00', note: 'Melted cream cheese drenched in golden amber honey', tag: 'Sweet & Salty' },
  ];

  const handleOrderParatha = (parathaName: string = 'Zinger Paratha') => {
    const text = encodeURIComponent(`Hi Cafeteria 24/7, I would like to order: ${parathaName}`);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="paratha" className="py-20 bg-[#0E0E10] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Visual Accent Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#FBBF24]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FBBF24]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-bold text-[#FBBF24] mb-4">
            <Flame className="w-3.5 h-3.5 fill-[#FBBF24]" />
            <span>THE 24/7 SPECIALTY</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            24/7 <span className="text-[#FBBF24]">PARATHA</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            One of our signature cafeteria favorites. Layered, golden, flaky flatbread hand-griddled fresh and wrapped with loaded fillings.
          </p>
        </div>

        {/* Feature Grid: Hero Showcase + Varieties */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Showcase Hero: Zinger Paratha Roll */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#141416] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden group">
              
              {/* Corner Tag */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 bg-[#FBBF24] text-neutral-950 font-display font-black text-xs px-3 py-1.5 rounded-lg shadow-md">
                <Star className="w-3.5 h-3.5 fill-neutral-950" />
                <span>SIGNATURE ROLL</span>
              </div>

              {/* Price Tag */}
              <div className="absolute top-6 right-6 z-20 bg-neutral-950/90 border border-neutral-700 text-[#FBBF24] font-display font-extrabold text-sm px-3.5 py-1.5 rounded-lg">
                AED 13.00
              </div>

              {/* Subtle paratha backdrop circle */}
              <div className="relative mx-auto w-full max-w-[340px] aspect-square flex items-center justify-center my-4">
                <div className="absolute inset-4 rounded-full bg-gradient-to-b from-[#FBBF24]/15 via-transparent to-transparent pointer-events-none" />
                <img
                  src="src/assets/images/Zinger_paratha_roll_commercial_i__2K_20261006234308-removebg-preview.png"
                  alt="Zinger Paratha Roll at Cafeteria 24/7"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-black text-2xl text-white">
                    Zinger Paratha
                  </h3>
                  <span className="text-sm font-arabic font-bold text-neutral-400" dir="rtl">
                    زنجر براتا
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  Hot off the flat iron griddle. Crispy fried chicken breast strips tucked into layered flaky paratha, tossed with finely sliced cabbage, crunchy onions, and cafeteria special spicy mayo dressing.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => handleOrderParatha('Zinger Paratha')}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FBBF24] hover:bg-[#F59E0B] text-neutral-950 font-display font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-neutral-950" />
                    <span>Order Zinger Paratha</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Paratha Varieties & Heritage */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">Authentic Dubai Paratha Menu</span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                Choose Your Favorite Filling
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                From Oman Chips crunch to spicy Tikka and savory Nashif, handcrafted anytime day or night.
              </p>
            </div>

            {/* List of Parathas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {parathaFavorites.map((item) => (
                <div
                  key={item.name}
                  className="bg-[#141416] hover:bg-[#1a1a1d] border border-neutral-800/80 hover:border-[#FBBF24]/50 rounded-2xl p-4 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-display font-bold text-white text-base group-hover:text-[#FBBF24] transition-colors">
                        {item.name}
                      </span>
                      <span className="font-display font-extrabold text-[#FBBF24] text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <span className="inline-block text-[10px] font-semibold text-neutral-400 bg-neutral-900 border border-neutral-800 rounded px-2 py-0.5 mt-1.5">
                      {item.tag}
                    </span>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                      {item.note}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOrderParatha(item.name)}
                    className="mt-4 w-full py-2 bg-neutral-900 hover:bg-[#FBBF24] text-neutral-300 hover:text-neutral-950 text-xs font-bold rounded-lg border border-neutral-800 hover:border-[#FBBF24] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Quality Statement Banner */}
            <div className="mt-3 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FBBF24] shrink-0" />
              <p className="text-xs text-neutral-300">
                <span className="font-bold text-white">Always Griddled Fresh:</span> We make every paratha hot upon order. Flaky, never soggy, delivered directly to your door in JVT & nearby areas.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
