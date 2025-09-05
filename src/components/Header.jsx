import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { ChefHat, Menu } from "lucide-react";
import Cart from "./Cart.jsx";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MenuContext } from "@/Utils/MenuContext.jsx";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav.jsx";

function Header() {
  const { setOpenCart, openMenu, setOpenMenu } = useContext(MenuContext);


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Cart />

      <div className={`sm:h-[120px] h-[80px]  fixed top-0 left-0 w-full z-40 flex items-center sm-justify-around justify-between px-4 transition-all duration-300 ${scrolled ? "bg-[#A0552D] shadow-md" : "bg-transparent shadow-md"}`}>
        <MobileNav />
        <Link to="/" className="sm-flex items-center  ">
          <div className="font-lobster cursor-pointer text-white sm:text-4xl text-2xl font-extrabold flex gap-1"><ChefHat className="text-white w-8 h-8 sm:w-10 sm:h-10" />Spice!Route</div>
        </Link>
        <div className="items-center gap-8 hidden md:flex" >
          <Link to="/menu" className="head-texts">
            Menu
          </Link>
          <Link to="/reservation" className="head-texts">
            Reservation
          </Link>
          <Link to="/about" className="head-texts">
            About
          </Link>
          <Link to="/contact" className="head-texts">
            Contact
          </Link>
          <Link to="/shop" className="head-texts">
            Shop
          </Link>
          {//coming back to this later for mobile menu
            //<Menu className="w-10 h-10 cursor-pointer text-white" />
          }
        </div>
        <div className="flex items-center gap-2 sm-gap-7 ">
          <div className="flex md:hidden items-center gap-2 cursor-pointer">
            <button
              onClick={() => {
                setOpenMenu(!openMenu);
                setOpenCart(false);
              }}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              {/* Top line */}
              <motion.span
                initial={false}
                animate={{
                  rotate: openMenu ? 45 : 0,
                  y: openMenu ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-0.5 bg-white rounded"
              />

              {/* Middle line */}
              <motion.span
                initial={false}
                animate={{
                  opacity: openMenu ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-white rounded"
              />

              {/* Bottom line */}
              <motion.span
                initial={false}
                animate={{
                  rotate: openMenu ? -45 : 0,
                  y: openMenu ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-0.5 bg-white rounded"
              />
            </button>
          </div>
          <div onClick=
            {
              () => {
                setOpenCart(true)
                setOpenMenu(false);
              }
            }
            className="relative cursor-pointer hover:text-gray-300">
            <FiShoppingCart className="sm:w-10 sm:h-10 w-8 h-8 text-white" />
            <span className={`absolute -top-2 -right-2  text-white sm:text-xl w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center rounded-full shadow-md ${scrolled ? "bg-black" : "bg-[#A0552D]"}`}>
              0
            </span>
          </div>

        </div>
      </div>
    </>
  )
}


export default Header;