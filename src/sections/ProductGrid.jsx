// import { useState } from 'react';
// import { ShoppingCart, Check } from 'lucide-react';
// import { products, categories } from '../data/products';
// import { useCart } from '../context/CartContext';

// export default function ProductGrid() {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [addedIds, setAddedIds] = useState([]);
//   const { addToCart } = useCart();

//   const filteredProducts = activeCategory === 'all'
//     ? products
//     : products.filter(p => p.category === activeCategory);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setAddedIds(prev => [...prev, product.id]);
//     setTimeout(() => {
//       setAddedIds(prev => prev.filter(id => id !== product.id));
//     }, 1500);
//   };

//   return (
//     <section id="products" className="py-12 sm:py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Section Header */}
//         <div className="text-center mb-8 sm:mb-10" data-aos="fade-up">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-2 sm:mb-3">
//             Our Collection
//           </h2>
//           <p className="text-gray-500 text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto">
//             Handcrafted bouquets for every occasion, delivered with care and love.
//           </p>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10" data-aos="fade-up" data-aos-delay="100">
//           {categories.map((cat) => (
//             <button
//               key={cat.value}
//               onClick={() => setActiveCategory(cat.value)}
//               className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
//                 activeCategory === cat.value
//                   ? 'bg-black text-white shadow-md'
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//           {filteredProducts.map((product, index) => (
//             <div
//               key={product.id}
//               className="product-card group bg-white rounded-lg overflow-hidden border border-gray-100"
//               data-aos="fade-up"
//               data-aos-delay={index * 50}
//             >
//               {/* Product Image */}
//               <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover image-zoom"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="p-2.5 sm:p-4 text-center">
//                 <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 truncate">
//                   {product.name}
//                 </h3>
//                 <p className="text-[10px] sm:text-xs text-gray-500 mb-1">from</p>
//                 <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
//                   Rs.{product.price.toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className={`w-full py-2 sm:py-2.5 px-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5 ${
//                     addedIds.includes(product.id)
//                       ? 'bg-green-600 text-white'
//                       : 'bg-black text-white hover:bg-gray-800 btn-primary'
//                   }`}
//                 >
//                   {addedIds.includes(product.id) ? (
//                     <>
//                       <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                       Added
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                       <span className="hidden sm:inline">Add to Cart</span>
//                       <span className="sm:hidden">Add</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12" data-aos="fade-up">
//           <button className="bg-black text-white px-10 py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-gray-800 transition-all btn-primary">
//             Complete Range
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { ShoppingCart, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const ITEMS_PER_PAGE = 12;

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedIds, setAddedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
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
              onClick={() => handleCategoryChange(cat.value)}
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
          {paginatedProducts.map((product, index) => (
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
                  Rs. {product.price.toFixed(2)}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-12" data-aos="fade-up">

            {/* Prev */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-200 rounded-full text-gray-500 hover:border-black hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, i) => (
              page === '...' ? (
                <span key={`dots-${i}`} className="w-8 h-8 flex items-center justify-center text-gray-400 text-sm">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'border border-gray-200 text-gray-600 hover:border-black hover:text-black'
                  }`}
                >
                  {page}
                </button>
              )
            ))}

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-200 rounded-full text-gray-500 hover:border-black hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <p className="text-center text-xs text-gray-400 mt-3">
            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
          </p>
        )}

      </div>
    </section>
  );
}