import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/products';

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-10"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-0 border border-gray-100 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-4 sm:py-5 px-4 sm:px-5 text-left group hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs sm:text-sm md:text-base font-medium pr-4 group-hover:text-gray-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 sm:w-5 h-4 sm:h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-4 sm:pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed px-4 sm:px-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
