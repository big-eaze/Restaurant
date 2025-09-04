import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";

function Home(openCart, setOpenCart) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const customersReviews = [
    {
      name: "Sarah L.",
      review: "The food was absolutely delicious and the service was impeccable. I highly recommend this restaurant to anyone looking for a great dining experience."
    },
    {
      name: "John D.",
      review: "I had an amazing time at this restaurant. The atmosphere was cozy and inviting, and the staff went above and beyond to make sure we had everything we needed. I'll definitely be back!"
    },
    {
      name: "Emily R.",
      review: "This restaurant exceeded my expectations in every way. The food was fresh and flavorful, and the presentation was beautiful. I can't wait to come back and try more dishes!"
    },
    {
      name: "Michael S.",
      review: "From start to finish, my experience at this restaurant was fantastic. The staff"
    },
    {
      name: "Jessica T.",
      review: "I can't say enough good things about this restaurant. The food was out of this world, and the service was top-notch. I would recommend it to anyone looking for a memorable dining experience."
    },
    {
      name: "David K.",
      review: "This restaurant is a hidden gem! The food was delicious and the staff was friendly and attentive. I will definitely be back!"
    }
  ];


  const nextSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % customersReviews.length);
      setFade(true);
    }, 500);
  }, [customersReviews.length]);

  const prevSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + customersReviews.length) % customersReviews.length);
      setFade(true);
    }, 500);
  }, [customersReviews.length]);
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 7000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);


  function slideControl(direction) {
    if (direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
    startAutoSlide();
  }

  return (
    <div>

      <div className="w-full h-screen bg-[url('/crispyFries2.jpg')] bg-cover bg-center">

        <Header setOpenCart={setOpenCart} openCart={openCart} />

        <div className="bg-dark-overlay h-[100%] flex flex-col justify-center items-center" >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, }}
            className="text-center mb-10"
          >
            <h1 className="sm:text-6xl text-4xl lg:text-7xl text-white font-lobster">Spice!Route</h1>
            <p className="font-extrabold sm:text-xl md:text-lg text-secondary">It's the simple pleasures in life.</p>
            <Link to="/shop">
              <button className="bg-transparent border-2 text-white sm:px-10 text-sm py-2 px-3 mt-3 hover:btn-hover rounded-lg">ORDER ONLINE</button>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#A0552D] w-full min-h-screen flex justify-center items-center py-16">
        <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 px-4">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="bg-white p-2 shadow-lg flex-shrink-0"
          >
            <img
              className="w-full max-w-[400px] h-auto object-cover"
              src="/crispyFries4.jpg"
              alt="Food"
            />
          </motion.div>

          {/* Right Text Card */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            className="bg-white p-6 md:p-10 flex flex-col justify-center gap-6 shadow-xl w-full max-w-2xl"
          >
            <p className="font-dancing text-3xl md:text-4xl text-center">Our food</p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <p className="font-cormorant text-base md:text-lg leading-relaxed md:w-2/3">
                Our chefs carefully craft each dish using only the freshest
                ingredients, sourced locally whenever possible, ensuring that
                every bite is a delight for the senses. From classic favorites
                to innovative creations, our menu is designed to take you on
                a culinary journey that is both familiar and exciting.
              </p>

              {/* Divider for desktop only */}
              <div className="hidden md:block w-[1px] bg-black h-auto"></div>

              <Link to="/menu" className="w-full md:w-auto text-center">
                <button className="border border-black px-8 py-3 hover:bg-black hover:text-white transition">
                  See Menu
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="bg-white w-full p-10 md:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-[95%] mx-auto">
          {[
            "food-1.jpg", "food-14.jpg", "food-3.jpg", "food-4.jpg",
            "food-5.jpg", "food-6.jpg", "food-7.jpg", "food-8.jpg",
            "food-9.jpg", "food-10.jpg", "food-11.jpg", "food-12.jpg"
          ].map((src, i) => (
            <img
              key={i}
              className="w-full h-64 object-cover object-center rounded-md shadow-md"
              src={`/food-display/${src}`}
              alt={`Food ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {/*Only for desktop */}
      <div className="hidden  w-[100%] h-screen bg-[#F6F6EE] lg:flex justify-center items-center">
        <div className="w-full max-w-2xl h-[75%] bg-cover" style={{ backgroundImage: "url(/Bg-img/sample2.jpg)" }}></div>
        <div className="w-[50%] h-[55%] bg-white rounded-r-full relative flex flex-col justify-center items-center gap-8" >
          <h3 className="font-dancing text-4xl font-bold">A Word from Our Customers</h3>
          <div className="w-[50%] flex items-center justify-around gap-5">
            <div className="cursor-pointer hover:text-[#10846f] transition delay-100 duration-100 ease-in-out" onClick={() => slideControl("prev")}>❮</div>
            <div className={`w-[550px] flex flex-col transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"} `}>
              <p className="text-xl italic">"{customersReviews[currentSlide].review}"</p>
              <p className=" text-m font-bold mt-3">- {customersReviews[currentSlide].name}</p>
            </div>
            <div className="cursor-pointer hover:text-[#10846f] transition delay-100 duration-100 ease-in-out" onClick={() => slideControl("next")}>❯</div>
          </div>
        </div>

      </div>
      {/* for phone & tablets */}
      <div className=" lg:hidden relative w-full min-h-screen bg-[#F6F6EE] flex justify-center items-center px-4 py-12">
        {/* Main Card */}
        <div className="w-full max-w-4xl bg-white relative flex flex-col justify-center items-center gap-8 p-6 md:p-12 shadow-lg rounded-xl">
          <h3 className="font-dancing text-2xl md:text-4xl font-bold text-center">
            A Word from Our Customers
          </h3>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Review Text */}
            <div
              className={`w-full md:w-[550px] flex flex-col text-center transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"
                }`}
            >
              <p className="text-lg md:text-xl italic">
                "{customersReviews[currentSlide].review}"
              </p>
              <p className="text-base md:text-lg font-bold mt-3">
                - {customersReviews[currentSlide].name}
              </p>
            </div>
            {/* Prev Button */}
            <div className="w-full flex gap-2 justify-end">
              <div
                className="cursor-pointer text-2xl md:text-3xl hover:text-[#A0552D] transition duration-200"
                onClick={() => slideControl("prev")}
              >
                ❮
              </div>
              {/* Next Button */}
              <div
                className="cursor-pointer text-2xl md:text-3xl hover:text-[#A0552D] transition duration-200"
                onClick={() => slideControl("next")}
              >
                ❯
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>

  )
}


export default Home;