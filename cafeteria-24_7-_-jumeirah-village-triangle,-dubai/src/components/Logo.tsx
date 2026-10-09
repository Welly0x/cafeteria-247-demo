import React from 'react';

interface LogoProps {
  variant?: 'circular' | 'horizontal' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'circular', 
  className = '', 
  size = 'md' 
}) => {
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`}>
        <div className="flex items-center bg-[#111113] border border-neutral-800 rounded-lg px-2.5 py-1 shadow-sm">
          <span className="font-display font-extrabold text-white text-xl md:text-2xl tracking-tight">
            24
          </span>
          <div className="ml-1 bg-[#FBBF24] text-neutral-950 font-display font-extrabold text-lg md:text-xl px-1.5 py-0.5 rounded-md leading-none shadow-inner flex items-center justify-center">
            7
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-black text-[#FBBF24] text-lg md:text-xl tracking-tight uppercase leading-none">
            Cafeteria
          </span>
          <span className="text-[10px] text-neutral-400 font-semibold font-arabic text-right leading-tight mt-0.5" dir="rtl">
            كافتيريا ٢٤/٧
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center bg-[#141416] border border-neutral-800 rounded-lg px-2 py-1 shadow-md select-none ${className}`}>
        <span className="font-display font-black text-white text-base md:text-lg tracking-tight">
          24
        </span>
        <span className="ml-1 bg-[#FBBF24] text-neutral-950 font-display font-black text-sm md:text-base px-1.5 py-0.5 rounded leading-none">
          7
        </span>
      </div>
    );
  }

  // Exact reproduction of uploaded circular logo
  const dimension = 
    size === 'sm' ? 44 : 
    size === 'md' ? 68 : 
    size === 'lg' ? 104 : 140;

  return (
    <div 
      className={`relative inline-block select-none shrink-0 ${className}`} 
      style={{ width: dimension, height: dimension }}
      aria-label="Cafeteria 24/7 Logo"
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Outer Yellow Ring */}
        <circle cx="150" cy="150" r="145" fill="#FBBF24" />
        
        {/* Inner Dark Espresso / Charcoal Circle */}
        <circle cx="150" cy="150" r="95" fill="#181311" />
        
        {/* Curved Path for Arabic text "كافتيريا" at top */}
        <path
          id="arabicCurve"
          d="M 50,150 A 100,100 0 0,1 250,150"
          fill="none"
        />
        
        {/* Curved Path for English text "Cafeteria" at bottom */}
        <path
          id="englishCurve"
          d="M 60,165 A 110,110 0 0,0 240,165"
          fill="none"
        />

        {/* Arabic Text "كافتيريا" */}
        <text
          fill="#181311"
          fontSize="44"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2"
        >
          <textPath href="#arabicCurve" startOffset="50%" textAnchor="middle">
            كافتيريا
          </textPath>
        </text>

        {/* English Text "Cafeteria" */}
        <text
          fill="#181311"
          fontSize="36"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.5"
        >
          <textPath href="#englishCurve" startOffset="50%" textAnchor="middle">
            Cafeteria
          </textPath>
        </text>

        {/* Center 24/7 Lockup */}
        <g transform="translate(150, 150)">
          {/* White '24' */}
          <text
            x="-18"
            y="17"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="54"
            fontWeight="900"
            fontFamily="'Outfit', sans-serif"
            letterSpacing="-2"
          >
            24
          </text>
          
          {/* Yellow Rounded Shield for 7 */}
          <rect
            x="8"
            y="-32"
            width="56"
            height="58"
            rx="14"
            fill="#FBBF24"
          />
          
          {/* Dark '7' */}
          <text
            x="36"
            y="15"
            textAnchor="middle"
            fill="#181311"
            fontSize="52"
            fontWeight="900"
            fontFamily="'Outfit', sans-serif"
          >
            7
          </text>
        </g>
      </svg>
    </div>
  );
};
