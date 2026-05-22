import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedIds, setAddedIds] = useState([]);
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-2 sm:mb-3">
            Our Collection
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto">
            Handcrafted bouquets for every occasion, delivered with care and love.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card group bg-white rounded-lg overflow-hidden border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-2.5 sm:p-4 text-center">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-1">from</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-2 sm:py-2.5 px-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    addedIds.includes(product.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-black text-white hover:bg-gray-800 btn-primary'
                  }`}
                >
                  {addedIds.includes(product.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="bg-black text-white px-10 py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-gray-800 transition-all btn-primary">
            Complete Range
          </button>
        </div>
      </div>
    </section>
  );
}
