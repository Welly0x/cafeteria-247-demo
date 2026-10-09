import React from 'react';
import { Zap, Flame, Bike, Clock, ArrowRight } from 'lucide-react';

export const Why247: React.FC = () => {
  const pillars = [
    {
      title: 'FAST & FRESH',
      arabic: 'طازج وسريع',
      description: 'Hot cafeteria meals cooked freshly to order. Packed hot and ready for quick takeaway or dining.',
      icon: Zap,
      accent: '#FBBF24',
    },
    {
      title: 'PARATHA FAVORITES',
      arabic: 'أشهى فطائر البراتا',
      description: 'A signature part of the 24/7 experience. Flaky golden parathas stuffed with Zinger, Oman Chips, Francisco and more.',
      icon: Flame,
      accent: '#F59E0B',
    },
    {
      title: 'FREE HOME DELIVERY',
      arabic: 'توصيل مجاني للمنازل',
      description: 'Enjoy free home delivery for orders up to AED 10 in Jumeirah Village Triangle & Al Barsha South Fifth.',
      icon: Bike,
      accent: '#FBBF24',
    },
    {
      title: 'OPEN THROUGHOUT THE DAY',
      arabic: 'مفتوح طوال اليوم',
      description: 'Serving you from 6:30 AM breakfast (6:00 AM on Friday) right through until 12:30 AM late-night cravings.',
      icon: Clock,
      accent: '#EAB308',
    },
  ];

  return (
    <section className="py-18 bg-[#0B0B0C] border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBBF24] mb-2">
              <span>THE 24/7 PROMISE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              WHY <span className="text-[#FBBF24]">CAFETERIA 24/7</span>?
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Your neighborhood cafeteria that's ready whenever you are. Honest taste, generous portions, and real Dubai cafeteria culture.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#121214] border border-neutral-800 hover:border-[#FBBF24]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors">
                      <Icon className="w-6 h-6 text-[#FBBF24] group-hover:text-neutral-950 transition-colors" />
                    </div>
                    <span className="font-display font-black text-xs text-neutral-600 group-hover:text-[#FBBF24] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Arabic */}
                  <h3 className="font-display font-black text-lg text-white group-hover:text-[#FBBF24] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-arabic font-bold text-neutral-400 mt-0.5">
                    {item.arabic}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center text-[11px] font-bold text-neutral-400 group-hover:text-[#FBBF24] transition-colors">
                  <span>Authentic Quality</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
