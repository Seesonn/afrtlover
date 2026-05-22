const footerLinks = {
  shop: {
    title: "Shop",
    links: ["Complete Range", "Birthday Flowers", "Anniversary", "Thank You", "Get Well Soon", "Romance"]
  },
  collections: {
    title: "Collections",
    links: ["Hatbox Collection", "Vase Collection", "Basket Flowers", "Luxury Arrangements", "Wedding Flowers"]
  },
  info: {
    title: "Info",
    links: ["About Us", "Contact Us", "FAQs", "Terms & Conditions", "Privacy Policy", "Flower Care"]
  },
  occasions: {
    title: "Occasions",
    links: ["Valentine's Day", "Mother's Day", "Father's Day", "Christmas", "New Year", "Graduation"]
  }
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {Object.values(footerLinks).map((section, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[11px] sm:text-xs text-gray-500 hover:text-black transition-colors hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-center">
          <p className="text-[11px] sm:text-xs text-gray-400">
            © 2026 Blooming Flowers. All Rights Reserved.
          </p>
          <p className="text-[10px] sm:text-[11px] text-gray-300 mt-1">
            Handcrafted with love for every occasion
          </p>
        </div>
      </div>
    </footer>
  );
}
