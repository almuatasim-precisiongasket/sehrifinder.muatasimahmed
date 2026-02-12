
import React, { useState } from 'react';
import { Menu, X, Moon, Share2, Info, Flag } from 'lucide-react';
import { IslamicPattern } from './Pattern';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 glass-dark">
        {/* Pattern Background - Very subtle */}
        <IslamicPattern opacity={0.05} className="text-gold" />
        
        <div className="container mx-auto px-4 h-full flex items-center justify-between relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Moon className="w-7 h-7 text-gold-bright fill-current relative z-10" />
            </div>
            <h1 className="font-serif text-2xl tracking-wide select-none flex flex-col items-start leading-none">
              <span className="text-white font-medium">SEHRI</span>
              <span className="text-gold text-sm font-bold tracking-[0.2em] mt-0.5">FINDER</span>
            </h1>
          </div>

          {/* Menu Button */}
          <button 
            onClick={() => setMenuOpen(true)}
            className="p-2 text-gold-bright hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative w-80 bg-midnight border-l border-white/10 h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-silver hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mt-8 mb-10">
               <h2 className="font-serif text-3xl mb-2 text-white">
                <span className="text-white">SEHRI</span>
                <span className="text-gold">FINDER</span>
              </h2>
              <p className="text-sm text-silver/50 italic font-sans border-t border-white/10 pt-4 mt-2">
                "Feed the body, nourish the soul."
              </p>
            </div>

            <nav className="flex-1 space-y-3">
              <MenuItem icon={<Info size={20} />} label="About This Service" />
              <MenuItem icon={<Flag size={20} />} label="Report an Issue" />
              <MenuItem icon={<Share2 size={20} />} label="Share App" />
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10">
               <p className="text-xs text-center text-silver/40 font-sans">
                 Designed for Ramadan 2026 <br/>
                 Chennai • Bangalore • Hyderabad • Mumbai
               </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MenuItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <button className="flex items-center gap-4 w-full p-4 rounded-xl text-silver hover:bg-white/5 hover:text-gold transition-all text-left font-medium border border-transparent hover:border-white/5">
    {icon}
    <span>{label}</span>
  </button>
);
