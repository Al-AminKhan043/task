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
import star from "../assets/star.png"
import emptystar from '../assets/emptystar.png'
import monim from '../assets/monim.jpg'
import clock from '../assets/clock.png'
import audience from '../assets/audience.png'
import car from '../assets/car.png'
import expertise from '../assets/expertise.png'
import language from '../assets/internet.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'

const Guide = () => {
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

     
      <div className="mt-20 p-6">
       
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Selected Guide:</h2>

       
        <div className="flex items-center justify-between gap-4 bg-white shadow-md rounded-lg p-6 w-full max-w-6xl mb-4">
         
          <div className="flex items-center gap-6"> 
          
            <div className="w-20 h-20 rounded-full overflow-hidden"> 
              <img 
                src={monim}
                alt="Guide Profile"
                className="w-full h-full object-cover"
              />
            </div>

         
            <div className="flex flex-col gap-2 min-w-[500px]"> 
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                Kuakata
              </button>
              <span className="text-lg font-semibold text-gray-800">
                Monim Hossain
              </span>
          
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <img src={clock} alt="Duration" className="h-4 w-4" />
                  <span>2 hour</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1">
                  <img src={car} alt="Transport" className="h-4 w-4" />
                  <span>Transport</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1">
                  <img src={audience} alt="Group" className="h-4 w-4" />
                  <span>Family Plan</span>
                </div>
              </div>
              
            
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <img src={language} alt="Languages" className="h-4 w-4" />
                  <span>English, Bengali</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1">
                  <img src={location} alt="Location" className="h-4 w-4" />
                  <span>Dhaka</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1">
                  <img src={expertise} alt="Experience" className="h-4 w-4" />
                  <span>1.5 years</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1">
                  <img src={phone} alt="Phone" className="h-4 w-4" />
                  <span>017-5544</span>
                </div>
              </div>
            </div>
          </div>

         
          <div className="h-16 w-px bg-gray-300"></div>

        
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
             
              <div className="flex items-center gap-2">
                <div className="flex">
                  <img src={star} alt="Full Star" className="h-4 w-4" />
                  <img src={star} alt="Full Star" className="h-4 w-4" />
                  <img src={star} alt="Full Star" className="h-4 w-4" />
                  <img src={star} alt="Full Star" className="h-4 w-4" />
                  <img src={emptystar} alt="Empty Star" className="h-4 w-4" />
                </div>
                <span className="text-gray-600 text-sm">(621 reviews)</span>
              </div>

              <span className="text-green-500 font-semibold text-lg">
                TK 350.00 / person
              </span>
            </div>

          
            <button className="bg-green-500 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-green-600 transition-colors shadow-md">
              Hire Me
            </button>
          </div>
        </div>

       
        <div className="w-full max-w-6xl mb-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800">Customer Reviews</h2>
            
          
            <div className="p-6">
              <div className="space-y-3 min-w-[400px]">
          
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 min-w-[120px]">Guide</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-gray-800 font-semibold min-w-[40px]">4.0</span>
                </div>

             
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 min-w-[120px]">Transportation</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-gray-800 font-semibold min-w-[40px]">4.5</span>
                </div>

              
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 min-w-[120px]">Value for Money</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-gray-800 font-semibold min-w-[40px]">3.5</span>
                </div>

            
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 min-w-[120px]">Safety</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-gray-800 font-semibold min-w-[40px]">4.0</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-8">
           
            <div className="flex items-start gap-4 p-4 border-b border-gray-200">
             
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://i.pravatar.cc/100"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-6 flex-1">
               
                <div className="flex flex-col gap-2 min-w-[150px]">
                
                  <div className="flex gap-1">
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={emptystar} alt="Empty Star" className="h-4 w-4" />
                  </div>

                
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">Sarah Johnson</span>
                    <span className="text-sm text-gray-500">February 15, 2025</span>
                  </div>
                </div>

              
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-800">Outstanding Tour Experience with a Knowledgeable Guide!</h4>
                    <span className="text-sm">
                      helpful? <span className="text-green-500 hover:cursor-pointer">yes</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our guide was incredibly knowledgeable and made the tour both entertaining and informative. 
                    His attention to detail and friendly personality made our trip memorable. Would highly recommend!
                  </p>
                </div>
              </div>
            </div>

         
            <div className="flex items-start gap-4 p-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://i.pravatar.cc/101"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-6 flex-1">
                <div className="flex flex-col gap-2 min-w-[150px]">
                  <div className="flex gap-1">
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={emptystar} alt="Empty Star" className="h-4 w-4" />
                    <img src={emptystar} alt="Empty Star" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">John Martinez</span>
                    <span className="text-sm text-gray-500">February 20, 2025</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-800">Good Experience but Room for Improvement</h4>
                    <span className="text-sm">
                      helpful? <span className="text-green-500 hover:cursor-pointer">yes</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The tour was generally good, and the guide was friendly. However, the timing could have been better managed. 
                    Some locations felt rushed while we spent too much time at others.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="flex items-start gap-4 p-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://i.pravatar.cc/102"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-6 flex-1">
                <div className="flex flex-col gap-2 min-w-[150px]">
                  <div className="flex gap-1">
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">Emma Wilson</span>
                    <span className="text-sm text-gray-500">February 23, 2025</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-800">Exceptional Service and Amazing Local Knowledge!</h4>
                    <span className="text-sm">
                      helpful? <span className="text-green-500 hover:cursor-pointer">yes</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    This was the highlight of our trip! The guide's knowledge of local history and culture was impressive.
                    They went above and beyond to make sure everyone was comfortable and engaged throughout the tour.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="flex items-start gap-4 p-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://i.pravatar.cc/103"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-6 flex-1">
                <div className="flex flex-col gap-2 min-w-[150px]">
                  <div className="flex gap-1">
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={star} alt="Full Star" className="h-4 w-4" />
                    <img src={emptystar} alt="Empty Star" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">Raj Patel</span>
                    <span className="text-sm text-gray-500">February 25, 2025</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-800">Great Family Experience with Safe Transport</h4>
                    <span className="text-sm">
                      helpful? <span className="text-green-500 hover:cursor-pointer">yes</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Perfect tour for families! The guide was patient with our kids and made the historical sites interesting for all ages.
                    Transportation was comfortable and safe. Would definitely recommend for family trips.
                  </p>
                </div>
              </div>
            </div>

         
            <div className="flex justify-center mt-6">
              <span className="text-green-500 hover:text-green-600 cursor-pointer font-medium">
                View more comments
              </span>
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

export default Guide;

