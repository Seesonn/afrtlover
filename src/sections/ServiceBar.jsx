import { HandHeart, Clock, Truck, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: HandHeart,
    title: "Hand-Tied & Beautifully Wrapped",
    subtitle: "Bouquets"
  },
  {
    icon: Clock,
    title: "For Same-Day Deliveries",
    subtitle: "Place Order By 4pm That Day"
  },
  {
    icon: Truck,
    title: "Same / Next-Day Delivery",
    subtitle: "Available Throughout"
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    subtitle: "& Superb Customer Service"
  }
];

export default function ServiceBar() {
  return (
    <section className="py-6 sm:py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-2 sm:gap-3"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-medium leading-tight">{service.title}</p>
                <p className="text-[9px] sm:text-[10px] text-gray-500 leading-snug">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
