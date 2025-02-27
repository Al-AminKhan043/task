import { Link } from "react-router-dom";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import america from "../assets/america.png";
import bkash from "../assets/bkash.png";
import nagad from "../assets/nagad.png";
import upay from "../assets/upay.png";
import paypal from "../assets/paypal.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
    
      <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 flex justify-between items-center z-10 border-b border-gray-300">
        <div className="text-2xl font-bold text-black">Tour Buddy</div>

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

     
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-96">
          <h1 className="text-2xl font-bold mb-6">Choose an Option</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/payment">
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                Payment Page
              </button>
            </Link>
            <Link to="/guide">
              <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
                Guide Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

     
      <footer className="bg-[#1B2B65] text-white py-8 mt-12 w-full">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 max-w-7xl mx-auto">
           
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Tour Buddy</h3>
             
              <select className="w-full py-2 px-3 bg-transparent border border-gray-400 rounded-md text-white cursor-pointer">
                <option value="en-uk">English (UK)</option>
                <option value="en-us">English (US)</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
             
              <select className="w-full py-2 px-3 bg-transparent border border-gray-400 rounded-md text-white cursor-pointer">
                <option value="usd">US Dollar</option>
                <option value="eur">Euro</option>
                <option value="gbp">British Pound</option>
                <option value="bdt">Bangladeshi Taka</option>
              </select>
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
              </ul>
            </div>

            
            <div>
              <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
              <div className="grid grid-cols-4 gap-2">
                <img src={visa} alt="Visa" className="h-8 w-auto bg-white p-1 rounded-lg" />
                <img src={mastercard} alt="Mastercard" className="h-8 w-auto bg-white p-1 rounded-lg" />
                <img src={america} alt="American Express" className="h-8 w-auto bg-white p-1 rounded-lg" />
                <img src={bkash} alt="bKash" className="h-8 w-auto bg-white p-1 rounded-lg" />
                <img src={nagad} alt="Nagad" className="h-8 w-auto bg-white p-1 rounded-lg" />
                <img src={upay} alt="uPay" className="h-8 w-auto bg-white p-1 rounded-lg" />
                <img src={paypal} alt="PayPal" className="h-8 w-auto bg-white p-1 rounded-lg" />
              </div>
              <a href="#" className="text-gray-300 hover:text-white text-sm mt-4 inline-block">
                Become a tour guide for us
              </a>
            </div>
          </div>

         
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mt-8 text-sm text-gray-300">
            <p>© 2025 Tour Buddy. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#"><img src={facebook} alt="Facebook" className="h-6 w-6 opacity-80 hover:opacity-100" /></a>
              <a href="#"><img src={twitter} alt="Twitter" className="h-6 w-6 opacity-80 hover:opacity-100" /></a>
              <a href="#"><img src={instagram} alt="Instagram" className="h-6 w-6 opacity-80 hover:opacity-100" /></a>
              <a href="#"><img src={linkedin} alt="LinkedIn" className="h-6 w-6 opacity-80 hover:opacity-100" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
