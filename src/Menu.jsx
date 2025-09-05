import React, { useEffect, useRef, useState } from "react";
import { ShoppingBasket } from "lucide-react";
import Footer from "./components/Footer.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "./components/Header.jsx";
import axios from "axios";
import { menuData } from "../data/menuData.js";
import { AnimatePresence, motion } from "framer-motion";



function MenuSection() {


  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [filteredMenu, setFilteredMenu] = useState([])
  const [specialMenu, setSpecialMenu] = useState([]);



  //active menu
  const [activeCategory, setActiveCategory] = useState("appetizer");

  const categories = [
    { label: "Appetizers", value: "appetizer" },
    { label: "Main Courses", value: "main course" },
    { label: "Desserts", value: "dessert" },
    { label: "Beverages", value: "beverage" },
  ];

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 1); // -1 avoids rounding issues
  };

  useEffect(() => {
    setFilteredMenu(
      menuData.filter((meal) => meal.category === activeCategory)
    )
    setSpecialMenu(
      menuData.filter((meal) => meal.category === "special")
    );

  }, [activeCategory]);

  useEffect(() => {
    updateScrollButtons(); // run once on mount

    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);


  function scroll(direction) {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector("div"); // get first card
      const cardWidth = card ? card.offsetWidth + 24 : 300;
      // +24 = gap-6 (1.5rem = 24px), adjust if you change gap

      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });

      // Update button states immediately
      setTimeout(updateScrollButtons, 300);
    }
  }


  return (
    <div className="w-full min-h-screen bg-[#F9F9EE]">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh]"
        style={{
          backgroundImage: "url('/food-display/food-15.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <div className="w-[30px] h-[4px] rounded-xl bg-orange-600 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-dancing text-white">
            Our Menu
          </h1>
          <p className="text-white text-lg sm:text-xl mt-4">
            Explore our delicious offerings
          </p>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="w-full py-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            value={cat.value}
            onClick={() => {
              setActiveCategory(cat.value)
            }}
            className={`px-4 w-[80%] sm:w-40 sm:px-6 py-2 sm:py-3 text-md sm:text-base transition-all
            ${activeCategory === cat.value
                ? "bg-[#A0522D] text-white"
                : "hover:bg-[#A0522D] hover:text-white"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="w-full px-4 sm:px-8 md:px-20 py-10 bg-[#F9F9EE] flex justify-center">
        <div className="w-full sm:w-[90%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.name}
                className="bg-[#C4A484] flex overflow-hidden shadow-md hover:shadow-lg transition-all h-56 sm:h-60 md:h-64"
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  className="w-1/3 h-full object-cover object-center"
                  src={item.img}
                  alt={item.name}
                />

                <div className="flex flex-col flex-grow p-4 justify-around">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">{item.name}</h2>
                    <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <p className="font-bold text-base sm:text-lg mt-2 text-end">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>




      {/* Reservation Section */}
      <div
        className="w-full h-[400px] sm:h-[500px]"
        style={{
          backgroundImage: "url('/reservation4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-full h-full bg-dark-overlay flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-dancing text-white font-bold">
            ~ THIS EVENING ~ <br /> WILL BE GREAT!
          </h1>
          <p className="text-white font-cormorant font-bold mt-6 max-w-2xl">
            Book your table now and enjoy an unforgettable dining experience with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-5 py-3 bg-[#A0522D] hover:bg-[#C4A484] transition-all text-white">
              Book A Table
            </button>
            <button className="px-5 py-3 hover:bg-black transition-all text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Special Proposal Section */}
      <div className="bg-[#F9F9EE] py-10 px-4">
        <div className="flex flex-col gap-6 sm:gap-10 mb-10">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-dancing">
            Special Proposal
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl">
            Porro eveniet, autem ipsam corrupti consectetur cum.
            <br /> Repudiandae dignissimos fugiat sit nam.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="w-full sm:w-[90%] lg:w-[60%] overflow-x-auto no-scrollbar scroll-smooth pb-6 mx-auto flex gap-6 snap-x snap-mandatory"
        >
          {specialMenu.map((meal, i) => (
            <div
              key={i + 1}
              className="
    bg-[#C4A484] 
    flex-shrink-0
    w-full                 
    sm:w-[60%]             
    md:w-[48%]             
    lg:w-[48%]
    xl:w-[400px]             
    flex flex-col items-center gap-4 rounded-md snap-start
  "
            >
              <img
                className="w-full h-[200px] sm:h-[250px] object-cover object-center"
                src={meal.img}
                alt="food"
              />
              <div className="p-4 w-full">
                <h2 className="text-xl sm:text-2xl font-bold font-cormorant">
                  {meal.name}
                </h2>
                <p className="mt-2 font-cormorant text-sm sm:text-base">
                  {meal.description}
                </p>
                <div className="flex justify-end items-center mt-4">
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-2xl font-cormorant">${meal.price}</p>
                    <p className="font-cormorant text-lg text-gray-500 line-through">${meal.initialPrice}</p>
                  </div>

                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Slider Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 mt-6 gap-4">
          <button className="px-6 sm:px-10 py-3 sm:py-4 font-cormorant font-bold bg-[#A0522D] hover:bg-[#C4A484] transition-all text-white text-lg sm:text-xl">
            All Meals
          </button>
          <div className="flex items-center gap-4">
            <p className="font-cormorant font-bold">Slider Navigation</p>
            <div className="flex gap-2">
              <ArrowLeft
                onClick={() => scroll("left")}
                className={`w-5 h-5 cursor-pointer ${!canScrollLeft && "opacity-40 cursor-not-allowed"
                  }`}
              />
              <ArrowRight
                onClick={() => scroll("right")}
                className={`w-5 h-5 cursor-pointer ${!canScrollRight && "opacity-40 cursor-not-allowed"
                  }`}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default MenuSection;