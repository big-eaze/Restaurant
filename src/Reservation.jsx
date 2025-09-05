import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu.jsx";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function Reservation(openCart, setOpenCart) {
  const [date, setDate] = useState(null);

  return (
    <>
      <div className="
          w-full
          h-[80px] 
          sm:h-[120px]
          bg-top 
          bg-cover 
           
          
        "
        style={{ backgroundImage: "url('/Bg-img/sample1.jpg')" }}>
        <Header openCart={openCart} setOpenCart={setOpenCart} />
      </div>
      <div className="w-full min-h-screen bg-[#F9F9EE]">
        {/* Reservation Header */}

        <div className="flex w-full min-h-[500px] pt-10  pb-20 flex-col justify-center gap-10 items-center ">
          <div className="w-full flex flex-col items-center text-center px-4">
            <h1 className="text-5xl font-dancing font-bold">Reserve a Table</h1>
            <p className="font-cormorant font-bold text-xl mt-4 max-w-2xl">
              To help us find the best table for you, select the preferred party
              size, date, and time of your reservation.
            </p>
          </div>

          {/* Reservation Form */}
          <form className="flex flex-wrap items-end justify-center gap-6 mt-10">
            {/* Party Size */}
            <div className="flex flex-col w-[250px]">
              <label>Party Size</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="border border-black px-5 py-3 flex items-center justify-between gap-2 w-full hover:border-[#7a7a7a] focus:outline-none">
                    2 guests
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-[10rem] border-2  border-black bg-[#F9F9EE] ">
                  <DropdownMenuItem>1 guest</DropdownMenuItem>
                  <DropdownMenuItem>2 guests</DropdownMenuItem>
                  <DropdownMenuItem>3 guests</DropdownMenuItem>
                  <DropdownMenuItem>4 guests</DropdownMenuItem>
                  <DropdownMenuItem>5 guests</DropdownMenuItem>
                  <DropdownMenuItem>6 guests</DropdownMenuItem>
                  <DropdownMenuItem>7 guests</DropdownMenuItem>
                  <DropdownMenuItem>8 guests</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Date Picker */}
            <div className="flex flex-col w-[250px]">
              <label>Date</label>
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild>
                  <button className="w-full border border-black p-3 flex items-center justify-between gap-2 hover:border-[#7a7a7a] focus:outline-none">
                    {date ? format(date, "PPP") : "Select Date"}
                    <CalendarIcon className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  sideOffset={8}
                  side='top'
                  className="w-full p-3 bg-white shadow-lg">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}


                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Time Picker */}
            <div className="flex flex-col w-[250px]">
              <label>Time</label>
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild>
                  <button className="w-full border border-black p-3 flex items-center justify-between gap-2 hover:border-[#7a7a7a] focus:outline-none">
                    11:30pm
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  sideOffset={8}
                  side='top'
                  className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-[10rem] border-2  border-black font-cormorant bg-[#F9F9EE]">
                  {[
                    "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm",
                    "3:00pm", "3:30pm", "4:00pm", "4:30pm", "5:00pm", "5:30pm", "6:00pm", "6:30pm",
                    "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm", "9:30pm", "10:00pm", "10:30pm", "11:00pm"
                  ].map((time) => (
                    <DropdownMenuItem key={time}>{time}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Submit */}
            <button className="border border-black p-3 px-10 hover:btn-hover-ii transition-all">
              Find a Table
            </button>
          </form>
        </div>

        {/* Parallax Background Section */}
        <div
          className="
          w-full 
          h-screen 
          bg-center 
          bg-cover 
           
          my-10
        "
          style={{ backgroundImage: "url('/Bg-img/sample1.jpg')" }}
        ></div>

        {/* Reservation Note */}
        <div className="bg-[#F6F6EE] px-6">
          <p className="text-center font-cormorant font-bold p-10 max-w-3xl mx-auto">
            Please note that while we strive to accommodate all reservation
            requests, availability may be limited during peak times. We recommend
            booking in advance to secure your preferred date and time. We look
            forward to welcoming you and providing an exceptional dining
            experience.
          </p>
        </div>



        {/* Contact Section */}
        <div className="bg-white w-full mx-auto py-16 flex flex-col lg:flex-row justify-around items-center gap-12 mb-10">
          <div className="flex flex-col gap-8 justify-center items-center text-center">
            <h2 className="font-dancing font-bold text-2xl md:text-3xl">We would love to hear from you</h2>
            <div>
              <span>Tel:123 456 6780</span><br />
              <span>info@mysite.com</span>
            </div>
            <div>
              <span>500 Terry Francine Street </span><br />
              <span>San Francisco, CA 94158</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              Follow us
              <div className="flex gap-6">
                <FaFacebookF className="w-5 h-5 text-black hover:text-blue-700 cursor-pointer" />
                <FaInstagram className="w-5 h-5 text-black hover:text-pink-600 cursor-pointer" />
                <FaTwitter className="w-5 h-5 text-black hover:text-sky-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-[90%] max-w-xl flex flex-col gap-4">
            {/* Name Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border-b-[1px] md:border-b-2 border-black p-3 text-sm md:text-base w-full focus:outline-none"
                type="text"
                placeholder="First name"
              />
              <input
                className="border-b-[1px] md:border-b-2 border-black p-3 text-sm md:text-base w-full focus:outline-none"
                type="text"
                placeholder="Last name"
              />
            </div>

            {/* Subject / Email Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border-b-[1px] md:border-b-2 border-black text-sm md:text-base p-3 w-full focus:outline-none"
                type="text"
                placeholder="Subject"
              />
              <input
                className="border-b-[1px] md:border-b-2 border-black text-sm md:text-base p-3 w-full focus:outline-none"
                type="email"
                placeholder="E-mail"
              />
            </div>

            {/* Message + Button */}
            <div className="flex flex-col gap-4">
              <textarea
                className="border-b-[1px] md:border-b-2 border-black p-3 text-sm md:text-base w-full h-[120px] focus:outline-none"
                placeholder="Message"
              ></textarea>
              <button className="border border-black p-2 text-sm md:text-base md:p-3 w-full hover:btn-hover-ii transition-all">
                Submit
              </button>
            </div>
          </form>

        </div>

        <Footer />
      </div>
    </>
  );
}

export default Reservation;
