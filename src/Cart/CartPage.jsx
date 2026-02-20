import React from "react";
import PaymentSummary from "./PaymentSummary";
import CartSummary from "./CartSummary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


function CartPage() {
  return (
    <div className="min-h-screen bg-[#060607]">
      <div className="w-full h-[80px] sm:h-[140px]  bg-black">
        <Header />
      </div>

      {/* Container */}
      <div className=" w-full max-w-6xl mx-auto sm:p-20 p-10 px-4">
        <h1 className="sm:text-4xl text-3xl font-roboto font-bold mb-8 text-white">CART</h1>

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
    </div>
  );
}


export default CartPage;