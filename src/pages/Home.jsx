import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AnnouncementBar from '../sections/AnnouncementBar';
import Header from '../sections/Header';
import HeroBanner from '../sections/HeroBanner';
import TrustBadges from '../sections/TrustBadges';
import ProductGrid from '../sections/ProductGrid';
import FeaturesSection from '../sections/FeaturesSection';
import FAQsSection from '../sections/FAQsSection';
import BlogSection from '../sections/BlogSection';
// import SubscribeSection from '../sections/SubscribeSection';
import ServiceBar from '../sections/ServiceBar';
import Footer from '../sections/Footer';
import CartDrawer from '../sections/CartDrawer';
import WhatsAppButton from '../sections/WhatsAppButton';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroBanner />
        <TrustBadges />
        <ProductGrid />
        <FeaturesSection />
        <FAQsSection />
        <BlogSection />
        {/* <SubscribeSection /> */}
        <ServiceBar />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
}
