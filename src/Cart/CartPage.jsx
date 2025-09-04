import React from "react";
import PaymentSummary from "./PaymentSummary";
import CartSummary from "./CartSummary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function CartPage() {
  return (
    <>
      <div className="w-full h-[80px] sm:h-[120px] fixed z-50 bg-[#A0552D]">
        <Header />
      </div>

      {/* Container */}
      <div className=" w-full max-w-6xl mx-auto sm:p-20 p-8">
        <h1 className="text-5xl font-cormorant font-bold mb-8">CART</h1>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section: Cart Items */}
          <div className="flex-1">
            <CartSummary />
          </div>

          {/* Right Section: Payment Summary */}
          <div className="w-full lg:w-80">
            <PaymentSummary />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


export default CartPage;