import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-[#A0522D] w-full text-white">
      <div className="w-[90%] max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left: Logo & About */}
        <div className="flex flex-col gap-4">
          <img src="/brand-logo.png" alt="Brand Logo" className="w-28 h-auto" />
          <p className=" leading-relaxed text-gray-100">
            Spice Bite brings you the freshest meals crafted with passion. From our kitchen to your table — always warm, always delicious.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-xl">Quick Links</h4>
          <ul className="flex flex-col gap-2 ">
            <li><Link href="/menu" className="hover:underline">Menu</Link></li>
            <li><Link href="/reservation" className="hover:underline">Reservation</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
          </ul>
        </div>

        {/* Right: Contact & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-xl">Contact Us</h4>
          <p className="">500 Terry Francine Street<br />San Francisco, CA 94158</p>
          <p className="">Tel: 123-456-7890<br />Email: info@mysite.com</p>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#8B3E20] text-center text-sm py-4">
        © 2025 by Spice Bite. Powered and secured by ISR
      </div>
    </footer>
  )
};


export default Footer;
