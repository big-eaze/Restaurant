import { calculateSubTotal, useCart } from "@/Utils/hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Tag, CreditCard, CheckCircle, AlertCircle, Lock } from "lucide-react";

function PaymentSummary() {
  const cart = useCart();
  const subTotal = calculateSubTotal(cart);

  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  // Mock coupon validation
  const validCoupons = {
    "SAVE10": { discount: 10, type: "percentage" },
    "SAVE20": { discount: 20, type: "percentage" },
    "FLAT5": { discount: 5, type: "fixed" }
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

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
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
  const shipping = 0; // Free shipping
  const tax = total * 0.1; // 10% tax
  const finalTotal = total + tax + shipping;

  return (
    <div className="w-full lg:w-[420px] space-y-6 sticky top-6">
      {/* Order Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#060607] border-y-2 border-y-[#C38E5B] rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 sm:px-8 py-6 border-b border-white/10 bg-white/5">
          <div className="w-12 h-12 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-[#C38E5B]" />
          </div>
          <h2 className="text-[#F5F1EB] font-serif text-xl sm:text-2xl">
            Order Summary
          </h2>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Coupon Section */}
          <div>
            <motion.button
              onClick={() => setShowCoupon(!showCoupon)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
                  <Tag className="w-4 h-4 text-[#C38E5B]" />
                </div>
                <span className="text-[#F5F1EB] text-sm font-medium">
                  {appliedCoupon ? "Coupon Applied" : "Have a Coupon Code?"}
                </span>
              </div>
              {showCoupon ? (
                <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-[#C38E5B] transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-[#C38E5B] transition-colors" />
              )}
            </motion.button>

            <AnimatePresence>
              {showCoupon && (
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
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all uppercase tracking-wider"
                        onKeyPress={(e) => e.key === 'Enter' && handleApplyCoupon()}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleApplyCoupon}
                        disabled={!couponCode}
                        className="bg-[#C38E5B] hover:bg-[#D4A574] text-black font-semibold px-6 py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      >
                        Apply
                      </motion.button>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {couponError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{couponError}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Applied Coupon Badge */}
                    <AnimatePresence>
                      {appliedCoupon && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-green-400 text-sm font-semibold tracking-wider">
                              {appliedCoupon.code}
                            </span>
                          </div>
                          <button
                            onClick={handleRemoveCoupon}
                            className="text-green-400 hover:text-green-300 text-xs font-medium underline"
                          >
                            Remove
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Coupon Hints */}
                    {!appliedCoupon && (
                      <div className="text-xs text-neutral-500 bg-white/5 rounded-lg p-3 space-y-1">
                        <p className="font-medium text-neutral-400">Try these codes:</p>
                        <p><span className="text-[#C38E5B] font-mono font-semibold">SAVE10</span> - 10% off</p>
                        <p><span className="text-[#C38E5B] font-mono font-semibold">SAVE20</span> - 20% off</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-4 border-t border-white/10 pt-6">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-neutral-400 text-sm">Subtotal</span>
              <span className="text-[#F5F1EB] font-medium">€{subTotal.toFixed(2)}</span>
            </div>

            {/* Discount */}
            <AnimatePresence>
              {discount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex justify-between items-center overflow-hidden"
                >
                  <span className="text-green-400 flex items-center gap-2 text-sm">
                    <Tag className="w-4 h-4" />
                    Discount
                  </span>
                  <span className="text-green-400 font-semibold">-€{discount.toFixed(2)}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Shipping */}
            <div className="flex justify-between items-center">
              <span className="text-neutral-400 text-sm">Shipping</span>
              <span className="text-green-400 font-semibold text-sm">Free</span>
            </div>

            {/* Tax */}
            <div className="flex justify-between items-center">
              <span className="text-neutral-400 text-sm">Tax (10%)</span>
              <span className="text-[#F5F1EB] font-medium">€{tax.toFixed(2)}</span>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#F5F1EB] font-semibold text-lg uppercase tracking-wider">
                Total
              </span>
              <div className="text-right">
                <motion.p
                  key={finalTotal}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-[#C38E5B] font-bold text-3xl font-serif"
                >
                  €{finalTotal.toFixed(2)}
                </motion.p>
                {discount > 0 && (
                  <p className="text-neutral-500 text-sm line-through mt-1">
                    €{(subTotal + tax + shipping).toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Savings Banner */}
          <AnimatePresence>
            {discount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 text-center"
              >
                <p className="text-green-400 text-sm font-semibold">
                  🎉 You're saving €{discount.toFixed(2)}!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Checkout Button */}
      <Link to="/checkout">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#C38E5B] hover:bg-[#D4A574] text-black font-semibold w-full py-5 rounded-2xl uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#C38E5B]/20 flex items-center justify-center gap-3"
        >
          <Lock className="w-5 h-5" />
          Secure Checkout
        </motion.button>
      </Link>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-6 text-neutral-500 text-xs"
      >
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>Free Delivery</span>
        </div>
      </motion.div>
    </div>
  );
}

export default PaymentSummary;