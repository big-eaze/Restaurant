import { FiShoppingCart } from "react-icons/fi";
import { ChefHat, Phone, Clock } from "lucide-react";
import Cart from "./Cart.jsx";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuContext } from "@/Utils/MenuContext.jsx";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav.jsx";

function Header() {
  const { setOpenCart, openMenu, setOpenMenu, cartQuantity } =
    useContext(MenuContext);

  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const heroThreshold = window.innerHeight * 0.15;

      setIsTop(scrollPosition < 20);
      setScrolled(scrollPosition > heroThreshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset states on route change
  useEffect(() => {
    setOpenMenu(false);
    setOpenCart(false);
  }, [location.pathname, setOpenMenu, setOpenCart]);

  // Active link helper
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Cart />

      {/* Top Info Bar (Desktop Only) */}
      <AnimatePresence>
        {isTop && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block fixed top-0 left-0 w-full z-10 bg-black/40 backdrop-blur-md border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C38E5B]" />
                  <span>Tue-Sat: 5PM-11PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C38E5B]" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 text-[#C38E5B] text-[10px] tracking-widest uppercase">
                  Impeccable Experience
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`
          fixed left-0 w-full z-10
          transition-all duration-500 ease-out
          ${isTop ? 'top-[36px] lg:top-[40px]' : 'top-0'}
          ${scrolled
            ? "bg-[#060607]/95 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-white/10"
            : "bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm"
          }
        `}
      >
        <div
          className={`
            max-w-7xl mx-auto
            flex items-center justify-between
            px-4 sm:px-6 lg:px-8
            transition-all duration-500
            ${scrolled ? "h-[72px] sm:h-[80px]" : "h-[80px] sm:h-[100px]"}
          `}
        >
          {/* LEFT SECTION */}
          <div className="flex items-center gap-4">
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => {
                setOpenMenu(!openMenu);
                setOpenCart(false);
              }}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
                <motion.span
                  animate={{
                    rotate: openMenu ? 45 : 0,
                    y: openMenu ? 7 : 0,
                    width: openMenu ? "24px" : "24px",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: openMenu ? 0 : 1,
                    scale: openMenu ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: openMenu ? -45 : 0,
                    y: openMenu ? -7 : 0,
                    width: openMenu ? "24px" : "24px",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 bg-white rounded-full"
                />
              </div>
            </button>

            {/* BRAND/LOGO */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                animate={{
                  scale: scrolled ? 0.9 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-2.5 text-white"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: scrolled ? 0 : 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-[#C38E5B]/20 blur-md"
                  />
                  <ChefHat className="relative w-8 h-8 sm:w-9 sm:h-9 text-[#C38E5B] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-lobster text-2xl sm:text-3xl tracking-wide group-hover:text-[#C38E5B] transition-colors duration-300">
                  Spice.Route
                </span>
              </motion.div>
            </Link>
          </div>

          {/* CENTER - DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: "Menu", to: "/menu" },
              { label: "Reservation", to: "/reservation" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Shop", to: "/shop" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group relative px-3 lg:px-4 py-2 rounded-lg"
              >
                <span
                  className={`
                    relative text-sm tracking-wide font-medium
                    transition-colors duration-300
                    ${isActive(item.to)
                      ? "text-[#C38E5B]"
                      : "text-neutral-300 group-hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {/* Active indicator */}
                  {isActive(item.to) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C38E5B] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover indicator */}
                  {!isActive(item.to) && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Reserve Button (Desktop) */}
            <Link to="/reservation" className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-5 py-2.5 rounded-full font-medium text-sm
                  transition-all duration-300
                  ${scrolled
                    ? "bg-[#C38E5B] text-black hover:bg-[#D4A574] shadow-lg shadow-[#C38E5B]/20"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }
                `}
              >
                Reserve
              </motion.button>
            </Link>

            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setOpenCart(true);
                setOpenMenu(false);
              }}
              className={`
                relative w-11 h-11 sm:w-12 sm:h-12 rounded-full
                flex items-center justify-center
                transition-all duration-300
                ${scrolled
                  ? "bg-white/5 hover:bg-white/10 border border-white/10"
                  : "bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10"
                }
              `}
              aria-label="Shopping cart"
            >
              <FiShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

              {/* Cart Badge */}
              <AnimatePresence>
                {cartQuantity > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="
                      absolute -top-1 -right-1
                      min-w-[20px] h-[20px] sm:min-w-[22px] sm:h-[22px]
                      px-1.5
                      rounded-full flex items-center justify-center
                      bg-[#C38E5B] text-black
                      text-[10px] sm:text-[11px] font-bold
                      shadow-lg shadow-[#C38E5B]/40
                      border-2 border-[#060607]
                    "
                  >
                    {cartQuantity > 99 ? '99+' : cartQuantity}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Pulse Effect when cart has items */}
              {cartQuantity > 0 && (
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-[#C38E5B]"
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Progress Bar (shows scroll progress) */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C38E5B] to-transparent origin-left"
          />
        )}
      </motion.header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {openMenu && <MobileNav />}
      </AnimatePresence>
    </>
  );
}

export default Header;