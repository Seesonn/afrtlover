import { X, Plus, Minus, ShoppingCart, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '9779815366153';

export default function CartDrawer() {
  const {
    cartItems,
    cartTotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = 'Hello! I would like to order the following flowers:\n\n';
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total: Rs.${cartTotal.toFixed(2)}*\n\n`;
    message += 'Please confirm my order. Thank you!';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
            <h2 className="text-base sm:text-lg font-medium">Your Cart</h2>
            <span className="bg-gray-100 text-gray-600 text-[10px] sm:text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-12 sm:w-16 h-12 sm:h-16 text-gray-200 mb-3 sm:mb-4" />
              <p className="text-gray-500 text-xs sm:text-sm">Your cart is empty</p>
              <p className="text-gray-400 text-[11px] sm:text-xs mt-1">Add some beautiful flowers!</p>
              <button
                onClick={closeCart}
                className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white rounded-full text-xs sm:text-sm hover:bg-gray-800 transition-all"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2.5 sm:gap-4 bg-gray-50 rounded-lg p-2.5 sm:p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 sm:w-20 h-20 sm:h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium truncate">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                        </button>
                        <span className="text-xs sm:text-sm font-medium w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 sm:p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-[10px] sm:text-xs text-gray-400 hover:text-red-500 transition-colors underline mt-2"
              >
                Clear all items
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-3 sm:p-5 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm text-gray-600">Subtotal</span>
              <span className="text-base sm:text-lg font-semibold">Rs.{cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400">
              Shipping calculated at checkout
            </p>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-2.5 sm:py-3.5 bg-green-500 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-green-600 transition-all flex items-center justify-center gap-1.5 sm:gap-2 btn-primary"
            >
              <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              Order via WhatsApp
            </button>
            <button
              onClick={closeCart}
              className="w-full py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
