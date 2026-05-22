import { useState } from "react";
import { X, Truck, Clock, Award, Video, Sparkles } from "lucide-react";

const items = [
  { icon: Clock,    text: "90 mins & 3 hrs delivery" },
  { icon: Award,    text: "Outstanding Service" },
  { icon: Truck,    text: "Delivered to all Counties" },
  { icon: Video,    text: "Video Approval on all orders" },
  { icon: Sparkles, text: "Premium hand-tied bouquets" },
];

const REPEATS = 6;
const marqueeItems = Array.from({ length: REPEATS }, () => items).flat();

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="relative overflow-hidden bg-[#0a0a0a] border-b border-white/[0.07]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="marquee"
        aria-label="Site announcements"
      >
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        {/* Scrolling track */}
        <div className="py-[9px] pr-10 overflow-hidden flex items-center">
          <div
            className="flex w-max"
            style={{
              animation: "marquee 38s linear infinite",
              animationPlayState: paused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            {marqueeItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-[7px] px-7 whitespace-nowrap
                             text-[11.5px] font-medium tracking-wide text-white/80
                             hover:text-white transition-colors duration-200
                             relative after:content-['·'] after:absolute after:-right-0.5
                             after:text-white/20 after:text-lg after:leading-none"
                >
                  <Icon size={12} strokeWidth={2} className="flex-shrink-0 opacity-70" />
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close announcement bar"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                     w-[22px] h-[22px] flex items-center justify-center
                     rounded-full border border-white/10 bg-white/[0.07]
                     text-white/60 hover:text-white hover:bg-white/[0.18]
                     hover:scale-110 transition-all duration-200"
        >
          <X size={11} strokeWidth={2.5} />
        </button>
      </div>
    </>
  );
}