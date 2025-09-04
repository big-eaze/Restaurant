import React from "react";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import Footer from "./components/Footer";
import NewsletterSec from "./components/NewsletterSec";
import Header from "./components/Header";

function ContactUs() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-[700px] bg-cover bg-center" style={{ backgroundImage: "url('/skyline1.jpg')" }}>
        <div className="w-full h-full  flex flex-col items-center justify-center gap-5  text-white bg-dark-overlay">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[30px] h-[4px] rounded-xl bg-orange-600"></div>
            <p className="text-white text-sm">Canada, Toronto, North Avenue 31B</p>
          </div>
          <h1 className="font-cormorant font-bold text-6xl text-white">CONTACT</h1>
        </div>
      </div>
      <div className="w-full bg-[#F9F9EE] flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="w-[30px] h-[5px] bg-[#A0552D] rounded-xl"></div>
          <p className="font-cormorant text-sm font-bold">GET IN TOUCH</p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-cormorant">
            Contact Information
          </h2>
          <p className="font-cormorant text-gray-600 font-bold">
            Porro eveniet, autem ipsam vitae consequatur!
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 py-12">
          {/* Write Us */}
          <div className="text-center flex flex-col items-center">
            <FaEnvelopeOpenText className="text-4xl sm:text-5xl text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold">Write Us</h3>
            <p className="text-gray-600">info@spicyR.com</p>
            <p className="text-gray-600">reservation@spicyR.com</p>
          </div>

          {/* Call Us */}
          <div className="text-center flex flex-col items-center">
            <FaPhoneAlt className="text-4xl sm:text-5xl text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p className="text-gray-600">+76 (094) 754 43 71</p>
            <p className="text-gray-600">+76 (093) 753 43 72</p>
          </div>

          {/* Visit Us */}
          <div className="text-center flex flex-col items-center">
            <FaMapMarkedAlt className="text-4xl sm:text-5xl text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold">Visit Us</h3>
            <p className="text-gray-600 max-w-xs">
              Canada, Toronto, North Avenue 31B
            </p>
          </div>
        </div>

        {/* Contact Form Header */}
        <div className="flex flex-col items-center gap-5 text-center mt-16">
          <div className="w-[30px] h-[5px] bg-[#A0552D] rounded-xl"></div>
          <p className="font-cormorant text-sm font-bold">CONTACT FORM</p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-cormorant">
            Write Us a Message
          </h2>
          <p className="font-cormorant text-gray-600 font-bold">
            Porro eveniet, autem ipsam vitae consequatur!
          </p>
        </div>

        {/* Form */}
        <form className="w-full max-w-2xl mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="px-5 py-3 bg-[#F9F9EE] outline-none shadow-md rounded"
              type="text"
              placeholder="First Name"
            />
            <input
              className="px-5 py-3 bg-[#F9F9EE] outline-none shadow-md rounded"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="px-5 py-3 bg-[#F9F9EE] outline-none shadow-md rounded"
              type="tel"
              placeholder="Phone"
            />
            <input
              className="px-5 py-3 bg-[#F9F9EE] outline-none shadow-md rounded"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col items-start gap-4 mt-5">
            <textarea
              className="w-full bg-[#F9F9EE] outline-none shadow-md rounded p-4 resize-none"
              rows="5"
              placeholder="Message"
            />
            <button className="px-6 py-3 bg-[#A0552D] text-white rounded hover:bg-[#8c4524] transition">
              SEND A MESSAGE
            </button>
          </div>
        </form>
      </div>

      <NewsletterSec />
      <Footer />
    </div>
  )
}


export default ContactUs; 