import { MenuContext } from "@/Utils/MenuContext";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";
import React, { useContext } from "react";

const navItems = [
  { label: "Menu", path: "/menu" },
  { label: "Reservation", path: "/reservation" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Shop", path: "/shop" },
];

export default function MobileNav() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {openMenu && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenMenu(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Mobile Menu Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-[#060607] border-l border-white/10 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <h2 className="font-serif text-2xl text-[#F5F1EB]">Menu</h2>
              <motion.button
                onClick={() => setOpenMenu(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/5r text-[#C38E5B] flex items-center justify-center"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 px-6 py-8 space-y-2 overflow-y-auto"
            >
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <Link
                    to={item.path}
                    onClick={() => setOpenMenu(false)}
                    className="group relative block"
                  >
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <span className="text-[#F5F1EB] font-medium text-lg group-hover:text-[#C38E5B] transition-colors">
                        {item.label}
                      </span>
                      <ChevronRight
                        size={20}
                        className="text-neutral-500 group-hover:text-[#C38E5B] transition-colors"
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="px-6 py-6 border-t border-white/10 bg-white/5"
            >
              <p className="text-neutral-500 text-xs text-center mb-3">
                Experience fine dining at its best
              </p>
              <div className="flex items-center justify-center gap-4 text-neutral-400 text-xs">
                <a href="tel:+1234567890" className="hover:text-[#C38E5B] transition-colors">
                  Call Us
                </a>
                <span>•</span>
                <a href="mailto:info@restaurant.com" className="hover:text-[#C38E5B] transition-colors">
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}