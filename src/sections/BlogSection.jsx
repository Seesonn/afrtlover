import { Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data/products';

export default function BlogSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-10"
          data-aos="fade-up"
        >
          From Our Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-400 mb-2.5 sm:mb-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-gray-400">
                    <span>{blog.date}</span>
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Clock className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
                <button className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs font-medium flex items-center gap-1 group/btn">
                  Read More
                  <ArrowRight className="w-2.5 sm:w-3 h-2.5 sm:h-3 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
