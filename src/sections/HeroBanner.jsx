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
      let ticking = false;

      const updateVideoProgress = () => {
        if (!video || !video.duration || !isMobile()) {
          ticking = false;
          return;
        }

        const scrollY = window.scrollY;
        const heroBounds = heroSection.getBoundingClientRect();
        const heroTop = heroBounds.top + scrollY;
        const heroHeight = heroBounds.height;
        const windowHeight = window.innerHeight;

        // Calculate when the hero section enters and leaves viewport
        const triggerPoint = windowHeight * 0.5; // Start when hero is 50% visible
        const scrollStart = Math.max(0, heroTop - triggerPoint);
        const scrollEnd = heroTop + heroHeight;
        
        const scrollDistance = scrollEnd - scrollStart;
        const currentScroll = Math.max(0, scrollY - scrollStart);
        
        // Calculate progress (0 to 1)
        let progress = currentScroll / scrollDistance;
        progress = Math.max(0, Math.min(1, progress));

        // Smooth interpolation - ease-out cubic for natural motion
        const easedProgress = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        // Linear interpolation between last and current progress for smoothness
        const smoothedProgress = lastProgressRef.current + (easedProgress - lastProgressRef.current) * 0.2;
        
        // Set video time
        const videoTime = smoothedProgress * video.duration;
        video.currentTime = videoTime;
        
        lastProgressRef.current = smoothedProgress;
        ticking = false;
      };

      const handleScroll = () => {
        if (ticking || !isMobile()) return;
        ticking = true;
        animationFrameRef.current = requestAnimationFrame(updateVideoProgress);
      };

      // Use passive listener for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Initial check on mount
      if (isMobile()) {
        handleScroll();
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    };

    // Wait for video metadata to load
    if (video.readyState >= 1) {
      return handleMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleMetadata);
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
        className="block lg:hidden absolute inset-0 w-full h-full object-cover z-10"
        muted
        playsInline
        preload="auto"
        onError={() => console.log('Video failed to load - using image fallback')}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />

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
