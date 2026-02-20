import { useRemoveFromCart, useUpdateCartItemQuantity } from "@/Utils/hooks";
import { useCart } from "@/Utils/hooks";
import { ShoppingCart, Trash2, Plus, Minus, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

function CartSummary() {
  const cart = useCart();
  const removeFromCart = useRemoveFromCart();
  const { increaseFromCart, decreaseFromCart } = useUpdateCartItemQuantity();
  const [removingItemId, setRemovingItemId] = useState(null);

  const handleRemove = (id) => {
    setRemovingItemId(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemovingItemId(null);
    }, 300);
  };

  return (
    <div className="bg-[#060607] border-y-2 border-y-[#C38E5B] rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center px-6 sm:px-8 py-6 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-[#C38E5B]" />
          </div>
          <div>
            <h3 className="text-[#F5F1EB] font-serif text-xl sm:text-2xl">Shopping Cart</h3>
            <p className="text-neutral-400 text-sm">
              {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>
        <p className="text-neutral-300 text-sm font-medium tracking-wider uppercase hidden sm:block">
          Total
        </p>
      </div>

      {/* Cart Items */}
      <div className="p-4 sm:p-6 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: removingItemId === item.id ? 0 : 1,
                  y: 0,
                  scale: removingItemId === item.id ? 0.95 : 1
                }}
                exit={{ opacity: 0, x: -100, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
                  {/* Product Info Section */}
                  <div className="flex gap-4 sm:gap-6 flex-1">
                    {/* Product Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-black/30 border border-white/5">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {item.discount && (
                        <div className="absolute -top-2 -right-2 bg-[#C38E5B] text-black text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-lg">
                          -{item.discount}
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="font-serif text-[#F5F1EB] text-lg sm:text-xl mb-2 truncate group-hover:text-[#C38E5B] transition-colors">
                        {item.name}
                      </h3>

                      {/* Pricing */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#C38E5B] font-bold text-xl font-serif">
                          €{item.price.toFixed(2)}
                        </span>
                        {item.oldPrice && (
                          <span className="text-neutral-500 text-sm line-through">
                            €{item.oldPrice}
                          </span>
                        )}
                      </div>

                      {/* Discount Badge */}
                      {item.discount && (
                        <div className="flex items-center gap-2 mb-3">
                          <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1.5 rounded-lg text-xs font-semibold">
                            <Tag className="w-3.5 h-3.5" />
                            Save {item.discount}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      {item.description && (
                        <p className="text-neutral-400 text-sm mb-4 line-clamp-2 hidden sm:block leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Quantity Controls & Remove Button */}
                      <div className="flex flex-wrap items-center gap-3 mt-auto">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => decreaseFromCart(item.id)}
                            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C38E5B] hover:text-black text-neutral-300 flex items-center justify-center transition-all border border-white/10 hover:border-[#C38E5B]"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>

                          <span className="text-[#F5F1EB] font-semibold min-w-[2.5rem] text-center text-base">
                            {item.quantity}
                          </span>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => increaseFromCart(item.id)}
                            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C38E5B] hover:text-black text-neutral-300 flex items-center justify-center transition-all border border-white/10 hover:border-[#C38E5B]"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>

                        {/* Remove Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleRemove(item.id)}
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-400/10 transition-all border border-transparent hover:border-red-400/20"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Remove</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10 lg:min-w-[120px]">
                    <span className="text-neutral-400 text-sm lg:hidden">Subtotal:</span>
                    <div className="text-right">
                      <p className="text-[#C38E5B] font-bold text-xl sm:text-2xl font-serif">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-neutral-500 text-xs mt-1">
                        €{item.price.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center py-16 sm:py-24 px-6"
            >
              <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#C38E5B]/10 border-2 border-dashed border-[#C38E5B]/30 mb-6">
                <ShoppingCart className="w-14 h-14 text-[#C38E5B]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F1EB] mb-4">
                Your Cart is Empty
              </h2>

              <p className="text-neutral-400 max-w-md mb-8 leading-relaxed text-base">
                Looks like you haven't added anything to your cart yet.
                Start exploring our menu and find something delicious!
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/menu'}
                className="bg-[#C38E5B] hover:bg-[#D4A574] text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#C38E5B]/20 flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Browse Menu
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Summary */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-white/10 px-6 sm:px-8 py-6 bg-white/5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-400 text-sm uppercase tracking-wider">
                Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Tax and shipping calculated at checkout
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#C38E5B] font-bold text-3xl font-serif">
                €{cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(195, 142, 91, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(195, 142, 91, 0.5);
        }
      `}</style>
    </div>
  );
}

export default CartSummary;