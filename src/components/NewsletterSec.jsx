import React from "react";

function NewsletterSec() {
  return (
    <section
      className="relative w-full bg-cover bg-bottom py-16 text-white bg-[#E8DED3]"
      
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left md:w-1/2">
        <p className="text-xs uppercase tracking-widest text-orange-500 mb-3 flex items-center gap-2 justify-center md:justify-start">
          <span className="w-6 h-[2px] bg-orange-500"></span>
          Newsletter
        </p>
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-4">
          SUBSCRIBE OUR <br /> NEWSLETTER
        </h2>
        <p className="text-gray-200 mb-6">
          Rolorem, beatae dolorum, praesentium itaque et quam quaerat.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-4 justify-center md:justify-start">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-[100%] md:w-[400px] px-2 sm:px-4 py-3 text-gray-800 rounded-none outline-none border border-gray-300"
          />
          <button className="bg-black hover:bg-orange-600 text-white px-4 text-sm sm:text-base sm:px-8 py-3 uppercase">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSec;


