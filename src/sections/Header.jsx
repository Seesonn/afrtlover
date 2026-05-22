import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { navLinks } from '../data/products';

export default function Header() {
  const { cartCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          isScrolled ? 'header-shadow' : ''
        }`}
      >
        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left - Phone & Social */}
            <div className="hidden lg:flex items-center gap-4 text-sm text-gray-600">
              <a href="tel:+9779815366153" className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
                +977 9815366153
              </a>
            </div>

            {/* Center - Logo */}
            <a href="/" className="flex flex-col items-center">
              <h1 className="text-2xl md:text-3xl font-light tracking-[0.25em] text-black uppercase">
                ArtLover
              </h1>
              <span className="text-[10px] md:text-xs tracking-[0.3em] text-gray-500 uppercase mt-0.5">
                Craft by Swastika 
              </span>
            </a>

            {/* Right - Search & Cart */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 sm:w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 mobile-menu">
                    <input
                      type="text"
                      placeholder="Search flowers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-black"
                      autoFocus
                    />
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="py-3.5 text-sm tracking-wide text-gray-700 hover:text-black transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Slide from Right */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sliding Menu */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">
            {/* Menu Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              {/* Navigation Links */}
              <ul className="space-y-1 mb-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                {/* Contact Info */}
                <a
                  href="tel:+9779816347329"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mb-4"
                >
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-xs text-gray-500">Call us</p>
                    <p className="text-sm font-semibold text-gray-700">+977 9816347329</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
