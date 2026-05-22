import { useState } from 'react';
import { X, Truck, Clock, Award, Video } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white text-[10px] sm:text-xs md:text-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5">
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 overflow-x-auto pb-1 scrollbar-hide">
          <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" />
            90 mins & 3 hrs delivery
          </span>
          <span className="hidden sm:flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Award className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" />
            Outstanding Service
          </span>
          <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
            <Truck className="w-3.5 h-3.5 flex-shrink-0" />
            Delivered to all Counties
          </span>
          <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
            <Video className="w-3.5 h-3.5 flex-shrink-0" />
            Video Approval on all orders
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Close announcement"
        >
          <X className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
        </button>
      </div>
    </div>
  );
}
