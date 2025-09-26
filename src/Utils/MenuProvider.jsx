import React, { useEffect, useState } from "react";
import { MenuContext } from "./MenuContext";
import { shopData } from "../../data/shopFood";

export function MenuProvider({ children }) {

  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);





  //state management for meals
  const [meals, setMeals] = useState(shopData);

  //state management for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 4,
      quantity: 1
    },
    {
      id: 2,
      quantity: 2
    }
  ]);

  //state management for cart quantity
  const [cartQuantity, setCartQuantity] = useState(
    () => cartItems.reduce((total, item) => total + item.quantity, 0)
  );






  useEffect(() => {
    const shouldLock = openCart || openMenu;

    if (shouldLock) {
      document.body.style.overflow = "hidden"; // disable scrolling
    } else {
      document.body.style.overflow = ""; // reset
    }

    return () => {
      document.body.style.overflow = ""; // cleanup
    };
  }, [openCart, openMenu]);

  return (
    <MenuContext.Provider value={{
      openCart,
      setOpenCart,
      openMenu,
      setOpenMenu,
      meals,
      setMeals,
      cartItems,
      setCartItems,
      cartQuantity,
      setCartQuantity
    }}
    >
      {children}
    </MenuContext.Provider>
  )
}