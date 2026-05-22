import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock } from 'lucide-react';
import { blogs } from '../data/products';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-white font-['Poppins',sans-serif] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Blog Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const contentParagraphs = blog.content.split('\n\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      {/* Back Button - Top Left */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Featured Image */}
      <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <article className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Meta Information */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>{blog.date}</span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-12 h-1 bg-rose-400 mb-8" />

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          {contentParagraphs.map((paragraph, index) => {
            // Check if paragraph is a heading (all caps, short)
            const isHeading = paragraph.length < 60 && paragraph === paragraph.toUpperCase() && !paragraph.includes('•');
            
            // Check if paragraph contains bullet points
            const isBulletList = paragraph.includes('•');

            if (isHeading) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-medium text-gray-900 mt-8 mb-4"
                >
                  {paragraph}
                </h2>
              );
            }

            if (isBulletList) {
              const bullets = paragraph.split('\n').filter(line => line.includes('•'));
              return (
                <ul key={index} className="list-none space-y-3 mb-6 ml-0">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed flex gap-3">
                      <span className="text-rose-400 flex-shrink-0 mt-1">•</span>
                      <span>{bullet.replace('•', '').trim()}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            // Check if paragraph contains numbered list
            const isNumberedList = /^\d+\./.test(paragraph);
            if (isNumberedList) {
              const items = paragraph.split('\n').filter(line => /^\d+\./.test(line));
              return (
                <ol key={index} className="list-decimal list-inside space-y-3 mb-6">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed ml-4">
                      {item.replace(/^\d+\.\s*/, '')}
                    </li>
                  ))}
                </ol>
              );
            }

            return (
              <p
                key={index}
                className="text-gray-700 leading-relaxed mb-6 text-base"
              >
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Written by <span className="font-medium text-gray-900">ArtLover Team</span>
          </p>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 md:py-16 mt-8">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            Ready to bring beauty to your space?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our exquisite collection of fresh flowers and arrangements
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#products');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#products');
              }
            }}
            className="bg-black text-white px-8 py-3 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-gray-800 transition-all"
          >
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
