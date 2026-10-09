import React, { useState, useMemo } from 'react';
import { 
  FEATURED_PRODUCTS, 
  MENU_CATEGORIES, 
  AUTHENTIC_MENU_DIRECTORY, 
  RESTAURANT_INFO,
  MenuItem 
} from '../data/restaurantData.ts';
import { MessageCircle, Sparkles, Search, ChevronRight, Check, Flame } from 'lucide-react';

interface MenuSectionProps {
  onSelectItemForOrder?: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItemForOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter featured visual items
  const filteredFeatured = useMemo(() => {
    return FEATURED_PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.arabicName && item.arabicName.includes(searchQuery)) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Directory items for the authentic menu browser
  const directoryData = useMemo(() => {
    if (activeCategory === 'all') {
      return null;
    }
    // Map tab id to key in AUTHENTIC_MENU_DIRECTORY
    const mapping: Record<string, string> = {
      paratha: 'paratha',
      burgers: 'burgers',
      wraps: 'wraps',
      combos: 'combos',
      club: 'club',
      shawarma: 'shawarma',
      'fried-chicken': 'friedChicken',
      pizza: 'pizza',
      plates: 'plates',
      juices: 'juices',
      milkshakes: 'juices', // or special juices
      'hot-drinks': 'hotDrinks',
      breakfast: 'breakfast',
    };
    const key = mapping[activeCategory];
    if (key && AUTHENTIC_MENU_DIRECTORY[key]) {
      return AUTHENTIC_MENU_DIRECTORY[key];
    }
    return null;
  }, [activeCategory]);

  const handleOrderWhatsApp = (productName: string, price?: string) => {
    const text = encodeURIComponent(
      `Hi Cafeteria 24/7, I would like to order: ${productName}${price ? ` (${price})` : ''}. Please confirm availability and delivery time.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-[#0B0B0C] border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBBF24] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRESH FROM THE KITCHEN</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              CAFETERIA <span className="text-[#FBBF24]">MENU</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
              Authentic cafeteria dishes prepared hot and fresh. Tap any item to order directly on WhatsApp with free delivery up to AED 10.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, parathas..."
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24] transition-all"
            />
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="relative mb-10 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 min-w-max">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#FBBF24] text-neutral-950 shadow-md shadow-[#FBBF24]/20'
                      : 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800/80'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Visual Cards Grid */}
        {filteredFeatured.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFeatured.map((item) => (
              <div
                key={item.id}
                className="group bg-[#121214] hover:bg-[#161619] border border-neutral-800 hover:border-[#FBBF24]/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#FBBF24]/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Image Showcase Container */}
                <div className="relative w-full aspect-square bg-[#0E0E10] p-6 flex items-center justify-center overflow-hidden border-b border-neutral-800/80">
                  
                  {/* Subtle Background Radial Glow */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#FBBF24]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                    {item.isSignature && (
                      <span className="bg-[#FBBF24] text-neutral-950 font-display font-black text-[10px] px-2 py-0.5 rounded shadow">
                        SIGNATURE
                      </span>
                    )}
                    {item.isPopular && !item.isSignature && (
                      <span className="bg-neutral-800 text-neutral-200 font-display font-bold text-[10px] px-2 py-0.5 rounded border border-neutral-700">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {item.price && (
                    <div className="absolute top-3 right-3 z-10 bg-neutral-950/90 border border-neutral-700 text-[#FBBF24] font-display font-extrabold text-xs px-2.5 py-1 rounded-lg shadow">
                      {item.price}
                    </div>
                  )}

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] group-hover:scale-108 transition-transform duration-500 select-none"
                  />
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-black text-lg text-white group-hover:text-[#FBBF24] transition-colors leading-snug">
                        {item.name}
                      </h3>
                    </div>
                    {item.arabicName && (
                      <div className="text-xs font-arabic font-bold text-neutral-400 mt-0.5" dir="rtl">
                        {item.arabicName}
                      </div>
                    )}
                    {item.description && (
                      <p className="mt-2 text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Order Button */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/80">
                    <button
                      onClick={() => handleOrderWhatsApp(item.name, item.price)}
                      className="w-full py-2.5 px-3 bg-neutral-900 group-hover:bg-[#FBBF24] text-neutral-200 group-hover:text-neutral-950 font-display font-bold text-xs rounded-xl border border-neutral-800 group-hover:border-[#FBBF24] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 group-hover:fill-neutral-950" />
                      <span>ORDER ON WHATSAPP</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-[#121214] rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">
              No featured images in this specific filter, but full authentic dishes are listed below!
            </p>
          </div>
        )}

        {/* Authentic Full Menu Directory for Category */}
        {directoryData && (
          <div className="mt-14 bg-[#121214] border border-neutral-800 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">Official Cafeteria Menu</span>
                <h3 className="font-display font-black text-2xl text-white mt-0.5">
                  {directoryData.title}
                </h3>
              </div>
              <span className="text-xs text-neutral-400">
                Source of Truth: Physical 24/7 Cafeteria Menu
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {directoryData.items.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-neutral-900/70 hover:bg-neutral-800/90 rounded-xl border border-neutral-800/80 hover:border-[#FBBF24]/40 transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-neutral-100 group-hover:text-[#FBBF24] transition-colors truncate">
                        {entry.name}
                      </span>
                    </div>
                    {entry.arabic && (
                      <div className="text-[11px] font-arabic text-neutral-400 mt-0.5" dir="rtl">
                        {entry.arabic}
                      </div>
                    )}
                    {entry.note && (
                      <div className="text-[10px] text-neutral-400 mt-0.5 truncate">
                        {entry.note}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="font-display font-extrabold text-xs text-[#FBBF24]">
                      {entry.price}
                    </span>
                    <button
                      onClick={() => handleOrderWhatsApp(entry.name, entry.price)}
                      className="p-1.5 bg-neutral-800 hover:bg-[#FBBF24] text-neutral-400 hover:text-neutral-950 rounded-lg transition-colors cursor-pointer"
                      title="Order on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
              <span>All items prepared hot upon order. Free home delivery up to AED 10.</span>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hi Cafeteria 24/7, I would like to inquire about the full menu.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#FBBF24] hover:underline font-bold"
              >
                <span>Ask for daily specials on WhatsApp</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
