import React, { useEffect, useState } from 'react';
import Home from './HP/Home'
import './App.css'
import Reservation from './Reservation'
import About from './About';
import MenuSection from './Menu';
import ContactUs from './ContactUs';
import CartPage from './Cart/CartPage.jsx';
import Shop from './Shop';
import Checkout from './Checkout/Checkout';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/menu" element={<MenuSection />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
export default App

//https://tastyc.bslthemes.com/seafood/menu-tabs/
//https://forked.kwst.net/site/onepage.html