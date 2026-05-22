import { useEffect } from 'react';

export default function HeroBanner() {
  useEffect(() => {
    // AOS initialization handled in App
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-banner.jpg"
          alt="Beautiful peony rose collection"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
      </div>

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
