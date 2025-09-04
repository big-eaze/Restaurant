import React from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NewsletterSec from "./components/NewsletterSec.jsx";

function About() {


  return (
    <>
      <div className="w-full h-[700px] bg-cover bg-top" style={{ backgroundImage: "url(/reservation4.jpg)" }}>
        <Header />
        <div className=" w-full h-full font-cormorant font-bold text-7xl text-white flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[30px] h-[4px] rounded-xl bg-orange-600"></div>
            <p className="text-white text-sm sm:text-base">more info on us</p>
          </div>
          <h1 className="font-cormorant font-bold text-6xl text-white">About</h1>
        </div>
      </div>
      <div className="w-full bg-[#F9F9EE]">
        {/* --- Section 1: Celebrating Local Flavor --- */}
        <section className="py-20 px-6 sm:px-12 lg:px-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancing font-bold mb-10">
            Celebrating Local Flavor
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-6 item-stretch md:item-start">
              <p className="font-cormorant font-bold text-base sm:text-lg lg:text-xl leading-relaxed">
                At Spice Route, we believe that food is more than just sustenance;
                it's a celebration of culture, community, and connection.
                Our mission is to provide an authentic Indian dining experience
                that delights the senses and brings people together.
                We are committed to using the freshest ingredients, traditional cooking techniques,
                and bold flavors to create dishes that are both delicious and memorable.
                Whether you're joining us for a casual meal or a special occasion,
                we strive to make every visit a truly exceptional experience.
              </p>
              <button className="px-6 py-3 bg-black rounded-3xl text-white hover:bg-dark-overlay">
                Explore More
              </button>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-md"
                src="/food-display/food-18.jpg"
                alt="Celebrating Local Flavor"
              />
            </div>
          </div>
        </section>

        {/* --- Section 2: Our Story --- */}
        <section className="bg-[#A0522D] py-20 px-6 sm:px-12 lg:px-20 text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancing font-bold mb-10 text-end">
            Our Story
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            {/* Image */}
            <div className="flex-1">
              <img
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-md"
                src="/food-display/food-16.jpg"
                alt="Our Story"
              />
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col gap-6">
              <p className="font-cormorant font-bold text-base sm:text-lg lg:text-xl leading-relaxed">
                Founded in 2023, Spice Route was born out of a passion for authentic flavors
                and a desire to create a dining experience that transports our guests
                to the vibrant streets of India. Our founders, avid food enthusiasts,
                traveled extensively across India, immersing themselves in the rich
                culinary traditions and diverse flavors of the region.
                Inspired by their experiences, they set out to create a restaurant
                that would bring the essence of Indian cuisine to life, right here
                in our community.
              </p>
            </div>
          </div>
        </section>

        {/* --- Section 3: Meet Our Team --- */}
        <section className="bg-[#F9F9EE] py-20 px-6 sm:px-12 lg:px-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancing font-bold text-center mb-10">
            Meet Our Team
          </h1>

          <p className="font-cormorant text-center max-w-2xl mx-auto mb-12 text-base sm:text-lg lg:text-xl leading-relaxed">
            Get to know the talented individuals who craft the culinary masterpieces at Fresh Harvest.
            Our team is driven by a shared passion for fresh, locally sourced ingredients
            and a commitment to creating memorable dining experiences for our guests.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { name: "Chris Bateman", role: "Head Chef", img: "/chef2.jpg" },
              { name: "Michael Rushmore", role: "Sous Chef", img: "/chef7.jpg" },
              { name: "Patrick Coleman", role: "Pastry Chef", img: "/chef3.jpg" },
              { name: "Emily Johnson", role: "Restaurant Manager", img: "/manager.jpg" },
              { name: "David Wilson", role: "Head Waiter", img: "/chef8.jpg" },
              { name: "James Anderson", role: "Mixologist", img: "/chef5.jpg" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  className="w-full h-[300px] sm:h-[350px] object-cover object-top rounded-md"
                  src={member.img}
                  alt={member.name}
                />
                <h2 className="text-xl font-bold mt-4">{member.name}</h2>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter + Footer */}
        <NewsletterSec />
        <Footer />
      </div>

    </>
  )
}

export default About;