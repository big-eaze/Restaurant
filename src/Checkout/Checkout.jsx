import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDown, MapPin, Mail, User, Building2 } from 'lucide-react';
import PaymentOptions from './PaymentOptions';
import OrderSummary from './OrderSummary';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function Checkout() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("Select Province");
  const [openAddApartment, setOpenAddApartment] = useState(false);

  async function fetchCountries() {
    try {
      const response = await axios.get("https://countriesnow.space/api/v0.1/countries");
      const countryList = response.data.data.map((c) => ({
        country: c.country,
        cities: c.cities
      }));
      setCountries(countryList);
      setFilteredCountries(countryList);
    } catch (err) {
      console.error("error fetching data:", err);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((c) =>
          c.country.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, countries]);

  function handleCountrySelect(countryName) {
    const selectedCountryObj = countries.find(c => c.country === countryName);
    const cities = selectedCountryObj ? selectedCountryObj.cities : [];
    setSelectedCountry(countryName);
    setState(cities);
  }

  return (
    <div className="min-h-screen bg-[#060607]">

      <div className="w-full h-[80px] sm:h-[140px]">
        <Header />
      </div>

      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F1EB] mb-3">
              Checkout
            </h1>
            <p className="text-neutral-400 text-sm">
              Complete your order securely
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              {/* CONTACT INFORMATION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C38E5B]" />
                  </div>
                  <h3 className="text-xl font-serif text-[#F5F1EB]">Contact Information</h3>
                </div>

                <p className="text-neutral-400 text-sm mb-6">
                  We'll use this email to send you details and updates about your order.
                </p>

                <div className="space-y-4">
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    type="email"
                    placeholder="Email address"
                  />
                  <p className="text-xs text-neutral-500">Checking out as a guest</p>
                </div>
              </motion.div>

              {/* BILLING ADDRESS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C38E5B]/10 border border-[#C38E5B]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#C38E5B]" />
                  </div>
                  <h3 className="text-xl font-serif text-[#F5F1EB]">Billing Address</h3>
                </div>

                <p className="text-neutral-400 text-sm mb-6">
                  Enter the billing address that matches your payment method.
                </p>

                <div className="space-y-4">
                  {/* Country Selector */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#F5F1EB] hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all outline-none">
                        <span className="text-sm">{selectedCountry}</span>
                        <ChevronDown className="w-4 h-4 text-neutral-400" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-64 bg-[#0E0F14] border border-white/10 shadow-2xl p-0 rounded-xl overflow-hidden backdrop-blur-xl"
                      sideOffset={8}
                    >
                      <div className="p-3 border-b border-white/10">
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-[#F5F1EB] placeholder:text-neutral-500 outline-none focus:border-[#C38E5B]"
                        />
                      </div>
                      <div className="max-h-48 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country, index) => (
                            <DropdownMenuItem
                              key={index}
                              className="px-4 py-3 text-[#F5F1EB] hover:bg-white/10 cursor-pointer outline-none text-sm"
                              onClick={() => handleCountrySelect(country.country)}
                            >
                              {country.country}
                            </DropdownMenuItem>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-neutral-500 text-sm">No results found</div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                      placeholder="First name"
                    />
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                      placeholder="Last name"
                    />
                  </div>

                  {/* Address */}
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                    placeholder="Street address"
                  />

                  {/* Apartment */}
                  {openAddApartment ? (
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                  ) : (
                    <button
                      onClick={() => setOpenAddApartment(true)}
                      className="text-sm text-[#C38E5B] hover:text-[#D4A574] transition-colors text-left"
                    >
                      + Add apartment, suite, etc.
                    </button>
                  )}

                  {/* Postal, City, State, Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                      placeholder="Postal code"
                    />
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                      placeholder="City"
                    />

                    {/* State Selector */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#F5F1EB] hover:bg-white/10 hover:border-[#C38E5B]/30 transition-all outline-none">
                          <span className="text-sm">{selectedState}</span>
                          <ChevronDown className="w-4 h-4 text-neutral-400" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-64 bg-[#0E0F14] border border-white/10 shadow-2xl p-0 rounded-xl overflow-hidden backdrop-blur-xl"
                        sideOffset={8}
                      >
                        <div className="max-h-48 overflow-y-auto">
                          {state.length > 0 ? (
                            state.map((stateName, index) => (
                              <DropdownMenuItem
                                key={index}
                                className="px-4 py-3 text-[#F5F1EB] hover:bg-white/10 cursor-pointer outline-none text-sm"
                                onClick={() => setSelectedState(stateName)}
                              >
                                {stateName}
                              </DropdownMenuItem>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-neutral-500 text-sm">Select a country first</div>
                          )}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F5F1EB] placeholder:text-neutral-500 focus:outline-none focus:border-[#C38E5B] focus:ring-2 focus:ring-[#C38E5B]/20 transition-all"
                      placeholder="Phone (optional)"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Options */}
              <PaymentOptions />
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:sticky lg:top-6">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;