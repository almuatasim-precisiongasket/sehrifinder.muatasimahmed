
import React from 'react';
import { Search, MapPin, Sparkles } from 'lucide-react';
import { IslamicPattern } from './Pattern';

interface HeroProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
}

// Custom Lantern SVG Component
const Lantern = ({ className, delay = "0s" }: { className?: string, delay?: string }) => (
  <svg 
    viewBox="0 0 100 180" 
    className={`drop-shadow-[0_10px_20px_rgba(244,164,96,0.4)] ${className}`}
    style={{ animationDelay: delay }}
  >
    {/* Chain */}
    <line x1="50" y1="0" x2="50" y2="40" stroke="#D4AF37" strokeWidth="2" />
    {/* Top Cap - Updated to new Emerald #0D5C3E */}
    <path d="M30 40 L70 40 L60 60 L40 60 Z" fill="#0D5C3E" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Glass Body */}
    <path d="M40 60 L60 60 L75 100 L65 140 L35 140 L25 100 Z" fill="rgba(244, 164, 96, 0.2)" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Inner Glow */}
    <circle cx="50" cy="100" r="15" fill="#F4C430" fillOpacity="0.8" className="animate-pulse" />
    {/* Bottom Details - Updated to new Emerald #0D5C3E */}
    <path d="M35 140 L65 140 L55 155 L45 155 Z" fill="#0D5C3E" stroke="#D4AF37" strokeWidth="1.5" />
    <path d="M50 155 L50 170" stroke="#D4AF37" strokeWidth="2" />
    <circle cx="50" cy="172" r="3" fill="#D4AF37" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ 
  searchTerm, 
  onSearchChange
}) => {
  return (
    <div className="relative min-h-[85vh] w-full bg-midnight overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-16 pb-12">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-navy z-0"></div>
      
      {/* 2. Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light z-0"></div>
      
      {/* 3. Islamic Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <IslamicPattern variant="hexagonal" className="text-gold" opacity={0.15} />
      </div>

      {/* 4. Ambient Light Effects (Glows) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy/50 rounded-full blur-[100px] mix-blend-screen opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald/30 rounded-full blur-[120px] mix-blend-screen opacity-30 pointer-events-none"></div>

      {/* 5. Animated Stars/Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7
            }}
          />
        ))}
      </div>

      {/* --- DECORATIVE ELEMENTS --- */}
      
      {/* Hanging Lanterns */}
      <div className="absolute top-0 left-[5%] md:left-[10%] w-24 h-48 animate-float z-10 pointer-events-none">
        <Lantern className="w-full h-full" />
      </div>
      <div className="absolute -top-10 right-[5%] md:right-[15%] w-32 h-64 animate-float-delayed z-10 pointer-events-none">
        <Lantern className="w-full h-full" delay="1.5s" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center">
        
        {/* Bismillah / Greeting */}
        <div className="mb-6 opacity-80">
          <span className="font-brand text-xl md:text-2xl text-gold tracking-wide">
            بسم الله الرحمن الرحيم
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] drop-shadow-2xl">
          Find Your <span className="italic text-gold-bright">Sehri.</span> <br />
          Feed Your <span className="italic text-gold-bright">Soul.</span>
        </h1>

        {/* Subheading */}
        <p className="text-silver/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          In the quiet hours before dawn, when the city sleeps and hearts awaken, 
          we connect you to warmth, food, and community.
        </p>

        {/* Search & Action Container */}
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 transition-all duration-300 focus-within:bg-white/10 focus-within:border-gold/30">
          
          {/* Search Input */}
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5 group-focus-within:text-white transition-colors" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by area (e.g., Triplicane, Frazer Town)..."
              className="w-full bg-transparent text-white placeholder-white/50 h-14 pl-12 pr-4 rounded-xl focus:outline-none text-lg font-sans"
            />
          </div>

          {/* Action Button */}
          <button className="h-14 px-8 bg-gradient-to-r from-gold to-gold-bright hover:from-gold-bright hover:to-white text-midnight font-bold rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-center justify-center gap-2 text-lg transform hover:scale-[1.02]">
             <MapPin size={20} className="stroke-[2.5]" />
             <span>Find Spots</span>
          </button>
        </div>

        {/* Sub-actions / Trust Markers */}
        <div className="mt-8 flex items-center gap-6 text-sm text-silver/60 font-medium">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-gold" />
            <span>Community Verified</span>
          </div>
          <div className="w-1 h-1 bg-gold rounded-full opacity-50"></div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-gold" />
            <span>2025 Updated</span>
          </div>
        </div>

      </div>

      {/* Decorative Gradient Fade at Bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent z-10"></div>
    </div>
  );
};
