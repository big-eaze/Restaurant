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
import { ShoppingCart } from 'lucide-react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate a short delay for loading
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-[#A0552D]/40 border-t-[#A0552D] rounded-full animate-spin"></div>
          <ShoppingCart className="w-12 h-12 text-[#A0552D] absolute inset-0 m-auto" />
        </div>
        <p className="text-gray-600 font-medium text-lg animate-pulse">Loading your blissful experience...</p>
      </div>

    );
  }


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