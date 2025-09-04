import React from "react";

function CartSummary() {
  return (
    <div className="bg-[#f3f2f0] lg:col-span-2 space-y-4">
      <div className="flex justify-between text-sm text-gray-600 p-5 border-b-2 font-semibold">
        <p>PRODUCT</p>
        <p>TOTAL</p>
      </div>

      {/* Cart Items */}
      {[
        { name: "Boiled crayfish", oldPrice: "€7.50", price: "€5.50", img: "/food-display/food-7.jpg", discount: "€2.00" },
        { name: "Crabs", oldPrice: "€4.50", price: "€3.50", img: "/food-display/food-5.jpg", discount: "€1.00" },
        { name: "Fish burger", oldPrice: "€2.99", price: "€1.99", img: "/food-display/food-4.jpg", discount: "€1.00" }
      ].map((item, index) => (
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
                <span className="text-black font-semibold">{item.price}</span>
              </div>

              <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded w-fit mt-1">
                SAVE {item.discount}
              </span>

              <p className="text-gray-500 text-sm mt-2 max-w-md">
                Consectetur adipiscing elit. Soluta, impedit, saepe.
              </p>


              <div className="flex items-center mt-3 gap-2">
                <button className="border px-3 py-1 rounded hover:bg-gray-100">−</button>
                <span className="px-2">1</span>
                <button className="border px-3 py-1 rounded hover:bg-gray-100">+</button>
              </div>


              <button className="text-red-500 text-xs mt-2 flex items-center gap-1 hover:underline">
                <span className="bg-red-500 text-white rounded-full px-1">✕</span>
                Remove item
              </button>
            </div>
          </div>
          <div className="text-right font-semibold text-lg md:min-w-[80px]">
            {item.price}
          </div>
        </div>
      ))}
    </div>

  );
}

export default CartSummary;