import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CreditCard, Building2, Wallet, FileText, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('bank');
  const [addNote, setAddNote] = useState(false);
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const options = [
    {
      value: 'bank',
      label: 'Direct Bank Transfer',
      icon: Building2,
      description:
        'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
    },
    {
      value: 'check',
      label: 'Check Payments',
      icon: FileText,
      description: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode"
    },
    {
      value: 'cod',
      label: 'Cash on Delivery',
      icon: Wallet,
      description: "Pay with cash upon delivery"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >
      {/* Payment Options Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-[#C38E5B]" />
          </div>
          <h3 className="text-xl font-serif text-[#F5F1EB]">Payment Method</h3>
        </div>

        <div className="space-y-3">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <motion.label
                key={option.value}
                whileHover={{ scale: 1.01 }}
                className={`block cursor-pointer border rounded-xl transition-all ${selectedPayment === option.value
                  ? "border-[#C38E5B] bg-[#C38E5B]/5"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
              >
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Custom Radio */}
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPayment === option.value
                          ? "border-[#C38E5B]"
                          : "border-neutral-500"
                          }`}
                      >
                        {selectedPayment === option.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2.5 h-2.5 bg-[#C38E5B] rounded-full"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-5 h-5 ${selectedPayment === option.value ? 'text-[#C38E5B]' : 'text-neutral-400'}`} />
                        <span className={`font-medium ${selectedPayment === option.value ? 'text-[#F5F1EB]' : 'text-neutral-300'}`}>
                          {option.label}
                        </span>
                      </div>

                      <AnimatePresence>
                        {selectedPayment === option.value && option.description && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-neutral-400 leading-relaxed"
                          >
                            {option.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <input
                  type="radio"
                  name="payment"
                  value={option.value}
                  checked={selectedPayment === option.value}
                  onChange={() => setSelectedPayment(option.value)}
                  className="hidden"
                />
              </motion.label>
            );
          })}
        </div>
      </div>

      {/* Add Note Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
        <label className="cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${addNote ? "border-[#C38E5B] bg-[#C38E5B]/10" : "border-neutral-500"
                }`}
            >
              {addNote && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2.5 h-2.5 bg-[#C38E5B] rounded-sm"
                />
              )}
            </div>

            <input
              type="checkbox"
              checked={addNote}
              onChange={() => setAddNote(!addNote)}
              className="hidden"
            />

            <div className="flex items-center gap-2">
              <FileText className={`w-4 h-4 ${addNote ? 'text-[#C38E5B]' : 'text-neutral-400'}`} />
              <span className="text-sm text-[#F5F1EB]">Add a note to your order</span>
            </div>
          </div>

          <AnimatePresence>
            {addNote && (
              <motion.textarea
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 160 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 resize-none focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                placeholder="Special instructions or notes about your order..."
              />
            )}
          </AnimatePresence>
        </label>
      </div>

      {/* Footer */}
      <div className="space-y-6">
        <div className="h-px bg-white/10" />

        {/* Terms */}
        <p className="text-xs text-center text-neutral-500 leading-relaxed">
          By proceeding with your purchase you agree to our{' '}
          <span className="text-[#C38E5B] hover:text-[#D4A574] cursor-pointer">Terms and Conditions</span>
          {' '}and{' '}
          <span className="text-[#C38E5B] hover:text-[#D4A574] cursor-pointer">Privacy Policy</span>
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Return to Cart */}
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#F5F1EB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Return to Cart</span>
          </motion.button>

          {/* Place Order Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-[#C38E5B] hover:bg-[#D4A574] text-black font-semibold px-10 py-4 rounded-xl uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#C38E5B]/20 flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Place Order
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentOptions;