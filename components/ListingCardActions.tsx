
import React from 'react';
import { Share2, Flag, Phone, Navigation } from 'lucide-react';
import { SehriSpot } from '../types';
import { APP_CONFIG } from '../config';

interface ListingCardActionsProps {
  data: SehriSpot;
}

/**
 * Displays the action buttons: Share, Report, and Call/Directions.
 * Uses APP_CONFIG for URL construction.
 */
export const ListingCardActions: React.FC<ListingCardActionsProps> = ({ data }) => {
  
  // Helper for Report Link (WhatsApp)
  const handleReportClick = () => {
    const message = APP_CONFIG.MESSAGES.REPORT_TEMPLATE(data.name, data.area);
    // '_blank' opens the link in a new tab so users don't leave the app.
    // encodeURIComponent makes sure special characters (like spaces) don't break the URL.
    window.open(`${APP_CONFIG.WHATSAPP_BASE_URL}/${APP_CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Helper for Sharing (WhatsApp)
  const handleShareClick = () => {
    const message = APP_CONFIG.MESSAGES.SHARE_TEMPLATE(data.name, data.area, data.timing);
    window.open(`${APP_CONFIG.WHATSAPP_BASE_URL}/?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Helper for Maps Link
  const handleDirectionsClick = () => {
    window.open(`${APP_CONFIG.MAPS_BASE_URL}${encodeURIComponent(data.address + ", " + APP_CONFIG.DEFAULT_CITY)}`, '_blank');
  };

  return (
    <div className="flex items-center gap-3 relative z-10 pt-1">
      
      {/* Share Button */}
      <button 
        onClick={handleShareClick}
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-600 hover:bg-gold hover:text-white border border-gray-100 transition-all duration-200 shadow-sm group"
        title="Share via WhatsApp"
      >
        <Share2 size={18} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Report Button */}
      <button 
        onClick={handleReportClick}
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-600 border border-gray-100 transition-all duration-200 shadow-sm group"
        title="Report Issue"
      >
        <Flag size={18} className="group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Primary Action Button (Call or Directions) */}
      <div className="flex-1">
        {data.phones.length > 0 ? (
           <a 
             href={`tel:${data.phones[0]}`}
             className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-200 text-sm font-bold shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.98]"
           >
             <Phone size={18} />
             <span>Call Now</span>
           </a>
        ) : (
          <button 
             onClick={handleDirectionsClick}
             className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-200 text-sm font-bold shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.98]"
           >
             <Navigation size={18} />
             <span>Get Directions</span>
           </button>
        )}
      </div>
    </div>
  );
};