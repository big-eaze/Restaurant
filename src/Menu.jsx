import React, { useEffect, useRef, useState } from "react";
import { ShoppingBasket, ArrowLeft, ArrowRight, ChevronRight, Sparkles, Clock, Award } from "lucide-react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { menuData } from "../data/menuData.js";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function MenuSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [specialMenu, setSpecialMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState("appetizer");

  const categories = [
    { label: "Appetizers", value: "appetizer", icon: "🥗" },
    { label: "Main Courses", value: "main course", icon: "🍽️" },
    { label: "Desserts", value: "dessert", icon: "🍰" },
    { label: "Beverages", value: "beverage", icon: "🍹" },
  ];

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 1);
  };

  useEffect(() => {
    setFilteredMenu(
      menuData.filter((meal) => meal.category === activeCategory)
    );
    setSpecialMenu(
      menuData.filter((meal) => meal.category === "special")
    );
  }, [activeCategory]);

  useEffect(() => {
    updateScrollButtons();

    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => updateScrollButtons();
    const handleResize = () => updateScrollButtons();

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function scroll(direction) {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector("div");
      const cardWidth = card ? card.offsetWidth + 24 : 300;

      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });

      setTimeout(updateScrollButtons, 300);
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#060607]">
      <Header />

      {/* Hero Section - Enhanced */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/food-display/food-15.jpg')",
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#060607]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm tracking-widest uppercase mb-8">
              <Sparkles className="w-4 h-4 text-[#C38E5B]" />
              <span className="text-[#F5F1EB]/90">Seasonal Selection</span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              Our Menu
            </h1>

            {/* Subheading */}
            <p className="text-neutral-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
              Explore our curated collection of seasonally inspired dishes
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-neutral-400">
                <Award className="w-5 h-5 text-[#C38E5B]" />
                <span>Chef's Specials</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-5 h-5 text-[#C38E5B]" />
                <span>Fresh Daily</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ChevronRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </section>

      {/* Category Pills - Modern Design */}
      <section className="sticky top-[72px] sm:top-[80px] z-40 bg-[#060607]/95 backdrop-blur-xl border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full
                  font-medium text-sm sm:text-base
                  transition-all duration-300
                  ${activeCategory === cat.value
                    ? "bg-[#C38E5B] text-black shadow-lg shadow-[#C38E5B]/30"
                    : "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </span>

                {activeCategory === cat.value && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-[#C38E5B]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid - Improved Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#060607]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
              {categories.find(c => c.value === activeCategory)?.label}
            </h2>
            <div className="w-20 h-1 bg-[#C38E5B] mx-auto rounded-full" />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="wait">
              {filteredMenu.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C38E5B]/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#C38E5B]/10"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Quick Add Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ShoppingBasket className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-serif text-white group-hover:text-[#C38E5B] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-[#C38E5B]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Order Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 w-full py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-[#C38E5B] hover:border-[#C38E5B] hover:text-black transition-all duration-300"
                    >
                      Add to Order
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredMenu.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-neutral-400 text-lg">No items found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Reservation CTA - Enhanced */}
      <section className="relative h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/reservation4.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#060607]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            This Evening
            <br />
            <span className="text-[#C38E5B]">Will Be Great!</span>
          </h2>

          <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Book your table now and enjoy an unforgettable dining experience with us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reservation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#C38E5B] text-black font-semibold rounded-full hover:bg-[#D4A574] transition-all duration-300 shadow-lg shadow-[#C38E5B]/30"
              >
                Book A Table
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Special Proposal Section - Redesigned */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#060607] to-[#0E0F14]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 text-[#C38E5B] text-xs tracking-widest uppercase mb-6">
              Limited Time
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
              Special Proposals
            </h2>

            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Exclusive seasonal offerings crafted with precision and care
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {specialMenu.map((meal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[420px] snap-center"
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C38E5B]/30 transition-all duration-500 h-full">
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-[#C38E5B] text-black text-xs font-bold shadow-lg">
                      {Math.round((1 - meal.price / meal.initialPrice) * 100)}% OFF
                    </div>

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        src={meal.img}
                        alt={meal.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#C38E5B] transition-colors duration-300">
                        {meal.name}
                      </h3>

                      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        {meal.description}
                      </p>

                      {/* Price Section */}
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-3xl font-bold text-[#C38E5B]">
                            ${meal.price}
                          </div>
                          <div className="text-sm text-neutral-500 line-through">
                            ${meal.initialPrice}
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2.5 rounded-full bg-[#C38E5B] text-black text-sm font-semibold hover:bg-[#D4A574] transition-colors duration-300"
                        >
                          Order Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-10 px-4">
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 bg-[#C38E5B] text-black font-semibold rounded-full hover:bg-[#D4A574] transition-all duration-300 shadow-lg shadow-[#C38E5B]/20"
                >
                  View All Meals
                </motion.button>
              </Link>

              <div className="flex items-center gap-4">
                <span className="hidden sm:block text-neutral-400 text-sm font-medium">
                  Scroll
                </span>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={`
                      w-10 h-10 rounded-full
                      flex items-center justify-center
                      transition-all duration-300
                      ${canScrollLeft
                        ? "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#C38E5B]/30"
                        : "bg-white/[0.02] border border-white/5 text-neutral-600 cursor-not-allowed"
                      }
                    `}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`
                      w-10 h-10 rounded-full
                      flex items-center justify-center
                      transition-all duration-300
                      ${canScrollRight
                        ? "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#C38E5B]/30"
                        : "bg-white/[0.02] border border-white/5 text-neutral-600 cursor-not-allowed"
                      }
                    `}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Hide scrollbar globally for slider */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default MenuSection;