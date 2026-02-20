import { calculateSubTotal, useCart } from '@/Utils/hooks';
import { ChevronDown, ChevronUp, Tag, ShoppingBag, AlertCircle, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function OrderSummary() {
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  const cart = useCart();
  const subTotal = calculateSubTotal(cart);

  // Mock coupon validation
  const validCoupons = {
    "SAVE10": { discount: 10, type: "percentage" },
    "WELCOME15": { discount: 15, type: "percentage" },
  };

  const handleApplyCoupon = () => {
    const coupon = validCoupons[couponCode.toUpperCase()];
    if (coupon) {
      setAppliedCoupon({ code: couponCode.toUpperCase(), ...coupon });
      setCouponError("");
      setCouponCode("");
    } else {
      setCouponError("Invalid coupon code");
      setTimeout(() => setCouponError(""), 3000);
    }
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.type === "percentage") {
      return (subTotal * appliedCoupon.discount) / 100;
    }
    return appliedCoupon.discount;
  };

  const discount = calculateDiscount();
  const total = subTotal - discount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-[#060607] border border-white/10 rounded-3xl overflow-hidden shadow-2xl sticky top-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-6 sm:px-8 py-6 border-b border-white/10 bg-white/5">
        <div className="w-10 h-10 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 text-[#C38E5B]" />
        </div>
        <h3 className="text-xl font-serif text-[#F5F1EB]">Order Summary</h3>
      </div>

      {/* Cart Items */}
      <div className="p-6 sm:p-8 space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {cart.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-4"
            >
              {/* Image with Quantity Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/30 border border-white/10">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#C38E5B] text-black text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                  {item.quantity}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[#F5F1EB] font-medium text-sm mb-1 truncate">
                  {item.name}
                </h4>
                <div className="flex items-center gap-2 mb-1">
                  {item.oldPrice && (
                    <span className="text-neutral-500 text-xs line-through">
                      €{item.oldPrice}
                    </span>
                  )}
                  <span className="text-[#C38E5B] text-sm font-semibold">
                    €{item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-neutral-500 text-xs line-clamp-1">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Item Total */}
              <div className="text-right flex-shrink-0">
                <p className="text-[#F5F1EB] font-semibold">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Coupon Section */}
      <div className="px-6 sm:px-8 pb-6 border-b border-white/10">
        <motion.button
          onClick={() => setCouponOpen(!couponOpen)}
          whileHover={{ scale: 1.01 }}
          className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all"
        >
          <div className="flex items-center gap-3">
            <Tag className="w-4 h-4 text-[#C38E5B]" />
            <span className="text-[#F5F1EB] text-sm font-medium">
              {appliedCoupon ? "Coupon Applied" : "Add Coupon Code"}
            </span>
          </div>
          {couponOpen ? (
            <ChevronUp className="w-4 h-4 text-neutral-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-400" />
          )}
        </motion.button>

        <AnimatePresence>
          {couponOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="ENTER CODE"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[#F5F1EB] text-sm placeholder:text-neutral-500 uppercase tracking-wider focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && handleApplyCoupon()}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleApplyCoupon}
                    disabled={!couponCode}
                    className="bg-[#C38E5B] hover:bg-[#D4A574] text-black font-semibold px-5 py-2.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Apply
                  </motion.button>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {couponError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{couponError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Applied Badge */}
                <AnimatePresence>
                  {appliedCoupon && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm font-semibold">
                          {appliedCoupon.code}
                        </span>
                      </div>
                      <button
                        onClick={() => setAppliedCoupon(null)}
                        className="text-green-400 hover:text-green-300 text-xs underline"
                      >
                        Remove
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hints */}
                {!appliedCoupon && (
                  <div className="text-xs text-neutral-500 bg-white/5 rounded-lg p-3">
                    <p className="text-neutral-400 font-medium mb-1">Try these:</p>
                    <p><span className="text-[#C38E5B] font-mono">SAVE10</span> - 10% off</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pricing */}
      <div className="px-6 sm:px-8 py-6 space-y-3">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-neutral-400">Subtotal</span>
          <span className="text-[#F5F1EB] font-medium">€{subTotal.toFixed(2)}</span>
        </div>

        {/* Discount */}
        <AnimatePresence>
          {discount > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-between text-sm overflow-hidden"
            >
              <span className="text-green-400 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                Discount
              </span>
              <span className="text-green-400 font-semibold">-€{discount.toFixed(2)}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Total */}
        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <span className="text-[#F5F1EB] font-semibold uppercase tracking-wider">Total</span>
          <motion.p
            key={total}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-[#C38E5B] font-bold text-2xl font-serif"
          >
            €{total.toFixed(2)}
          </motion.p>
        </div>
      </div>

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
    </motion.div>
  );
}

export default OrderSummary;