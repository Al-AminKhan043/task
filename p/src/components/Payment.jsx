import pays from "../assets/pay.png"
import visa from "../assets/visa.png"
import mastercard from "../assets/mastercard.png"
import america from "../assets/america.png"
import bkash from "../assets/bkash.png"
import nagad from "../assets/nagad.png"
import upay from "../assets/upay.png"
import paypal from "../assets/paypal.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"

const Payment = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 flex justify-between items-center z-10 border-b border-gray-300">
       
        <div className="text-2xl font-bold text-black">
          Tour Buddy
        </div>

       
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-black hover:text-gray-600">Home</a></li>
            <li><a href="#" className="text-black hover:text-gray-600">About Us</a></li>
            <li><a href="#" className="text-black hover:text-gray-600">Our Most Rated Guides</a></li>
            <li><a href="#" className="text-black hover:text-gray-600">Our Package</a></li>
            <li><a href="#" className="text-black hover:text-gray-600">Most Desired Places</a></li>
          </ul>

          <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
            Sign Up
          </button>
        </div>
      </nav>

     
      <div className="mt-20 w-full px-6">
        <h1 className="text-left text-3xl font-bold">Payment</h1>

        <div className="mt-8 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-left">Choose Payment Method</h2>

          <div className="flex justify-between items-start gap-8">
           
            <form className="space-y-4 w-2/3">
              <div className="w-full">
                <label htmlFor="name" className="block text-lg text-left">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:shadow-md transition-shadow bg-gray-50"
                />
              </div>

              <div className="w-full">
                <label htmlFor="transactionId" className="block text-lg text-left">Transaction ID</label>
                <input
                  type="text"
                  id="transactionId"
                  placeholder="Enter your transaction ID"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:shadow-md transition-shadow bg-gray-50"
                />
              </div>

              <div className="w-full">
                <label htmlFor="phone" className="block text-lg text-left">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:shadow-md transition-shadow bg-gray-50"
                />
              </div>

              <div className="w-full">
                <label htmlFor="pin" className="block text-lg text-left">Pin</label>
                <input
                  type="password"
                  id="pin"
                  placeholder="Enter your pin"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:shadow-md transition-shadow bg-gray-50"
                />
              </div>

              
              <div className="mb-6">
                <p className="text-lg font-semibold mb-2 text-left">Select Method</p>
                <div className="flex space-x-4">
                  <button type="button" className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    bKash
                  </button>
                  <button type="button" className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    Nagad
                  </button>
                  <button type="button" className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    uPay
                  </button>
                  <button type="button" className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    Visa
                  </button>
                  <button type="button" className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    Mastercard
                  </button>
                  <button type="button" className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>
                    Others
                  </button>
                </div>
              </div>

              
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="w-1/4 mt-6 bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors"
                >
                  Confirm Payment
                </button>
              </div>

            
              <div className="mt-8 w-full flex justify-center">
                <div className="grid grid-cols-7 gap-4 place-items-center max-w-3xl">
                  
                  <img src={visa} alt="Visa" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1" />
                  <img src={mastercard} alt="Mastercard" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1" />
                  <img src={america} alt="American Express" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1" />
                  <img src={bkash} alt="bKash" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1" />
                  <img src={nagad} alt="Nagad" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1" />
                  <img src={upay} alt="uPay" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1" />
                  <img src={paypal} alt="PayPal" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1" />
                </div>
              </div>
            </form>

       
            <div className="w-52 h-52">  
              <img
                src={pays}
                alt="Payment Description"
                className="w-full h-full object-cover rounded-3xl shadow-md border-2 border-black" 
              />
            </div>
          </div>
        </div>
      </div>

    
      <footer className="bg-[#1B2B65] text-white py-8 mt-12 w-screen">
        <div className="container mx-auto px-6">  
          <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
          
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Tour Buddy</h3>
              
              
              <div className="relative inline-block w-40">
                <select className="w-full py-2 px-3 bg-transparent border border-gray-400 rounded-md appearance-none cursor-pointer text-white">
                  <option value="en-uk" className="text-white bg-[#1B2B65]">English (UK)</option>
                  <option value="en-us" className="text-white bg-[#1B2B65]">English (US)</option>
                  <option value="es" className="text-white bg-[#1B2B65]">Spanish</option>
                  <option value="fr" className="text-white bg-[#1B2B65]">French</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
                </div>
              </div>

              
              <div className="relative inline-block w-40">
                <select className="w-full py-2 px-3 bg-transparent border border-gray-400 rounded-md appearance-none cursor-pointer text-white">
                  <option value="usd" className="text-white bg-[#1B2B65]">US Dollar</option>
                  <option value="eur" className="text-white bg-[#1B2B65]">Euro</option>
                  <option value="gbp" className="text-white bg-[#1B2B65]">British Pound</option>
                  <option value="bdt" className="text-white bg-[#1B2B65]">Bangladeshi Taka</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
                </div>
              </div>
            </div>

           
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="text-white font-bold hover:text-gray-300">Payment</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Press Room</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>

          
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="text-white font-bold hover:text-gray-300">Help</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sitemap</a></li>
              </ul>
            </div>

           
            <div className="relative flex flex-col h-full">
              <div>
                <h3 className="text-xl font-bold mb-4">Payment Methods Possible</h3>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <img src={visa} alt="Visa" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1 bg-white" />
                  <img src={mastercard} alt="Mastercard" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1 bg-white" />
                  <img src={america} alt="American Express" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1 bg-white" />
                  <img src={bkash} alt="bKash" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1 bg-white" />
                  <img src={nagad} alt="Nagad" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1 bg-white" />
                  <img src={upay} alt="uPay" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1 bg-white" />
                  <img src={paypal} alt="PayPal" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 border border-gray-300 rounded-lg p-1 bg-white" />
                </div>
                <a href="#" className="text-gray-300 hover:text-white text-sm block">
                  Become a tour guide for us
                </a>
              </div>
            </div>
          </div>
          
          
          <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto mt-8">
            <div className="text-gray-300 text-sm">
              © 2025 Tour Buddy. All rights reserved.
            </div>
            <div className="col-start-2"></div>
            <div className="col-start-3"></div>
            <div className="flex gap-4 justify-start">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={linkedin} alt="Pinterest" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Payment;
