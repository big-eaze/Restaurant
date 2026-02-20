import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Footer from "./components/Footer";
import NewsletterSec from "./components/NewsletterSec";
import Header from "./components/Header";

function ContactUs({ openCart, setOpenCart }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    });
    // Hide success message after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Write Us",
      details: ["info@spicyR.com", "reservation@spicyR.com"],
      gradient: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+76 (094) 754 43 71", "+76 (093) 753 43 72"],
      gradient: "from-green-500/10 to-green-600/10",
      iconColor: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Canada, Toronto,", "North Avenue 31B"],
      gradient: "from-[#C38E5B]/10 to-[#D4A574]/10",
      iconColor: "text-[#C38E5B]"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <>
      <Header openCart={openCart} setOpenCart={setOpenCart} />

      <div className="w-full min-h-screen bg-[#060607]">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/skyline1.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#060607]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm tracking-widest uppercase mb-8">
              <MapPin className="w-4 h-4 text-[#C38E5B]" />
              <span className="text-[#F5F1EB]/90">Canada, Toronto, North Avenue 31B</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              Contact Us
            </h1>

            <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Get in touch with our team today.
            </p>
          </motion.div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs tracking-widest uppercase mb-6">
                <div className="w-2 h-2 rounded-full bg-[#C38E5B]" />
                <span className="text-[#C38E5B]">Get In Touch</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
                Contact Information
              </h2>

              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Reach out to us through any of these channels
              </p>
            </motion.div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${info.gradient} border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                    </div>

                    <h3 className="text-white font-semibold text-xl mb-4">{info.title}</h3>

                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-neutral-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Divider */}
        <section
          className="relative h-[300px] sm:h-[400px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/Bg-img/sample1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
            {...fadeInUp}
            className="relative z-10 h-full flex items-center justify-center text-center px-4"
          >
            <div>
              <MessageSquare className="w-12 h-12 text-[#C38E5B] mx-auto mb-4" />
              <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Have Questions?
              </h3>
              <p className="text-neutral-300 text-lg max-w-xl mx-auto">
                Our team is here to help you with any inquiries you may have
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-[#060607] to-[#0E0F14]">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs tracking-widest uppercase mb-6">
                <Send className="w-4 h-4 text-[#C38E5B]" />
                <span className="text-[#C38E5B]">Contact Form</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
                Send Us a Message
              </h2>

              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 space-y-6"
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-neutral-300 text-sm font-medium mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-neutral-300 text-sm font-medium mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-neutral-300 text-sm font-medium mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-neutral-300 text-sm font-medium mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="text-neutral-300 text-sm font-medium mb-2 block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#C38E5B] text-black font-semibold py-4 rounded-xl hover:bg-[#D4A574] transition-all duration-300 shadow-lg shadow-[#C38E5B]/20 flex items-center justify-center gap-2 text-lg"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-5 py-4"
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm text-green-400/80">We'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>

            {/* Social Media & Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-neutral-300 font-medium mb-4">Follow Us</p>
              <div className="flex justify-center gap-3">
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
                    className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 ${social.color} hover:bg-white/10 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <NewsletterSec />
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;