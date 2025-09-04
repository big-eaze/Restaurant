import React, { useEffect, useRef, useState } from "react";
import { ShoppingBasket } from "lucide-react";
import Footer from "./components/Footer.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "./components/Header.jsx";


function MenuSection() {


  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 1); // -1 avoids rounding issues
  };

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
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
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
        {["Starters", "Main Courses", "Desserts", "Beverages"].map((cat) => (
          <button
            key={cat}
            className="px-4 w-[80%] sm:w-40 sm:px-6 py-2 sm:py-3 text-md sm:text-base hover:bg-[#A0522D] hover:text-white transition-all"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="w-full px-4 sm:px-8 md:px-20 py-10 bg-[#F9F9EE] flex justify-center">
        <div className="w-full sm:w-[90%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { name: "Grilled Salmon", price: 18.99, img: "/food-display/food-1.jpg" },
            { name: "Caesar Salad", price: 9.99, img: "/food-display/food-2.jpg" },
            { name: "Chocolate Lava Cake", price: 12.99, img: "/food-display/food-3.jpg" },
            { name: "Margherita Pizza", price: 10.99, img: "/food-display/food-4.jpg" },
            { name: "Spaghetti Carbonara", price: 14.99, img: "/food-display/food-5.jpg" },
            { name: "Tiramisu", price: 8.99, img: "/food-display/food-6.jpg" },
            { name: "Chicken Tikka Masala", price: 15.99, img: "/food-display/food-7.jpg" },
            { name: "Mango Lassi", price: 5.99, img: "/food-display/food-8.jpg" },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-[#C4A484] flex flex overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              {/* Image */}
              <img
                className="w-1/3 h-full object-cover object-center"
                src={item.img}
                alt={item.name}
              />

              {/* Content */}
              <div className="flex flex-col flex-grow p-4">
                <h2 className="text-lg sm:text-xl font-bold">{item.name}</h2>
                <p className="mt-2 text-sm text-gray-700">
                  Delicious description goes here...
                </p>

                {/* Price + Button */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-bold text-base sm:text-lg">
                    ${item.price.toFixed(2)}
                  </p>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-overlay hover:basket-hover shadow-md hover:shadow-lg transition-all">
                    <ShoppingBasket className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Reservation Section */}
      <div
        className="w-full h-[400px] sm:h-[500px]"
        style={{
          backgroundImage: "url('/reservation4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundAttachment: "fixed",
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
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
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
                src="/food-display/food-2.jpg"
                alt="food"
              />
              <div className="p-4 w-full">
                <h2 className="text-xl sm:text-2xl font-bold font-cormorant">
                  Caesar Salad
                </h2>
                <p className="mt-2 font-cormorant text-sm sm:text-base">
                  Crisp romaine lettuce tossed with Caesar dressing, croutons, and
                  Parmesan cheese.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col items-center">
                    <p className="font-bold font-cormorant">$25.99</p>
                    <p className="font-cormorant text-gray-500 line-through">$20.99</p>
                  </div>
                  <button className="flex items-center justify-center w-12 h-12 sm:w-[55px] sm:h-[70px] bg-[#A0522D] hover:bg-[#C4A484] shadow-md hover:shadow-lg transition-all">
                    <ShoppingBasket className="w-6 h-6 text-white" />
                  </button>
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