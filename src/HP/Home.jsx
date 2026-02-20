import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Flame,
  Star,
  Clock,
  MapPin,
  ChevronDown,
  Award,
  Utensils
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSec from "@/components/NewsletterSec";

function Home({ openCart, setOpenCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const intervalRef = useRef(null);
  const observerRef = useRef(null);

  const testimonials = [
    { name: "Sarah L.", review: "An experience that stays with you.", rating: 5 },
    { name: "John D.", review: "Quietly confident. Deeply memorable.", rating: 5 },
    { name: "Emily R.", review: "Every course felt intentional.", rating: 5 },
    { name: "Michael S.", review: "Refined without trying too hard.", rating: 5 }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(nextSlide, 8000);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide, paused]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));
  }, []);

  return (
    <div className="bg-[#060607] text-[#F5F1EB] overflow-hidden">
      <Header openCart={openCart} setOpenCart={setOpenCart} />
      <section className="relative min-h-[100svh] flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="/restu-vid-hero.mp4"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#060607]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        <div className="relative z-10 w-full px-4 sm:px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 sm:mb-8"
            >
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C38E5B]" />
              <span className="text-[#F5F1EB]/90">Chef Curated Dining</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="
                font-serif
                text-[clamp(2.5rem,8vw,6.5rem)]
                leading-[0.9]
                mb-5 sm:mb-6
                tracking-tight
              "
            >
              Dining,
              <br />
              <span className="text-[#C38E5B]">Slowed Down</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-neutral-300 max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4"
            >
              A seasonal tasting experience shaped by fire, memory, and restraint.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <Link to="/menu" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#C38E5B] text-black px-8 sm:px-10 py-4 rounded-full font-semibold hover:bg-[#D4A574] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#C38E5B]/30 shadow-[#C38E5B]/20">
                  Reserve Your Seat
                </button>
              </Link>

              <Link to="/menu" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-[#F5F1EB] px-8 sm:px-10 py-4 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  View Menu
                </button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-neutral-400"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C38E5B]" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#C38E5B]" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#C38E5B]" />
                <span>Seasonal Menu</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* PHILOSOPHY - Improved layout and responsiveness */}
      <section
        id="philosophy"
        data-animate
        className="py-20 sm:py-32 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 text-[#C38E5B] text-xs tracking-widest uppercase mb-6">
                Our Philosophy
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
                Our Approach
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
                We cook with intention. Every menu is seasonal. Every plate exists for a reason.
              </p>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                Our culinary philosophy is rooted in respect—for ingredients, for tradition, and for the dining experience itself. We believe in letting quality speak quietly.
              </p>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-[#C38E5B] mb-2">8+</div>
                  <div className="text-sm text-neutral-400">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-[#C38E5B] mb-2">12</div>
                  <div className="text-sm text-neutral-400">Course Tasting</div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src="/chef3.jpg"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  alt="Executive Chef"
                />
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE FLOW - Better mobile cards */}
      <section className="bg-gradient-to-b from-[#0E0F14] to-[#060607] py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs tracking-widest uppercase mb-6">
              The Journey
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4">
              The Evening
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
              An orchestrated experience from arrival to the final moment
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Clock,
                title: "Arrive",
                text: "Begin your evening in an atmosphere designed for conversation and connection.",
                color: "from-[#C38E5B]/20 to-transparent"
              },
              {
                icon: Flame,
                title: "Explore",
                text: "Journey through 12 courses of fire-led, seasonal creativity.",
                color: "from-[#C38E5B]/20 to-transparent"
              },
              {
                icon: Star,
                title: "Remember",
                text: "Leave with memories and flavors that will stay with you.",
                color: "from-[#C38E5B]/20 to-transparent"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-500"
              >
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center mb-6 group-hover:bg-[#C38E5B]/20 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#C38E5B]" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-serif mb-3">{item.title}</h4>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES - Improved scrolling experience */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 text-[#C38E5B] text-xs tracking-widest uppercase mb-6">
              Our Creations
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4">
              Signature Dishes
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
              A glimpse into our seasonal offerings, each crafted with precision and care
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4 sm:px-6 scrollbar-hide">
            {[1, 6, 7, 4, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-[35vw] snap-center group"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                  <img
                    src={`/food-display/food-${i}.jpg`}
                    className="h-[350px] sm:h-[420px] lg:h-[480px] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={`Signature Dish ${i}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Dish Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-xl sm:text-2xl font-serif mb-2">Seasonal Creation {i}</h4>
                    <p className="text-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Expertly crafted with local ingredients
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-6 text-sm text-neutral-500">
            <span className="hidden sm:inline">← Scroll to explore →</span>
            <span className="sm:hidden">Swipe to explore →</span>
          </div>
        </div>
      </section>

      {/* LOCATION - Enhanced design */}
      <section className="relative bg-gradient-to-b from-[#0E0F14] to-[#060607] py-20 sm:py-28 text-center px-4 sm:px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#C38E5B]" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            An Intimate Setting
          </h3>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Designed for conversation, calm, and connection. Our space holds just 24 guests, ensuring every evening feels personal.
          </p>

          <button className="bg-white/5 backdrop-blur-md border border-white/20 text-[#F5F1EB] px-8 py-3 rounded-full font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300">
            Get Directions
          </button>
        </motion.div>
      </section>

      {/* TESTIMONIALS - Better mobile interaction */}
      <section
        className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs tracking-widest uppercase mb-6">
            Testimonials
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            What Our Guests Say
          </h3>
        </motion.div>

        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C38E5B] text-[#C38E5B]" />
                ))}
              </div>

              {/* Review */}
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl mb-6 leading-relaxed text-neutral-100">
                "{testimonials[currentSlide].review}"
              </p>

              {/* Author */}
              <p className="text-neutral-400 text-sm sm:text-base font-medium">
                {testimonials[currentSlide].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide
                  ? 'bg-[#C38E5B] w-8'
                  : 'bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons (Desktop) */}
        <div className="hidden sm:flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
        </div>
      </section>

      <NewsletterSec />
      <Footer />

      {/* GRAIN TEXTURE */}
      <div className="pointer-events-none fixed inset-0 bg-[url('/grain.png')] opacity-[0.03] z-50 mix-blend-overlay" />

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Home;