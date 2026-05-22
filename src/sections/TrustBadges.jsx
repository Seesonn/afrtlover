// import { useEffect } from 'react';
// import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// const reviews = [
//   {
//     name: "Niru Gurung ",
//     text: "Used Artlover lots of times, always delivered on time and exactly as displayed. Beautiful quality!",
//     time: new Date(Date.now() - 2 * 60 * 60 * 1000),
//     rating: 5
//   },
//   {
//     name: "Suman Ojha.",
//     text: "Everything was perfect! The bouquet was stunning and my wife loved it. Highly recommended!",
//     time: new Date(Date.now() - 5 * 60 * 60 * 1000),
//     rating: 5
//   },
//   {
//     name: "Joyti Yadhav.",
//     text: "I love Artlover! I am a long time client and I fully trust them with excellent products.",
//     time: new Date(Date.now() - 8 * 60 * 60 * 1000),
//     rating: 5
//   },
//   {
//     name: "David Magar.",
//     text: "Perfect flowers, presentation and service. Will definitely order again for all occasions!",
//     time: new Date(Date.now() - 12 * 60 * 60 * 1000),
//     rating: 5
//   }
// ];

// function timeAgo(date) {
//   const seconds = Math.floor((Date.now() - date) / 1000);
//   if (seconds < 60) return `${seconds} seconds ago`;
//   const minutes = Math.floor(seconds / 60);
//   if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
//   const hours = Math.floor(minutes / 60);
//   if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
//   const days = Math.floor(hours / 24);
//   if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;
//   const months = Math.floor(days / 30);
//   if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
//   const years = Math.floor(months / 12);
//   return `${years} year${years !== 1 ? 's' : ''} ago`;
// }

// export default function TrustBadges() {
//   const scrollLeft = () => {
//     const container = document.getElementById('reviews-scroll');
//     if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     const container = document.getElementById('reviews-scroll');
//     if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
//   };

//   return (
//     <section className="py-8 sm:py-10 bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Trustpilot Summary */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 mb-6 sm:mb-8">
//           <div className="text-center" data-aos="fade-up">
//             <h3 className="text-lg sm:text-xl font-medium mb-1">Excellent</h3>
//             <div className="flex items-center gap-0.5 mb-1 justify-center">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star key={star} className="w-4 sm:w-5 h-4 sm:h-5 fill-emerald-500 text-emerald-500" />
//               ))}
//             </div>
//             <p className="text-[11px] sm:text-xs text-gray-500">Based on <span className="underline">2,847 reviews</span></p>
//           </div>

//           {/* Review Carousel */}
//           <div className="relative flex-1 max-w-2xl w-full">
//             <button
//               onClick={scrollLeft}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 sm:w-8 h-7 sm:h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
//               aria-label="Previous review"
//             >
//               <ChevronLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
//             </button>

//             <div
//               id="reviews-scroll"
//               className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide px-8 sm:px-10 py-2"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {reviews.map((review, index) => (
//                 <div
//                   key={index}
//                   className="min-w-[220px] sm:min-w-[260px] bg-white border border-gray-100 rounded-lg p-3 sm:p-4 shadow-sm"
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                 >
//                   <div className="flex items-center gap-0.5 mb-1.5 sm:mb-2">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star key={star} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-emerald-500 text-emerald-500" />
//                     ))}
//                     <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 ml-0.5 sm:ml-1" />
//                     <span className="text-[9px] sm:text-[10px] text-gray-400">Verified</span>
//                   </div>
//                   <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-1.5 sm:mb-2">{review.text}</p>
//                   <p className="text-[9px] sm:text-[10px] text-gray-400">{review.name}, {timeAgo(review.time)}</p>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={scrollRight}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 sm:w-8 h-7 sm:h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
//               aria-label="Next review"
//             >
//               <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef } from 'react';
import { Star, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: "Niru Gurung",
    text: "Used Artlover lots of times, always delivered on time and exactly as displayed. Beautiful quality!",
    offset: 2 * 60 * 60 * 1000,
    rating: 5
  },
  {
    name: "Suman Ojha",
    text: "Everything was perfect! The bouquet was stunning and my wife loved it. Highly recommended!",
    offset: 5 * 60 * 60 * 1000,
    rating: 5
  },
  {
    name: "Joyti Yadhav",
    text: "I love Artlover! I am a long time client and I fully trust them with excellent products.",
    offset: 8 * 60 * 60 * 1000,
    rating: 5
  },
  {
    name: "David Magar",
    text: "Perfect flowers, presentation and service. Will definitely order again for all occasions!",
    offset: 12 * 60 * 60 * 1000,
    rating: 5
  }
];

const loopedReviews = [...reviews, ...reviews, ...reviews];

function timeAgo(offsetMs) {
  const sec = Math.floor(offsetMs / 1000);
  const min = Math.floor(sec / 60);
  const hr  = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  const mo  = Math.floor(day / 30);
  const yr  = Math.floor(mo / 12);
  if (sec < 60)  return `${sec} second${sec !== 1 ? 's' : ''} ago`;
  if (min < 60)  return `${min} minute${min !== 1 ? 's' : ''} ago`;
  if (hr  < 24)  return `${hr} hour${hr !== 1 ? 's' : ''} ago`;
  if (day < 30)  return `${day} day${day !== 1 ? 's' : ''} ago`;
  if (mo  < 12)  return `${mo} month${mo !== 1 ? 's' : ''} ago`;
  return `${yr} year${yr !== 1 ? 's' : ''} ago`;
}

export default function TrustBadges() {
  const scrollRef      = useRef(null);
  const animFrameRef   = useRef(null);
  const isPausedRef    = useRef(false);
  const isDraggingRef  = useRef(false);
  const dragStartXRef  = useRef(0);
  const dragScrollRef  = useRef(0);
  const resumeTimerRef = useRef(null);
  const timeLabelsRef  = useRef([]);

  const SPEED = 0.6;

  // Update all time labels without touching the DOM structure
  const updateTimes = () => {
    timeLabelsRef.current.forEach((el, i) => {
      if (el) el.textContent = timeAgo(loopedReviews[i].offset);
    });
  };

  const resumeAfter = (ms) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, ms);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start at the middle copy so backward drag works too
    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;

    // Initial time render
    updateTimes();

    // Re-render times every 30 seconds
    const timeInterval = setInterval(updateTimes, 30_000);

    // Auto-scroll loop
    const tick = () => {
      if (!isPausedRef.current && el) {
        el.scrollLeft += SPEED;
        const oneSet = el.scrollWidth / 3;
        if (el.scrollLeft >= oneSet * 2) el.scrollLeft -= oneSet;
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      clearInterval(timeInterval);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Hover
  const handleMouseEnter = () => { isPausedRef.current = true; };
  const handleMouseLeave = () => { if (!isDraggingRef.current) isPausedRef.current = false; };

  // Mouse drag
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    isPausedRef.current   = true;
    dragStartXRef.current = e.pageX;
    dragScrollRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };
  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    scrollRef.current.scrollLeft = dragScrollRef.current - (e.pageX - dragStartXRef.current);
  };
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    scrollRef.current.style.cursor = 'grab';
    resumeAfter(1500);
  };

  // Touch drag
  const handleTouchStart = (e) => {
    isPausedRef.current   = true;
    dragStartXRef.current = e.touches[0].pageX;
    dragScrollRef.current = scrollRef.current.scrollLeft;
  };
  const handleTouchMove = (e) => {
    scrollRef.current.scrollLeft = dragScrollRef.current - (e.touches[0].pageX - dragStartXRef.current);
  };
  const handleTouchEnd = () => resumeAfter(1500);

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 mb-6 sm:mb-8">

          {/* Rating summary */}
          <div className="text-center flex-shrink-0">
            <h3 className="text-lg sm:text-xl font-medium mb-1">Excellent</h3>
            <div className="flex items-center gap-0.5 mb-1 justify-center">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-4 sm:w-5 h-4 sm:h-5 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500">
              Based on <span className="underline">2,847 reviews</span>
            </p>
          </div>

          {/* Carousel */}
          <div className="relative flex-1 max-w-2xl w-full min-w-0">
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto px-2 py-2 select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {loopedReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm flex-shrink-0"
                  style={{ width: 'auto', maxWidth: '220px', minWidth: '160px' }}
                >
                  {/* Stars + verified */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                    ))}
                    <CheckCircle className="w-3 h-3 text-gray-400 ml-1" />
                    <span className="text-[10px] text-gray-400">Verified</span>
                  </div>

                  {/* Review text */}
                  <p className="text-[11px] text-gray-600 leading-relaxed mb-2">
                    {review.text}
                  </p>

                  {/* Name + dynamic time */}
                  <p className="text-[10px] text-gray-400">
                    <span className="font-medium text-gray-500">{review.name}</span>
                    {', '}
                    <span ref={el => { timeLabelsRef.current[index] = el; }} />
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}