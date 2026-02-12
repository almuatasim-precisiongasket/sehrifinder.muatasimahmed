
import React from 'react';
import { MapPin, Navigation, Building2, Clock, Users, UserCircle, Compass } from 'lucide-react';
import { SehriSpot } from '../types';

/**
 * Displays the main content of the card: Location, Timing, Audience tags, and Notes.
 * Adapted to handle Bangalore-specific fields (Zone, Contact Person).
 */
export const ListingCardDetails: React.FC<SehriSpot> = ({
  area, distance, venueType, timing, targetAudience, specialNotes, zone, contactPerson
}) => {
  return (
    <>
      {/* Location & Venue Type */}
      <div className="flex flex-col gap-1 mb-5">
         <div className="flex items-start justify-between">
           <div className="flex items-center text-gray-500 gap-1.5 overflow-hidden">
            <MapPin size={15} className="text-gold shrink-0" />
            <span className="text-sm font-semibold text-gray-600 tracking-tight truncate">{area}</span>
          </div>
          {/* Zone Badge for Bangalore */}
          {zone && (
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100 shrink-0">
              <Compass size={10} className="fill-blue-700/20" />
              <span className="text-[9px] font-bold uppercase tracking-wider">{zone} Zone</span>
            </div>
          )}
         </div>

         {/* Distance Indicator */}
         <div className="flex items-center text-xs text-stone-400 gap-1.5 pl-0.5">
            <Navigation size={12} className="text-stone-300" />
            <span>{distance} away</span>
         </div>
        
        <div className="flex items-center text-gray-400 gap-1.5 pl-0.5 mt-1">
          <Building2 size={14} className="shrink-0" />
          <span className="text-xs font-medium uppercase tracking-wide">{venueType}</span>
        </div>
      </div>

      {/* Timing Box */}
      <div className="bg-[#faf8f3]/80 backdrop-blur-sm rounded-xl p-4 flex items-start gap-4 border border-[#efe9dc] mb-5 relative overflow-hidden">
        <div className="w-10 h-10 rounded-full bg-white border border-gold/20 flex items-center justify-center shrink-0 shadow-sm text-primary mt-0.5">
            <Clock size={18} className="stroke-[2]" />
        </div>
        <div className="flex flex-col relative z-10">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">Distribution Time</span>
          <span className="text-sm font-bold text-primary-dark leading-tight">{timing}</span>
        </div>
      </div>
      
      {/* Contact Person (Common in Bangalore Data) */}
      {contactPerson && (
        <div className="mb-4 flex items-center gap-2 bg-white/50 p-2 rounded-lg border border-stone-100">
          <UserCircle size={14} className="text-gold-bright" />
          <span className="text-xs text-gray-600 font-medium">Contact: <span className="text-primary-dark font-bold">{contactPerson}</span></span>
        </div>
      )}

      {/* Target Audience Tags */}
      {targetAudience && targetAudience.length > 0 && (
        <div className="mb-5">
           <div className="flex items-center gap-1.5 mb-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
             <Users size={12} />
             <span>Target Audience</span>
           </div>
           <div className="flex flex-wrap gap-2">
             {targetAudience.map((aud, idx) => (
               <span key={idx} className="bg-stone-100 text-stone-600 text-[10px] font-medium px-2 py-1 rounded-md border border-stone-200">
                 {aud}
               </span>
             ))}
           </div>
        </div>
      )}

      {/* Notes */}
      {specialNotes && (
        <div className="mb-5 bg-stone-50/50 rounded-lg p-3 border border-stone-100">
           <p className="text-xs text-stone-600 leading-relaxed flex items-start gap-1.5">
             <span className="bg-[#FFD700] text-black font-bold uppercase tracking-wider px-1.5 py-0.5 rounded text-[10px] shrink-0 mt-0.5">Note:</span>
             <span>{specialNotes}</span>
           </p>
        </div>
      )}
    </>
  );
};
