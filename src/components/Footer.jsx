import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChefHat, Mail, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: "Menu", to: "/menu" },
      { label: "Reservations", to: "/reservation" },
      { label: "Shop", to: "/shop" },
      { label: "Gift Cards", to: "/gift-cards" },
    ],
    about: [
      { label: "Our Philosophy", to: "/about" },
      { label: "The Team", to: "/team" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/careers" },
    ],
    legal: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Policy", to: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-400" },
    { icon: FaTwitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-sky-400" },
    { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com", color: "hover:text-blue-400" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com", color: "hover:text-red-400" },
  ];

  const contactInfo = [
    { icon: Phone, label: "+1 (555) 123-4567" },
    { icon: Mail, label: "hello@spiceroute.com" },
    { icon: MapPin, label: "123 Culinary Street, NYC 10001" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#060607] to-[#050508] text-[#F5F1EB] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-[#C38E5B]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] rounded-full bg-[#C38E5B]/8 blur-[100px]" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section - Takes up more space */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#C38E5B]/20 blur-lg group-hover:bg-[#C38E5B]/30 transition-all duration-300" />
                    <ChefHat className="relative w-8 h-8 text-[#C38E5B] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-lobster text-3xl tracking-wide group-hover:text-[#C38E5B] transition-colors duration-300">
                    Spice.Route
                  </span>
                </Link>

                {/* Tagline */}
                <p className="text-neutral-300 leading-relaxed mb-8 max-w-md text-base">
                  A chef-driven dining experience shaped by memory, fire, and restraint.
                  Seasonal menus. Intimate evenings. Nothing unnecessary.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-neutral-400 group cursor-pointer">
                      <item.icon className="w-4 h-4 mt-0.5 text-[#C38E5B] group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-neutral-300 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        w-10 h-10 rounded-full
                        bg-white/5 backdrop-blur-sm
                        border border-white/10
                        flex items-center justify-center
                        text-neutral-400 ${social.color}
                        transition-all duration-300
                        hover:bg-white/10 hover:border-white/20
                      `}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
                {/* Explore */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="uppercase tracking-widest text-xs text-[#C38E5B] font-semibold mb-6">
                    Explore
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.explore.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.to}
                          className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="uppercase tracking-widest text-xs text-[#C38E5B] font-semibold mb-6">
                    About
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.about.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.to}
                          className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="col-span-2 sm:col-span-1"
                >
                  <h3 className="uppercase tracking-widest text-xs text-[#C38E5B] font-semibold mb-6">
                    Legal
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.to}
                          className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-y border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif mb-3">Stay in the Loop</h3>
            <p className="text-neutral-400 text-sm mb-6">
              Get updates on seasonal menus, special events, and exclusive reservations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:bg-white/10 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-[#C38E5B] text-black font-semibold hover:bg-[#D4A574] transition-colors duration-300 shadow-lg shadow-[#C38E5B]/20"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-neutral-500">
              <span>© {currentYear} Spice.Route.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-600">
              <span>Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-[#C38E5B] fill-[#C38E5B]" />
              </motion.div>
              <span>and intention</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUpRight className="w-5 h-5 rotate-45" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;