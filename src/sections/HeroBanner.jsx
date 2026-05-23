import { useEffect, useRef } from 'react';

export default function HeroBanner() {
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    // AOS initialization handled in App
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // Check if mobile screen (less than lg breakpoint: 1024px)
    const isMobile = () => window.innerWidth < 1024;

    // Wait for video to be loadable
    const handleMetadata = () => {
      const updateVideoProgress = () => {
        if (!video || !video.duration || !isMobile()) {
          return;
        }

        const scrollY = window.scrollY;
        const heroBounds = heroSection.getBoundingClientRect();
        const heroTop = heroBounds.top + scrollY;
        const heroHeight = heroBounds.height;
        const windowHeight = window.innerHeight;

        // Calculate when the hero section enters and leaves viewport
        const triggerPoint = windowHeight * 0.3;
        const scrollStart = Math.max(0, heroTop - triggerPoint);
        const scrollEnd = heroTop + heroHeight;
        
        const scrollDistance = scrollEnd - scrollStart;
        const currentScroll = Math.max(0, scrollY - scrollStart);
        
        // Calculate progress (0 to 1) - direct without interpolation for true smoothness
        let progress = scrollDistance > 0 ? currentScroll / scrollDistance : 0;
        progress = Math.max(0, Math.min(1, progress));
        
        // Set video time directly for instant, smooth scrubbing
        const videoTime = progress * video.duration;
        if (Math.abs(video.currentTime - videoTime) > 0.05) {
          video.currentTime = videoTime;
        }
      };

      // Update on every scroll event without debouncing
      const handleScroll = () => {
        updateVideoProgress();
      };

      // Use passive listener for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Initial check on mount
      updateVideoProgress();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Wait for video metadata to load
    if (video.readyState >= 1) {
      return handleMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleMetadata, { once: true });
      return () => video.removeEventListener('loadedmetadata', handleMetadata);
    }
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden bg-gray-900">
      {/* Desktop Background Image (hidden on mobile) */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <img
          src="/images/hero/hero-banner.jpg"
          alt="Beautiful peony rose collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Video Background (hidden on desktop) */}
      <video
        ref={videoRef}
        className="block lg:hidden absolute inset-0 w-full h-full object-cover z-0"
        muted
        playsInline
        preload="auto"
        onError={() => console.log('Video failed to load - using image fallback')}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* White Gradient Overlay on Mobile (for video) */}
      <div className="block lg:hidden absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/20 z-[5]" />

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col items-start justify-center max-w-7xl mx-auto px-6 md:px-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
          Timeless Peony Rose<br />
          <span className="font-medium">Collection</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md">
          The art of premium floral gifting. Handcrafted bouquets delivered with love.
        </p>
        <button
          onClick={scrollToProducts}
          className="btn-primary bg-black text-white px-8 py-3.5 text-sm tracking-widest uppercase rounded-full hover:bg-gray-800 transition-all"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
