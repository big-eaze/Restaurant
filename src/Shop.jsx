import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuPortal } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import Footer from "./components/Footer";
import NewsletterSec from "./components/NewsletterSec";
import Header from "./components/Header";

function Shop() {

  const [sortOrder, setSortOrder] = useState('Default sorting');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const products = [
    { name: 'Salmon with tomatoes', price: 20.99, originalPrice: 25.99, img: '/food-display/food-10.jpg' },
    { name: 'Paella with seafood', price: 3.50, originalPrice: 5.99, img: '/food-display/food-11.jpg' },
    { name: 'Salmon', price: 1.50, originalPrice: 1.50, img: '/food-display/food-12.jpg' },
    { name: 'Casserole', price: 4.99, originalPrice: 5.99, img: '/food-display/food-13.jpg' },
    { name: "pasta with beef", price: 5.43, originalPrice: 7.20, img: '/food-display/food-16.jpg' },
    { name: "Burger", price: 2.43, originalPrice: 6.20, img: '/food-display/food-1.jpg' }

  ];


  const handleSortChange = (e) => setSortOrder(e.target.value);
  return (
    <>
      <Header />
      <div className="w-full h-[700px] bg-cover bg-center" style={{ backgroundImage: "url('/food-display/food-5.jpg')" }}>
        <div className="bg-dark-overlay w-full h-full flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[30px] h-[4px] rounded-xl bg-orange-600"></div>
            <p className="text-white text-sm">ONLINE STORE</p>
          </div>
          <h1 className="font-cormorant font-bold text-6xl text-white">SHOP</h1>
          <p className="text-white text-center">Quaerat debitis, vel, sapiente dicta sequi <br />
            labore porro pariatur harum expedita.
          </p>
        </div>
      </div>
      <div className="w-full bg-[#F9F9EE] flex flex-col lg:flex-row gap-10 px-6 lg:px-12 py-20">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 flex flex-col gap-10">
          {/* Search */}
          <input
            className="shadow-lg p-3 bg-[#F9F9EE] outline-none rounded"
            type="text"
            placeholder="Search Products"
          />

          {/* Categories */}
          <div>
            <h2 className="text-lg font-cormorant font-semibold mb-4">CATEGORIES</h2>
            <ul className="space-y-2 text-[14px]">
              <li>All (8)</li>
              <li>Crustaceans (2)</li>
              <li>Farmed Fish (2)</li>
              <li>Saltwater Fish (4)</li>
            </ul>
          </div>

          {/* Filter by price */}
          <div>
            <h2 className="text-lg font-cormorant font-semibold mb-4">Filter by price</h2>
            <div className="flex flex-col">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                className="w-full mb-2 accent-[#A0552D]"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="w-full mb-2 accent-[#A0552D]"
              />
            </div>
            <p className="text-sm">Price range: {priceRange[0]} - {priceRange[1]}</p>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-lg font-cormorant font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["FISH", "CRABS", "CRUSTACEANS", "SALTWATER", "BURGER", "SOUP"].map((tag, i) => (
                <button
                  key={i}
                  className="border-2 border-[#A0552D] text-[#A0552D] text-[12px] px-3 py-1 rounded"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Shop Content */}
        <main className="w-full lg:w-3/4">
          <div className="flex flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="font-cormorant font-bold text-4xl">SHOP</h1>
              <p className="text-[12px] text-gray-500">Showing 1-6 of 8 results</p>
            </div>
            {/* Sorting */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-between min-w-[160px] p-2 shadow-lg text-sm outline-none">
                  Default sorting <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent
                  className="custom-scrollbar w-[var(--radix-dropdown-menu-trigger-width)] max-h-[150px] overflow-y-auto whitespace-nowrap bg-[#F9F9EE] shadow-lg mt-2 text-sm p-2 z-[9999]"
                >
                  <DropdownMenuItem className="w-full truncate p-2 cursor-pointer outline-none">Default Sorting</DropdownMenuItem>
                  <DropdownMenuItem className="w-full truncate p-2 cursor-pointer outline-none">Sort by popularity</DropdownMenuItem>
                  <DropdownMenuItem className="w-full truncate p-2 cursor-pointer outline-none">Sort by average rating</DropdownMenuItem>
                  <DropdownMenuItem className="w-full truncate p-2 cursor-pointer outline-none">Sort by latest</DropdownMenuItem>
                  <DropdownMenuItem className="w-full truncate p-2 cursor-pointer outline-none">Sort by price: low to high</DropdownMenuItem>
                  <DropdownMenuItem className="w-full truncate p-2 cursor-pointer outline-none">Sort by price: high to low</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="relative bg-[#C4A484] shadow-md flex flex-col gap-4 rounded overflow-hidden">
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 left-2 bg-[#A0522D] px-3 py-1 text-[12px] font-cormorant font-bold text-white rounded">
                    SALE!
                  </div>
                )}

                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[200px] object-cover"
                />

                <div className="px-3 flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold font-cormorant">{product.name}</h3>
                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <p className="text-xl font-bold font-cormorant">€{product.price.toFixed(2)}</p>
                      {product.originalPrice > product.price && (
                        <p className="text-sm text-gray-500 line-through">€{product.originalPrice}</p>
                      )}
                    </div>
                    <button className="bg-[#A0522D] hover:bg-[#C4A484] text-white p-3 transition">
                      <FaShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex gap-1 justify-center mt-8">
            <button className="py-3 px-4 bg-[#A0552D] text-white">1</button>
            <button className="py-3 px-4 hover:bg-[#A0552D] hover:text-white transition">2</button>
            <button className="py-3 px-4 hover:bg-[#A0552D] hover:text-white transition">→</button>
          </div>
        </main>
      </div>

      <NewsletterSec />
      <Footer />
    </>
  )
}

export default Shop;