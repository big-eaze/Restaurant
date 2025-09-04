import React from "react";
import { Link } from "react-router-dom";

function PaymentSummary() {
  return (
    <div className="w-full md:w-80">
      {/* Cart Totals Box */}
      <div className="bg-[#f3f2f0] p-6 rounded-md shadow-sm">
        <h2 className="text-sm uppercase tracking-widest font-semibold mb-6">
          Cart Totals
        </h2>

        {/* Coupon Row */}
        <div className="border-b py-3 flex justify-between text-sm text-gray-600">
          <span className="cursor-pointer hover:underline">Add a coupon</span>
          <span className="text-lg">⌄</span>
        </div>

        {/* Subtotal Row */}
        <div className="border-b py-3 flex justify-between text-sm">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-medium">€10.99</span>
        </div>

        {/* Total Row */}
        <div className="py-3 flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>€10.99</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link to="/checkout">
        <button className="bg-[#A0552D] hover:bg-orange-800 text-white w-full mt-5 py-3 uppercase tracking-wide font-medium rounded-md transition">
          Proceed to Checkout
        </button>
      </Link>
    </div>

  );
}
export default PaymentSummary;