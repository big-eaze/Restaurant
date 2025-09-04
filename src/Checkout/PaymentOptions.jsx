import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';


const PaymentOptions = () => {

  //payment states
  const [selectedPayment, setSelectedPayment] = useState('bank');
  const [addNote, setAddNote] = useState(false);

  const options = [
    {
      value: 'bank',
      label: 'Direct bank transfer',
      description:
        'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
    },
    { value: 'check', label: 'Check payments', description: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode" },
    { value: 'cod', label: 'Cash on delivery', description: "Pay with cash upon delivery" },
  ];


  return (
    <div className="w-full  space-y-6">
      {/* Payment Options */}
      <div className="bg-[#f5f4f2] w-full rounded-md shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">PAYMENT OPTIONS</h2>

        {options.map((option) => (
          <label
            key={option.value}
            className={`block cursor-pointer border ${selectedPayment === option.value
                ? "border-black bg-transparent"
                : "border-transparent"
              }`}
          >
            <div className="p-4 flex flex-col border border-gray-200">
              <div className="w-full flex gap-3">
                {/* Custom Radio */}
                <span
                  className={`w-5 h-5 border flex items-center justify-center ${selectedPayment === option.value
                      ? "border-black"
                      : "border-gray-400"
                    }`}
                >
                  {selectedPayment === option.value && (
                    <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                  )}
                </span>

                <span className="text-sm">{option.label}</span>
              </div>

              {selectedPayment === option.value && option.description && (
                <p className="text-sm text-gray-600 mt-2">{option.description}</p>
              )}
            </div>

            {/* Hidden Radio Input */}
            <input
              type="radio"
              name="payment"
              value={option.value}
              checked={selectedPayment === option.value}
              onChange={() => setSelectedPayment(option.value)}
              className="hidden"
            />
          </label>
        ))}
      </div>

      {/* Add Note */}
      <div className="bg-[#f5f4f2] rounded-md shadow-sm p-4">
        <label>
          <div className="flex items-center gap-2 cursor-pointer">
            <span
              className={`w-5 h-5 border flex items-center justify-center ${addNote ? "border-black" : "border-gray-400"
                }`}
            >
              {addNote && (
                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
              )}
            </span>

            <input
              type="checkbox"
              checked={addNote}
              value="add"
              onChange={() => setAddNote(!addNote)}
              className="hidden"
            />
            <span className="text-sm">Add a note to your order</span>
          </div>

          {addNote && (
            <textarea
              className="w-full h-40 outline-none resize-none text-sm sm:text-base p-3 mt-2 border-2"
              placeholder="Note about your order"
            />
          )}
        </label>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-7">
        <div className="h-[1px] bg-gray-200 mt-6"></div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-gray-500 text-center">
            By proceeding with your purchase you agree to our Terms and Conditions
            and Privacy Policy
          </p>

          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 p-3">
            {/* Return to Cart */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
              <FaArrowLeft className="text-sm" />
              <span className="text-sm">Return to Cart</span>
            </div>

            {/* Place Order Button */}
            <button className="w-full sm:w-auto py-3 px-10 bg-[#A0552D] text-white text-sm uppercase font-medium rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PaymentOptions;