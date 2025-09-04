import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import PaymentOptions from './PaymentOptions';
import OrderSummary from './OrderSummary';
import Footer from '@/components/Footer';
import Header from '@/components/Header';




function Checkout() {
  //for country/region dropdown
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Select Country");


  //for Province dropdown
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("Select Province");

  //add Apartment, suites, etc.
  const [openAddApartment, setOpenAddApartment] = useState(false);


  async function fetchCountries() {
    try {
      const response = await axios.get("https://countriesnow.space/api/v0.1/countries");
      const countryList = response.data.data.map((c) => (
        {
          country: c.country,
          cities: c.cities
        }
      ));
      setCountries(countryList);
      setFilteredCountries(countryList);
    } catch (err) {
      console.error("error fetching data:", err)
    }
  }
  useEffect(() => {
    fetchCountries();
  }, []);

  // Filter countries when search changes
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
    console.log(cities);
    setSelectedCountry(countryName);
    setState(cities); // Store cities for second dropdown
  };



  return (
    <>
      <div className='w-full h-[80px]  sm:h-[120px] bg-[#A0552D]'>
        <Header />
      </div>
      <div className=' w-full mb-8 p-5'>
        <div className='md:w-[50%] mx-auto flex flex-col gap-6 sm:gap-10'>
          <h1 className=' text-2xl ml-6 md:text-5xl mt-5 sm:mt-10 font-belleza'>CHECKOUT</h1>
          <div className=' flex flex-col  md:flex-row justify-center gap-5'>
            {/* left part */}
            <div className="flex flex-col gap-5 w-full  sm:px-6 lg:px-0">
              {/* CONTACT INFORMATION */}
              <div className="bg-[#f3f2f0] shadow-lg rounded-lg p-4 flex flex-col gap-4 w-full max-w-2xl">
                <h3 className="text-lg font-semibold">CONTACT INFORMATION</h3>
                <span className="text-sm text-gray-600">
                  We'll use this email to send you details and updates about your order.
                </span>
                <div className="flex flex-col gap-2">
                  <input
                    className="shadow-lg p-3 outline-none w-full"
                    type="text"
                    placeholder="Email address"
                  />
                  <span className="text-xs text-gray-500">You are currently out as a guest.</span>
                </div>
              </div>

              {/* BILLING ADDRESS */}
              <div className="bg-[#f3f2f0] shadow-lg rounded-lg p-4  flex flex-col gap-4 w-full max-w-2xl">
                <h3 className="text-lg font-semibold">BILLING ADDRESS</h3>
                <span className="text-sm text-gray-600">
                  Enter the billing address that matches your payment method.
                </span>

                <div className="flex flex-col gap-4">
                  {/* Country Selector */}
                  <div className="w-full">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center justify-between w-full px-4 py-3 text-sm border-[1px] border-black bg-white shadow-sm outline-none">
                          <span>{selectedCountry}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-64 bg-white border shadow-lg p-0 rounded-md custom-scroll"
                        sideOffset={8}
                        side="top"
                      >
                        <div className="p-2">
                          <input
                            type="text"
                            placeholder="Search country..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-3 py-2 mb-2 border rounded-md text-sm outline-none"
                          />
                        </div>
                        <div className="max-h-48 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country, index) => (
                              <DropdownMenuItem
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none"
                                onClick={() => handleCountrySelect(country.country)}
                              >
                                {country.country}
                              </DropdownMenuItem>
                            ))
                          ) : (
                            <div className="px-4 py-2 text-gray-500 text-sm">No results found</div>
                          )}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Name + Address */}
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col sm:flex-row gap-4">
                      <input
                        className="p-3 flex-1 outline-none border"
                        placeholder="First name"
                      />
                      <input
                        className="p-3 flex-1 outline-none border"
                        placeholder="Last name"
                      />
                    </div>
                    <input className="p-3 outline-none border" placeholder="Address" />
                  </div>


                  {openAddApartment ?
                    <input className='p-3 outline-none border' placeholder='Apartment, suite, etc. (optional)' />
                    :
                    <span onClick={() => setOpenAddApartment(true)} className="text-xs cursor-pointer hover:underline">
                      + Add apartment, suite, etc.
                    </span>
                  }

                  {/* Postal + City + State + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="p-3 outline-none border"
                      type="text"
                      placeholder="Postal code"
                    />
                    <input
                      className="p-3 outline-none border"
                      type="text"
                      placeholder="City"
                    />

                    {/* State Selector */}
                    <div className="w-full">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center justify-between w-full px-4 py-3 text-sm border-[1px] border-black bg-white outline-none shadow-sm">
                            <span>{selectedState}</span>
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-64 bg-white border shadow-lg p-0 rounded-md custom-scroll"
                          sideOffset={8}
                          side="top"
                        >
                          <div className="max-h-48 overflow-y-auto">
                            {state.length > 0 ? (
                              state.map((state, index) => (
                                <DropdownMenuItem
                                  key={index}
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none"
                                  onClick={() => setSelectedState(state)}
                                >
                                  {state}
                                </DropdownMenuItem>
                              ))
                            ) : (
                              <div className="px-4 py-2 text-gray-500 text-sm">No province found</div>
                            )}
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <input
                      className="p-3 outline-none border"
                      type="text"
                      placeholder="Phone (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <PaymentOptions />
            </div>

            {/*right part */}

            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout; 