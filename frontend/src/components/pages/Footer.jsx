import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            
            {/* Logo */}
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 rounded-full object-cover border border-orange-500"
            />

            <div>
              <h1 className="text-2xl font-bold text-orange-500">
                Anytime Trips
              </h1>

              <p className="text-sm text-gray-400">
                Travel & Booking
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-6">
            Book trips, hotels, buses and flights with best prices and amazing
            experience.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="bg-gray-800 hover:bg-orange-500 duration-300 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 hover:bg-pink-500 duration-300 p-2 rounded-full"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-gray-800 hover:bg-sky-500 duration-300 p-2 rounded-full"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-500 duration-300 p-2 rounded-full"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-400">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>

            <Link to="/about" className="hover:text-orange-400">
              About
            </Link>

            <Link to="/contact" className="hover:text-orange-400">
              Contact
            </Link>

            <Link to="/booking" className="hover:text-orange-400">
              Booking
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-400">
            Services
          </h2>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link to="/hotels" className="hover:text-orange-400">
              Hotels
            </Link>

            <Link to="/flights" className="hover:text-orange-400">
              Flights
            </Link>

            <Link to="/buses" className="hover:text-orange-400">
              Buses
            </Link>

            <Link to="/trips" className="hover:text-orange-400">
              Trips
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-400">
            Contact
          </h2>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>📍 Meerut, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ yourfirm@gmail.com</p>
          </div>

          {/* Subscribe */}
          <div className="mt-5">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2.5 rounded-md bg-gray-900 border border-gray-700 outline-none text-sm"
            />

            <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 duration-300 py-2.5 rounded-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm px-4">
        © 2026 Your Firm | All Rights Reserved
      </div>
    </footer>
  );
}