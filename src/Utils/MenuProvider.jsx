import React, { useEffect, useState } from "react";
import { MenuContext } from "./MenuContext";

export function MenuProvider({ children }) {

  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);


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
      setOpenMenu
    }}
    >
      {children}
    </MenuContext.Provider>
  )
}