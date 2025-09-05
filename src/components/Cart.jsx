import React, { useContext } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuContext } from "@/Utils/MenuContext";
import { Link } from "react-router-dom";

function Cart() {
  const { openCart, setOpenCart } = useContext(MenuContext);

  const items = [
    { name: "pasta", image: "/food-display/food-6.jpg", quantity: 1, price: 4.5 },
    { name: "burger & chips", image: "/food-display/food-2.jpg", quantity: 1, price: 2.45 }
  ];

  return (
    <AnimatePresence mode="wait">
      {openCart && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed right-0 top-10 w-full sm:w-[70%] md:w-[50%] lg:w-[30%] max-w-[400px] bg-white shadow-lg z-50 p-6 flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenCart(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
          >
            <X size={24} />
          </button>

          {/* Items */}
          <div className="flex flex-col gap-4 mt-10 overflow-y-auto flex-grow">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b pb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[70px] h-[70px] object-cover rounded"
                />
                <div className="flex flex-col">
                  <p className="font-bold text-sm uppercase">{item.name}</p>
                  <p className="text-gray-600 text-sm">
                    {item.quantity} × €{item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center py-4 border-t mt-4 text-sm">
            <p className="font-semibold">SUBTOTAL:</p>
            <p className="font-bold text-lg">€12.45</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/cart"
              onClick={() => setOpenCart(false)}
              className="bg-[#A0552D] hover:bg-orange-800 text-white px-7 py-3 rounded w-full sm:w-auto text-center"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              onClick={() => setOpenCart(false)}
              className="bg-[#A0552D] hover:bg-orange-800 text-white px-7 py-3 rounded w-full sm:w-auto text-center"
            >
              Checkout
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Cart;
