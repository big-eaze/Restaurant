import { MenuContext } from "@/Utils/MenuContext";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import React, { useContext } from "react";



export default function MobileNav() {

  const { openMenu } = useContext(MenuContext);

  return (
    <AnimatePresence mode="wait">


      {/*Menu drawer  */}
      {openMenu &&
        <motion.div
          className="fixed inset-0 top-20  z-40 flex"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Overlay */}
          < motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-dark-overlay"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 w-full h-68 lg:hidden bg-white block md:hidden">
            {/* Nav Items */}

            <nav className="flex flex-col gap-6 p-8 text-md font-medium">
              <Link to="/menu" className="hover:text-orange-500  transition-colors">
                Menu
              </Link>
              <Link to="/reservation" className="hover:text-orange-500 transition-colors">
                Reservation
              </Link>
              <Link to="/menu" className="hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
              <Link to="/shop" className="hover:text-orange-500 transition-colors">
                Shop
              </Link>
            </nav>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}