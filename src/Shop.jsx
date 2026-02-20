import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuPortal } from "@radix-ui/react-dropdown-menu";
import { CheckCircle, ChevronDown, ShoppingCart, Search, Filter, Tag, DollarSign, Package, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import Footer from "./components/Footer";
import NewsletterSec from "./components/NewsletterSec";
import Header from "./components/Header";
import { shopData } from "../data/shopFood.js";
import { useAddToCart } from "./Utils/hooks";

function Shop({ openCart, setOpenCart }) {

  const [sortOrder, setSortOrder] = useState('Default sorting');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState(null);
  const [addedProduct, setAddedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const addToCart = useAddToCart();

  const handleAddToCart = (id) => {
    addToCart(id);
    setAddedProduct(id);
    console.log(`Added product ID: ${id} to cart`);
    setTimeout(() => setAddedProduct(null), 2000);
  };

  // Filter logic
  let filteredData = shopData.filter(product => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory;
  });

  filteredData = filteredData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredData = filteredData.filter(product =>
    product.initialPrice >= priceRange[0] && product.initialPrice <= priceRange[1]
  );

  if (selectedTag) {
    filteredData = filteredData.filter(product =>
      product.tags?.includes(selectedTag)
    );
  }

  // Sorting
  if (sortOrder === "Sort by price: low to high") {
    filteredData = [...filteredData].sort((a, b) => a.initialPrice - b.initialPrice);
  }
  if (sortOrder === "Sort by price: high to low") {
    filteredData = [...filteredData].sort((a, b) => b.initialPrice - a.initialPrice);
  }

  // Pagination
  const rowsPerPage = 6;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const categories = [
    { name: "All", count: 8 },
    { name: "Crustaceans", count: 2 },
    { name: "Farmed Fish", count: 2 },
    { name: "Saltwater Fish", count: 4 },
  ];

  const tags = ["FISH", "CRABS", "CRUSTACEANS", "SALTWATER", "BURGER", "SOUP"];

  return (
    <>
      <Header openCart={openCart} setOpenCart={setOpenCart} />

      <div className="w-full min-h-screen bg-[#060607]">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/food-display/food-5.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#060607]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm tracking-widest uppercase mb-8">
              <ShoppingCart className="w-4 h-4 text-[#C38E5B]" />
              <span className="text-[#F5F1EB]/90">Online Store</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              Shop
            </h1>

            <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover our premium selection of authentic ingredients and specialty items
            </p>
          </motion.div>
        </section>

        {/* Shop Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4 space-y-8"
            >
              {/* Search */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-5 h-5 text-[#C38E5B]" />
                  <h3 className="text-white font-semibold">Search Products</h3>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-[#C38E5B]" />
                  <h3 className="text-white font-semibold">Categories</h3>
                </div>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer transition-all ${selectedCategory === cat.name
                          ? "bg-[#C38E5B]/20 text-[#C38E5B] border border-[#C38E5B]/30"
                          : "text-neutral-300 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs opacity-60">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filter by price */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-[#C38E5B]" />
                  <h3 className="text-white font-semibold">Filter by Price</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-neutral-400 text-xs mb-2 block">Min: €{priceRange[0]}</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C38E5B]"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-xs mb-2 block">Max: €{priceRange[1]}</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C38E5B]"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 text-sm">
                    <span className="text-[#C38E5B] font-medium">€{priceRange[0]}</span>
                    <span className="text-neutral-500">—</span>
                    <span className="text-[#C38E5B] font-medium">€{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-[#C38E5B]" />
                  <h3 className="text-white font-semibold">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${selectedTag === tag
                          ? "bg-[#C38E5B] text-black border-[#C38E5B]"
                          : "bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:border-[#C38E5B]/30"
                        }`}
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Main Shop Content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-3/4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-4xl font-serif text-white mb-2">Our Products</h2>
                  <p className="text-sm text-neutral-400">
                    Showing {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, filteredData.length)} of {filteredData.length} results
                  </p>
                </div>

                {/* Sorting Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between gap-3 min-w-[200px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20"
                    >
                      <span className="text-sm">{sortOrder}</span>
                      <ChevronDown className="w-4 h-4 text-neutral-400" />
                    </motion.button>
                  </DropdownMenuTrigger>

                  <DropdownMenuPortal>
                    <DropdownMenuContent
                      className="w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0E0F14] border border-white/10 rounded-xl p-2 shadow-2xl mt-2 z-[9999]"
                      sideOffset={8}
                    >
                      {[
                        "Default sorting",
                        "Sort by popularity",
                        "Sort by average rating",
                        "Sort by latest",
                        "Sort by price: low to high",
                        "Sort by price: high to low"
                      ].map((option) => (
                        <DropdownMenuItem
                          key={option}
                          onClick={() => setSortOrder(option)}
                          className="text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg px-4 py-2.5 cursor-pointer transition-colors outline-none text-sm"
                        >
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenuPortal>
                </DropdownMenu>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentRows.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300"
                  >
                    {/* Sale Badge */}
                    {product.initialPrice > product.price && (
                      <div className="absolute top-3 left-3 z-20 bg-[#C38E5B] px-3 py-1 text-xs font-bold text-black rounded-lg shadow-lg">
                        SALE
                      </div>
                    )}

                    {/* Added to Cart Notification */}
                    <AnimatePresence mode="wait">
                      {addedProduct === product.id && (
                        <motion.div
                          initial={{ x: "100%", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: "100%", opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute top-3 right-3 z-20 flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg"
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                          <span className="text-white text-xs font-medium">Added!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Product Info */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#C38E5B] transition-colors">
                        {product.name}
                      </h3>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < 4 ? "fill-[#C38E5B] text-[#C38E5B]" : "text-neutral-600"
                              }`}
                          />
                        ))}
                      </div>

                      {/* Price & Add to Cart */}
                      <div className="flex items-end justify-between mt-auto">
                        <div>
                          <p className="text-2xl font-bold text-[#C38E5B] font-serif">
                            €{product.price.toFixed(2)}
                          </p>
                          {product.initialPrice > product.price && (
                            <p className="text-sm text-neutral-500 line-through">
                              €{product.initialPrice.toFixed(2)}
                            </p>
                          )}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCart(product.id)}
                          className="bg-[#C38E5B] hover:bg-[#D4A574] text-black p-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#C38E5B]/20"
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {currentRows.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <Package className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                  <h3 className="text-xl text-neutral-400 mb-2">No products found</h3>
                  <p className="text-neutral-500 text-sm">Try adjusting your filters</p>
                </motion.div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <motion.button
                      key={page}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl font-medium transition-all ${currentPage === page
                          ? "bg-[#C38E5B] text-black shadow-lg shadow-[#C38E5B]/20"
                          : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 hover:border-[#C38E5B]/30"
                        }`}
                    >
                      {page}
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.main>
          </div>
        </section>

        <NewsletterSec />
        <Footer />
      </div>
    </>
  );
}

export default Shop;