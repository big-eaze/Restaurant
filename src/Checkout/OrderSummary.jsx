import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

function OrderSummary() {
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  return (
    <div className="w-full max-w-sm mx-auto h-fit bg-[#F3F2F0] rounded-md shadow-md p-4 font-sans text-gray-800">
      {/* Order Summary Title */}
      <h2 className="text-lg font-semibold mb-4">Order summary</h2>

      {/* Product Details */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div className="relative w-12 h-12 rounded overflow-hidden">
            <img
              src="/food-display/food-12.jpg"
              alt="Crabs"
              className="w-full h-full object-cover"
            />
            {/* Quantity Badge */}
            <span className="absolute -top-2 -left-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
          <div>
            <p className="font-medium">Crabs</p>
            <p className="text-sm text-gray-500">
              <span className="line-through text-gray-400 mr-1">€4.50</span>
              <span>€3.50</span>
            </p>
            <p className="text-xs text-gray-400">
              Consectetur adipisicing elit. Soluta, impedit, saepe.
            </p>
          </div>
        </div>
        <p className="font-medium">€7.00</p>
      </div>

      {/* Coupon Section */}
      <div className="border-t pt-4">
        <button
          onClick={() => setCouponOpen(!couponOpen)}
          className="w-full flex justify-between items-center text-sm font-medium mb-2"
        >
          Add a coupon
          <span className="transform transition-transform duration-300">
            {couponOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </button>

        {couponOpen && (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              placeholder="Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border border-gray-300 p-2 flex-grow rounded-l-md focus:outline-none"
            />
            <button className="bg-[#A0552D] text-white px-4 font-semibold rounded-r-md">
              APPLY
            </button>
          </div>
        )}
      </div>

      {/* Subtotal */}
      <div className="border-t mt-4 pt-4 text-sm flex justify-between">
        <span>Subtotal</span>
        <span>€7.00</span>
      </div>

      {/* Total */}
      <div className="mt-2 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>€7.00</span>
      </div>
    </div>
  );
}

export default OrderSummary;
