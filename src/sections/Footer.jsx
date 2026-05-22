// const footerLinks = {
//   shop: {
//     title: "Shop",
//     links: ["Complete Range", "Birthday Flowers", "Anniversary", "Thank You", "Get Well Soon", "Romance"]
//   },
//   collections: {
//     title: "Collections",
//     links: ["Hatbox Collection", "Vase Collection", "Basket Flowers", "Luxury Arrangements", "Wedding Flowers"]
//   },
//   info: {
//     title: "Info",
//     links: ["About Us", "Contact Us", "FAQs", "Terms & Conditions", "Privacy Policy", "Flower Care"]
//   },
//   occasions: {
//     title: "Occasions",
//     links: ["Valentine's Day", "Mother's Day", "Father's Day", "Christmas", "New Year", "Graduation"]
//   }
// };

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//           {Object.values(footerLinks).map((section, index) => (
//             <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
//               <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
//                 {section.title}
//               </h4>
//               <ul className="space-y-1.5 sm:space-y-2.5">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <a
//                       href="#"
//                       className="text-[11px] sm:text-xs text-gray-500 hover:text-black transition-colors hover:underline"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom */}
//         <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-center">
//           <p className="text-[11px] sm:text-xs text-gray-400">
//             © 2026 ArtLover. All Rights Reserved.
//           </p>
//           <p className="text-[10px] sm:text-[11px] text-gray-300 mt-1">
//             Handcrafted with love for every occasion
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { useState } from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">

        {/* Top Grid: Links + Contact Form */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">

          {/* Footer Links */}
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

          {/* Contact Form */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
              />
              <textarea
                placeholder="Your message..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
              />
              <button
                onClick={handleSubmit}
                className={`w-full py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-300 ${
                  sent
                    ? 'bg-green-600 text-white'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {sent ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send className="w-3 h-3" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-[11px] sm:text-xs text-gray-400">
              © 2026 ArtLover. All Rights Reserved.
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-300 mt-0.5">
              Handcrafted with love for every occasion
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white text-gray-500 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-500 hover:text-white text-gray-500 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}