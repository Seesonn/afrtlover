import { ThumbsUp, Video, Truck, Flower2 } from 'lucide-react';

const features = [
  {
    icon: ThumbsUp,
    title: "Best Customer Service",
    description: "We are available at any time from 8:00 - 18:00 to help you with any queries you may have on WhatsApp or Email."
  },
  {
    icon: Video,
    title: "Video for Your Approval",
    description: "Our florists will send a video of your finished arrangement by WhatsApp or email for your approval, before delivery."
  },
  {
    icon: Truck,
    title: "Flower Delivery",
    description: "Delivery services and cut-off times may vary. Please check our FAQ section for the latest information."
  },
  {
    icon: Flower2,
    title: "Fresh Flower Guarantee",
    description: "Our flowers are sourced from the finest farms. We deliver flowers closed bud so they are fresh for 7 days."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <feature.icon className="w-8 sm:w-10 h-8 sm:h-10 text-gray-800" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm sm:text-base font-medium mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-[12px] sm:text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
