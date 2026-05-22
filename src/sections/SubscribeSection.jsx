import { useState } from 'react';
import { Gift, Mail } from 'lucide-react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto px-4 text-center" data-aos="fade-up">
        <div className="flex justify-center mb-3 sm:mb-4">
          <Gift className="w-8 sm:w-10 h-8 sm:h-10 text-gray-800" strokeWidth={1.5} />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3">
          Subscribe and get 10% off
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
          Sign up for exclusive offers and updates on new collections.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-full text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all btn-primary whitespace-nowrap ${
              isSubscribed
                ? 'bg-green-500 text-white'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isSubscribed ? 'Subscribed!' : 'Sign Up'}
          </button>
        </form>
      </div>
    </section>
  );
}
