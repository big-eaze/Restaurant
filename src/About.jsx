import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users, Sparkles, ChefHat, Wine } from "lucide-react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NewsletterSec from "./components/NewsletterSec.jsx";

function About({ openCart, setOpenCart }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const teamMembers = [
    { name: "Chris Bateman", role: "Head Chef", img: "/chef2.jpg" },
    { name: "Michael Rushmore", role: "Sous Chef", img: "/chef7.jpg" },
    { name: "Patrick Coleman", role: "Pastry Chef", img: "/chef3.jpg" },
    { name: "Emily Johnson", role: "Restaurant Manager", img: "/manager.jpg" },
    { name: "David Wilson", role: "Head Waiter", img: "/chef8.jpg" },
    { name: "James Anderson", role: "Mixologist", img: "/chef5.jpg" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Flavor",
      description: "Every dish is crafted with love and attention to authentic taste"
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "We source the finest, freshest ingredients for exceptional cuisine"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building connections through shared culinary experiences"
    },
    {
      icon: Sparkles,
      title: "Authentic Experience",
      description: "Bringing the true essence of Indian culture to your table"
    }
  ];

  return (
    <>
      <Header openCart={openCart} setOpenCart={setOpenCart} />

      <div className="w-full min-h-screen bg-[#060607]">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/about1.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#060607]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm tracking-widest uppercase mb-8">
              <ChefHat className="w-4 h-4 text-[#C38E5B]" />
              <span className="text-[#F5F1EB]/90">Our Story & Values</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              About Us
            </h1>

            <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover the passion, tradition, and dedication behind every dish we serve
            </p>
          </motion.div>
        </section>

        {/* Celebrating Local Flavor Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <motion.div {...fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs tracking-widest uppercase mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#C38E5B]" />
                  <span className="text-[#C38E5B]">Our Mission</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
                  Celebrating Local Flavor
                </h2>

                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                  At Spice Route, we believe that food is more than just sustenance;
                  it's a celebration of culture, community, and connection.
                  Our mission is to provide an authentic Indian dining experience
                  that delights the senses and brings people together.
                </p>

                <p className="text-neutral-400 text-base leading-relaxed">
                  We are committed to using the freshest ingredients, traditional cooking techniques,
                  and bold flavors to create dishes that are both delicious and memorable.
                  Whether you're joining us for a casual meal or a special occasion,
                  we strive to make every visit a truly exceptional experience.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-[#C38E5B] text-black font-semibold rounded-xl hover:bg-[#D4A574] transition-all duration-300 shadow-lg shadow-[#C38E5B]/20"
                >
                  Explore Our Menu
                </motion.button>
              </motion.div>

              {/* Image */}
              <motion.div {...fadeInRight} className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C38E5B]/20 to-transparent rounded-3xl" />
                <img
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  src="/food-display/food-18.jpg"
                  alt="Celebrating Local Flavor"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C38E5B]/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-20 bg-[#0E0F14]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">Our Core Values</h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center mb-4 group-hover:bg-[#C38E5B]/20 transition-all">
                    <value.icon className="w-7 h-7 text-[#C38E5B]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-[#0E0F14] to-[#060607]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div {...fadeInLeft} className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#C38E5B]/20 to-transparent rounded-3xl" />
                <img
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  src="/food-display/food-16.jpg"
                  alt="Our Story"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C38E5B]/10 rounded-full blur-3xl" />
              </motion.div>

              {/* Text Content */}
              <motion.div {...fadeInRight} className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs tracking-widest uppercase mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#C38E5B]" />
                  <span className="text-[#C38E5B]">Since 2023</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
                  Our Story
                </h2>

                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                  Founded in 2023, Spice Route was born out of a passion for authentic flavors
                  and a desire to create a dining experience that transports our guests
                  to the vibrant streets of India.
                </p>

                <p className="text-neutral-400 text-base leading-relaxed">
                  Our founders, avid food enthusiasts, traveled extensively across India,
                  immersing themselves in the rich culinary traditions and diverse flavors
                  of the region. Inspired by their experiences, they set out to create
                  a restaurant that would bring the essence of Indian cuisine to life,
                  right here in our community.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <Award className="w-5 h-5 text-[#C38E5B]" />
                    <span className="text-white text-sm font-medium">Award Winning</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <Heart className="w-5 h-5 text-[#C38E5B]" />
                    <span className="text-white text-sm font-medium">Family Owned</span>
                  </div>
                </div>
              </motion.div>
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
              <Wine className="w-12 h-12 text-[#C38E5B] mx-auto mb-4" />
              <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Experience Authentic Indian Cuisine
              </h3>
              <p className="text-neutral-300 text-lg max-w-xl mx-auto">
                Every dish tells a story of tradition, passion, and culinary excellence
              </p>
            </div>
          </motion.div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-20 bg-[#060607]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs tracking-widest uppercase mb-6">
                <Users className="w-4 h-4 text-[#C38E5B]" />
                <span className="text-[#C38E5B]">The Team</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
                Meet Our Team
              </h2>

              <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
                Get to know the talented individuals who craft the culinary masterpieces at Spice Route.
                Our team is driven by a shared passion for fresh, locally sourced ingredients
                and a commitment to creating memorable dining experiences for our guests.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      className="w-full h-[350px] sm:h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      src={member.img}
                      alt={member.name}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <ChefHat className="w-6 h-6 text-[#C38E5B] mb-2" />
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 group-hover:bg-white/10 group-hover:border-[#C38E5B]/30 transition-all duration-300">
                    <h3 className="text-white font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-[#C38E5B] text-sm font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter + Footer */}
        <NewsletterSec />
        <Footer />
      </div>
    </>
  );
}

export default About;