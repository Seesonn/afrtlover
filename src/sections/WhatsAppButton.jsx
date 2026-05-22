import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '9779815366153';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your flower collections.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-12 sm:w-14 h-12 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 whatsapp-pulse hover:shadow-xl"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7" fill="white" />
    </button>
  );
}
