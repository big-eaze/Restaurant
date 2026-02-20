import React, { useContext } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuContext } from "@/Utils/MenuContext";
import { Link } from "react-router-dom";
import { useCart, calculateSubTotal } from "@/Utils/hooks";

function Cart() {
  const { openCart, setOpenCart } = useContext(MenuContext);
  const cart = useCart();
  const subTotal = calculateSubTotal(cart);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {openCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenCart(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence mode="wait">
        {openCart && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-[#060607] border-l border-white/10 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#C38E5B]" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#F5F1EB]">Your Order</h2>
                  <p className="text-xs text-neutral-400">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
                </div>
              </div>
              
              <motion.button
                onClick={() => setOpenCart(false)}
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#F5F1EB] hover:bg-white/10 transition-all duration-200"
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-neutral-500" />
                  </div>
                  <p className="text-neutral-400 text-sm">Your cart is empty</p>
                  <p className="text-neutral-500 text-xs mt-1">Add items to get started</p>
                </div>
              ) : (
                <AnimatePresence>
                  {cart.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="relative flex-shrink-0">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#F5F1EB] text-sm mb-1 truncate">
                            {item.name}
                          </h3>
                          <p className="text-[#C38E5B] font-bold text-base mb-2">
                            €{item.price.toFixed(2)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#F5F1EB] hover:bg-white/10 transition-all"
                            >
                              <Minus size={14} />
                            </motion.button>
                            
                            <span className="text-[#F5F1EB] font-medium text-sm min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#F5F1EB] hover:bg-white/10 transition-all"
                            >
                              <Plus size={14} />
                            </motion.button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={14} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-white/10 px-6 py-5 bg-[#0E0F14]/50 backdrop-blur-sm">
                {/* Subtotal */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-neutral-400 text-sm uppercase tracking-wider">Subtotal</span>
                  <span className="text-[#F5F1EB] font-bold text-2xl font-serif">€{subTotal.toFixed(2)}</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Link to="/checkout" onClick={() => setOpenCart(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#C38E5B] text-black font-semibold py-4 rounded-xl hover:bg-[#D4A574] transition-all duration-300 shadow-lg hover:shadow-[#C38E5B]/30"
                    >
                      Proceed to Checkout
                    </motion.button>
                  </Link>

                  <Link to="/cart" onClick={() => setOpenCart(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 text-[#F5F1EB] font-semibold py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      View Full Cart
                    </motion.button>
                  </Link>
                </div>

                {/* Shipping Notice */}
                <p className="text-center text-xs text-neutral-500 mt-4">
                  Free delivery on orders over €50
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Cart;