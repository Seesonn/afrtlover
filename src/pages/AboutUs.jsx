import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heart, Award, Users, Sparkles, Truck, Clock } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import AnnouncementBar from '../sections/AnnouncementBar';


const LeafIcon = () => (
  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6 2 3 8 3 12c0 5 4 9 9 9s9-4 9-9c0-4-2-7-5-9" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
  </svg>
);

const whyItems = [
  { icon: <LeafIcon />, title: 'Expert Florists', desc: 'Trained and passionate floral designers with years of hands-on experience.' },
  { icon: <Sparkles className="w-5 h-5 text-black" />, title: 'Full Customization', desc: 'Every arrangement tailored to your preferences, vision, and budget.' },
  { icon: <Heart className="w-5 h-5 text-black" strokeWidth={1.5} />, title: 'Always Fresh', desc: 'We guarantee the freshest flowers with extended vase life — always.' },
  { icon: <TruckIcon />, title: 'Same-Day Delivery', desc: 'Fast and reliable delivery so your flowers arrive at the perfect moment.' },
  { icon: <Award className="w-5 h-5 text-black" />, title: 'Competitive Pricing', desc: "Premium quality arrangements at prices that won't leave you surprised." },
  { icon: <ClockIcon />, title: '24/7 Support', desc: 'Our team is always here to assist — anytime you need us.' },
];

const values = [
  {
    icon: <Award className="w-8 h-8 text-white" strokeWidth={1.5} />,
    title: 'Premium Quality',
    desc: 'We source only the freshest flowers from trusted suppliers, ensuring every arrangement is stunning and long-lasting.'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />,
    title: 'Pure Artistry',
    desc: 'Each bouquet is a work of art — meticulously designed with attention to color, texture, and form by our talented florists.'
  },
  {
    icon: <Users className="w-8 h-8 text-white" strokeWidth={1.5} />,
    title: 'Customer First',
    desc: 'Your satisfaction is our priority. Exceptional service and heartfelt support make every experience truly memorable.'
  }
];

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero-banner.jpg"
            alt="About ArtLover - Floral Arrangements"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent" />
        </div>

        {/* Content */}
        <div
          className="relative z-10 h-full flex flex-col items-start justify-center max-w-7xl mx-auto px-6 md:px-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
            About <br />
            <span className="font-medium">ArtLover</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-md">
            Celebrating the art of floral design and the joy flowers bring to life's special moments.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div data-aos="fade-up">
              <img
                src="/images/hero/hero-banner.jpg"
                alt="Our Story - ArtLover Flowers"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <p className="text-xs tracking-widest text-black uppercase mb-3 font-semibold">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight">
                Crafted with <span className="font-medium">passion,</span> <br />delivered with love
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-base">
                ArtLover was founded with a simple vision: to bring the beauty of artfully crafted floral arrangements into every celebration and moment of appreciation.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-base">
                Every arrangement is carefully designed by our team of passionate florists who believe that flowers are more than just decorations—they are expressions of emotion, gratitude, and love.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                From intimate personal moments to grand celebrations, we create bespoke floral experiences that tell your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest text-black uppercase mb-3 font-semibold">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Our Core <span className="font-medium">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Award className="w-12 h-12 text-black mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-widest text-sm">
                Premium Quality
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We source only the freshest, highest-quality flowers from trusted suppliers to ensure every arrangement is stunning and long-lasting.
              </p>
            </div>

            {/* Craftsmanship */}
            <div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Sparkles className="w-12 h-12 text-black mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-widest text-sm">
                Pure Artistry
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each arrangement is a work of art, meticulously designed with attention to color, texture, and form by our talented florists.
              </p>
            </div>

            {/* Customer Care */}
            <div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Users className="w-12 h-12 text-black mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-widest text-sm">
                Customer First
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your satisfaction is our priority. We provide exceptional service and support to make your experience memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest text-black uppercase mb-3 font-semibold">
              The ArtLover Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Why Choose <span className="font-medium">Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4" data-aos="fade-up">
              <Heart className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Florists</h3>
                <p className="text-gray-600 text-sm">
                  Our team consists of trained and passionate floral designers with years of experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="50">
              <Sparkles className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Full Customization</h3>
                <p className="text-gray-600 text-sm">
                  Every arrangement can be customized to match your preferences and budget.
                </p>
              </div>
            </div>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="100">
              <Award className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Always Fresh</h3>
                <p className="text-gray-600 text-sm">
                  We guarantee the freshest flowers with extended vase life — always.
                </p>
              </div>
            </div>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="150">
              <Truck className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Same-Day Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Fast and reliable delivery so your flowers arrive at the perfect moment.
                </p>
              </div>
            </div>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
              <Users className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Premium quality arrangements at prices that won't leave you surprised.
                </p>
              </div>
            </div>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="250">
              <Clock className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">
                  Our team is always here to assist — anytime you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero-banner.jpg"
            alt="Shop Now"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
            Ready to Celebrate <br />
            <span className="font-medium">with Flowers?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our collections and find the perfect arrangement for your most special moments.
          </p>
          <button
            onClick={scrollToProducts}
            className="btn-primary bg-black text-white px-8 py-3.5 text-sm tracking-widest uppercase rounded-full hover:bg-gray-800 transition-all"
          >
            View Our Collections
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}