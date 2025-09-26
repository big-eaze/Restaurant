import React, { useContext, useMemo } from "react";
import { MenuContext } from "@/Utils/MenuContext";



export function useCart() {
  const { cartItems, meals } = useContext(MenuContext);



  const cart = useMemo(() => {
    return cartItems.map((item) => {
      const meal = meals.find((m) => m.id === item.id);
      if (!meal) return null;

      return {
        ...item,
        img: meal.img,
        name: meal.name,
        oldPrice: meal.oldPrice,
        price: meal.price,
        discount: meal.discount,
        description: meal.description,
        totalPrice: meal.price * item.quantity,
      };
    }).filter(Boolean);
  }, [cartItems, meals]);

  return cart;
}

export function calculateSubTotal(cart) {
  return cart.reduce((total, item) => total + item.totalPrice, 0);
}

export function useRemoveFromCart() {
  const { cartItems, setCartItems, cartQuantity, setCartQuantity } = useContext(MenuContext);

  function removeFromCart(productId) {
    const itemToRemove = cartItems.find(item => item.id === productId);
    if (!itemToRemove) return; // Item not found in cart

    setCartItems(cartItems.filter(item => item.id !== productId));
    setCartQuantity(cartQuantity - itemToRemove.quantity);
  }
  return removeFromCart;
}


export function useAddToCart() {
  // Implementation for adding items to the cart
  const { cartItems, setCartItems, cartQuantity, setCartQuantity } = useContext(MenuContext);

  function addToCart(productId) {

    const matchingItem = cartItems.find(item => item.id === productId);

    if (matchingItem) {
      // If the item is already in the cart, increase its quantity

      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ));

      setCartQuantity(cartQuantity + 1);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
      setCartQuantity(cartQuantity + 1);
    }
  }
  return addToCart;
}


