import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu.jsx";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Calendar } from "@/components/ui/calendar";
import {
  Calendar as CalendarIcon,
  ChevronDown,
  Users,
  Clock,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function Reservation({ openCart, setOpenCart }) {
  const [date, setDate] = useState(null);
  const [partySize, setPartySize] = useState("2 guests");
  const [time, setTime] = useState("7:00pm");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Time slots
  const timeSlots = [
    "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm",
    "2:00pm", "2:30pm", "3:00pm", "3:30pm", "4:00pm", "4:30pm",
    "5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm",
    "8:00pm", "8:30pm", "9:00pm", "9:30pm", "10:00pm", "10:30pm", "11:00pm"
  ];

  // Party sizes
  const partySizes = Array.from({ length: 12 }, (_, i) => ({
    value: `${i + 1} ${i === 0 ? 'guest' : 'guests'}`,
    label: `${i + 1} ${i === 0 ? 'guest' : 'guests'}`
  }));

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    // Handle reservation logic here
    console.log({ date, partySize, time });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <>
      <Header openCart={openCart} setOpenCart={setOpenCart} />

      <div className="w-full min-h-screen bg-[#060607]">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/Bg-img/sample1.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#060607]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm tracking-widest uppercase mb-8">
              <CalendarIcon className="w-4 h-4 text-[#C38E5B]" />
              <span className="text-[#F5F1EB]/90">Book Your Experience</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              Reserve a Table
            </h1>

            <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              To help us find the best table for you, select your preferred party size, date, and time
            </p>
          </motion.div>
        </section>

        {/* Reservation Form Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleReservationSubmit}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Party Size */}
                <div className="flex flex-col gap-3">
                  <label className="text-neutral-300 text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C38E5B]" />
                    Party Size
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between gap-2 text-white hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20"
                      >
                        <span>{partySize}</span>
                        <ChevronDown className="w-4 h-4 text-neutral-400" />
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-[300px] overflow-y-auto bg-[#0E0F14] border border-white/10 rounded-xl p-2 shadow-xl">
                      {partySizes.map((size) => (
                        <DropdownMenuItem
                          key={size.value}
                          onClick={() => setPartySize(size.value)}
                          className="text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg px-4 py-2.5 cursor-pointer transition-colors"
                        >
                          {size.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Date Picker */}
                <div className="flex flex-col gap-3">
                  <label className="text-neutral-300 text-sm font-medium flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#C38E5B]" />
                    Date
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between gap-2 text-white hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20"
                      >
                        <span>{date ? format(date, "PPP") : "Select Date"}</span>
                        <CalendarIcon className="w-4 h-4 text-neutral-400" />
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={8}
                      side="bottom"
                      align="start"
                      className="bg-[#0E0F14] border border-white/10 rounded-xl p-4 shadow-2xl"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="text-white"
                        classNames={{
                          months: "text-white",
                          month: "text-white",
                          caption: "text-white flex justify-center pt-1 relative items-center",
                          caption_label: "text-sm font-medium text-white",
                          nav: "space-x-1 flex items-center",
                          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex",
                          head_cell: "text-neutral-400 rounded-md w-9 font-normal text-[0.8rem]",
                          row: "flex w-full mt-2",
                          cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#C38E5B]/20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                          day: "h-9 w-9 p-0 font-normal text-white hover:bg-white/10 rounded-md transition-colors",
                          day_selected: "bg-[#C38E5B] text-black hover:bg-[#C38E5B] hover:text-black focus:bg-[#C38E5B] focus:text-black",
                          day_today: "bg-white/5 text-white",
                          day_outside: "text-neutral-600 opacity-50",
                          day_disabled: "text-neutral-600 opacity-50",
                          day_hidden: "invisible",
                        }}
                      />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Time Picker */}
                <div className="flex flex-col gap-3">
                  <label className="text-neutral-300 text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C38E5B]" />
                    Time
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between gap-2 text-white hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20"
                      >
                        <span>{time}</span>
                        <ChevronDown className="w-4 h-4 text-neutral-400" />
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-[300px] overflow-y-auto bg-[#0E0F14] border border-white/10 rounded-xl p-2 shadow-xl">
                      {timeSlots.map((slot) => (
                        <DropdownMenuItem
                          key={slot}
                          onClick={() => setTime(slot)}
                          className="text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg px-4 py-2.5 cursor-pointer transition-colors"
                        >
                          {slot}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#C38E5B] text-black font-semibold py-4 rounded-xl hover:bg-[#D4A574] transition-all duration-300 shadow-lg shadow-[#C38E5B]/20 text-lg"
              >
                Find Available Tables
              </motion.button>

              {/* Info Note */}
              <p className="text-neutral-400 text-sm text-center mt-6 leading-relaxed">
                Tables are held for 15 minutes. Please arrive on time to ensure your reservation.
              </p>
            </motion.form>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            >
              {[
                { icon: CheckCircle2, title: "Instant Confirmation", text: "Receive confirmation immediately" },
                { icon: Users, title: "Flexible Seating", text: "Accommodate groups of all sizes" },
                { icon: Clock, title: "Modify Anytime", text: "Change or cancel up to 2 hours before" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-[#C38E5B] mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Parallax Image Section */}
        <section
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/Bg-img/sample1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </section>

        {/* Important Note Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#060607] to-[#0E0F14]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">Reservation Policy</h3>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                Please note that while we strive to accommodate all reservation requests, availability may be limited during peak times.
                We recommend booking in advance to secure your preferred date and time. We look forward to welcoming you and providing
                an exceptional dining experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0E0F14]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">Get In Touch</h2>
              <p className="text-neutral-400 text-lg">We'd love to hear from you</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Info Cards */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#C38E5B]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <p className="text-neutral-400">+1 (123) 456-6780</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#C38E5B]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-neutral-400">info@spiceroute.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#C38E5B]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-neutral-400">500 Terry Francine Street<br />San Francisco, CA 94158</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <p className="text-neutral-300 font-medium mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { icon: FaFacebookF, label: "Facebook", color: "hover:text-blue-400" },
                      { icon: FaInstagram, label: "Instagram", color: "hover:text-pink-400" },
                      { icon: FaTwitter, label: "Twitter", color: "hover:text-sky-400" },
                      { icon: FaYoutube, label: "YouTube", color: "hover:text-red-400" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 ${social.color} hover:bg-white/10 transition-all duration-300`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onSubmit={handleContactSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#C38E5B] text-black font-semibold py-4 rounded-xl hover:bg-[#D4A574] transition-all duration-300 shadow-lg shadow-[#C38E5B]/20 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>

                {/* Success Message */}
                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm">Message sent successfully!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Reservation;