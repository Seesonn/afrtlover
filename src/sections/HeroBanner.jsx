import { useEffect, useRef } from 'react';

export default function HeroBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    // AOS initialization handled in App
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if mobile screen
    const isMobile = () => window.innerWidth < 1024;

    // Only play video on mobile
    if (isMobile()) {
      video.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
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
        onError={() => console.log('Video failed to load')}
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
