import { useRemoveFromCart, useUpdateCartItemQuantity } from "@/Utils/hooks";
import { useCart } from "@/Utils/hooks";
import { ShoppingCart } from "lucide-react";
import React from "react";

function CartSummary() {

  const cart = useCart();
  const removeFromCart = useRemoveFromCart();
  const {increaseFromCart, decreaseFromCart} = useUpdateCartItemQuantity();



  return (
    <div className="bg-[#f3f2f0] lg:col-span-2 space-y-4">
      <div className="flex justify-between text-sm text-gray-600 p-5 border-b-2 font-semibold">
        <p>PRODUCT</p>
        <p>TOTAL</p>
      </div>

      {/* Cart Items */}
      {
        cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="rounded-md p-4 shadow-sm flex flex-col md:flex-row md:justify-between gap-6"
            >
              <div className="flex gap-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-24 object-cover rounded"
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-lg">{item.name}</h2>


                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="line-through">{item.oldPrice}</span>
                    <span className="text-black font-semibold">€{item.price.toFixed(2)}</span>
                  </div>

                  <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded w-fit mt-1">
                    SAVE {item.discount}
                  </span>

                  <p className="text-gray-500 text-sm mt-2 max-w-md">
                    {item.description}
                  </p>


                  <div className="flex items-center mt-3 gap-2">
                    <button onClick={() => decreaseFromCart(item.id)} className="border px-3 py-1 rounded hover:bg-gray-100">−</button>
                    <span className="px-2">{item.quantity}</span>
                    <button onClick={() => increaseFromCart(item.id)} className="border px-3 py-1 rounded hover:bg-gray-100">+</button>
                  </div>


                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs mt-2 flex items-center gap-1 hover:underline">
                    <span className="bg-red-500 text-white rounded-full px-1">✕</span>
                    Remove item
                  </button>
                </div>
              </div>
              <div className="text-right font-semibold text-lg md:min-w-[80px]">
                €{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          )))
          :
          (
            <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#A0552D]/10 mb-6">
                <ShoppingCart className="w-10 h-10 text-[#A0552D]" />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800">Your cart is empty</h2>
              <p className="text-gray-500 mt-2 max-w-sm">
                Looks like you haven’t added anything to your cart yet.
                Start exploring and find something you love!
              </p>

              <button
                onClick={() => window.location.href = '/shop'}
                className="mt-6 bg-[#A0552D] hover:bg-[#A0552D]/80 text-white px-6 py-3 rounded-lg shadow-md transition font-medium"
              >
                Browse Products
              </button>
            </div>
          )
      }
    </div>

  );
}

export default CartSummary;