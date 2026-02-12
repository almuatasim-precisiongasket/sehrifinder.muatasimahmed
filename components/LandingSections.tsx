
import React from 'react';
import { Heart, Users, Map, ShieldCheck, Moon, Coffee, Utensils, Building } from 'lucide-react';
import { IslamicPattern } from './Pattern';

export const LandingSections = () => {
  return (
    <>
      {/* SECTION 1: WHY WE EXIST (Storytelling) */}
      <section className="relative py-20 bg-midnight text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        
        {/* Subtle Background Pattern */}
        <IslamicPattern opacity={0.03} variant="arabesque" className="text-white" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center p-3 bg-emerald/20 rounded-full border border-emerald/30 mb-2">
              <Moon size={24} className="text-gold-bright fill-gold-bright/20" />
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              No One Breaks Their Fast <br/>
              <span className="text-gold-bright italic">Alone.</span>
            </h2>
            
            <div className="space-y-6 text-silver/80 text-lg leading-relaxed font-sans">
              <p>
                Every Ramadan, thousands find themselves away from home—students in hostels, 
                night shift workers, patients in hospitals, and travelers in transit. 
                The silence of a strange city at 3 AM can feel lonely.
              </p>
              <p>
                <span className="text-white font-semibold">Sehri Finder</span> bridges that gap. 
                We map verified distribution points offering free and affordable Sehri, 
                turning strangers into neighbors and meals into memories.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <StatCard number="100+" label="Verified Spots" />
              <StatCard number="4" label="Major Cities" />
              <StatCard number="10k+" label="People Served" />
              <StatCard number="100%" label="Community Driven" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT YOU'LL FIND (Categories) */}
      <section className="relative py-24 bg-gradient-to-b from-midnight to-navy text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              What You'll Find
            </h3>
            <p className="text-silver/60 max-w-xl mx-auto">
              From historic masjids to volunteer-run kitchens, discover spaces that welcome you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <CategoryCard 
              icon={<Building size={32} />} 
              title="Masjids" 
              desc="Traditional community hubs offering spiritual warmth and shared meals."
            />
            <CategoryCard 
              icon={<Heart size={32} />} 
              title="Free Sehri" 
              desc="Volunteer-driven distribution for the needy and travelers. No questions asked."
            />
            <CategoryCard 
              icon={<Users size={32} />} 
              title="Women & Families" 
              desc="Designated safe spaces with separate sections for women and families."
            />
            <CategoryCard 
              icon={<ShieldCheck size={32} />} 
              title="Hospital Support" 
              desc="Special distributions near major hospitals for patients and attendants."
            />
            <CategoryCard 
              icon={<Utensils size={32} />} 
              title="Affordable Dining" 
              desc="Restaurants and eateries open at 3 AM with budget-friendly Sehri menus."
            />
            <CategoryCard 
              icon={<Coffee size={32} />} 
              title="Student Friendly" 
              desc="Spots near hostels and campuses ensuring students don't miss their meal."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST BAR */}
      <section className="bg-emerald/10 border-y border-emerald/20 py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald text-gold-bright rounded-full shadow-[0_0_15px_rgba(27,77,62,0.5)]">
                 <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Manually Verified</h4>
                <p className="text-silver/60 text-sm">Every spot checked by volunteers.</p>
              </div>
           </div>
           
           <div className="h-px w-24 bg-white/10 md:h-12 md:w-px hidden md:block"></div>

           <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald text-gold-bright rounded-full shadow-[0_0_15px_rgba(27,77,62,0.5)]">
                 <Map size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Accurate Locations</h4>
                <p className="text-silver/60 text-sm">Precise coordinates for easy navigation.</p>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

// Sub-components for Cleaner Code

const StatCard = ({ number, label }: { number: string, label: string }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-gold/30 transition-colors">
    <div className="font-serif text-3xl font-bold text-gold-bright mb-1">{number}</div>
    <div className="text-xs uppercase tracking-wider text-silver/60 font-medium">{label}</div>
  </div>
);

const CategoryCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
    <div className="mb-4 text-gold-bright group-hover:scale-110 transition-transform duration-300 origin-left">
      {icon}
    </div>
    <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">{title}</h4>
    <p className="text-silver/60 text-sm leading-relaxed">{desc}</p>
  </div>
);
