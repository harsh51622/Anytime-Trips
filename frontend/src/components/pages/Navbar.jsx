import { useState } from "react";
import logo from "../../assets/logo.png";
import {
  Menu,
  X,
  LogOut
} from "lucide-react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import { useCart } from "../context/UserContext";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);


  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    localStorage.removeItem("role");

    navigate("/login");
  };


  return (
    <nav className="w-full bg-[#f9fafb] shadow-[0_6px_25px_rgba(0,0,0,0.10)] px-6 py-4">

      {/* Main Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="w-[190px]">

          <img
            src={logo}
            alt="logo"
            className="w-full object-contain drop-shadow-md"
          />

        </div>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700 text-[19px]">

          <Link
            className="hover:text-sky-600 transition duration-300" to="/home">
            Home
          </Link>


          <Link className="hover:text-sky-600 transition duration-300" to="/about">
            About
          </Link>


          <Link className="hover:text-sky-600 transition duration-300" to="/trips">
            Trips
          </Link>


          <Link className="hover:text-sky-600 transition duration-300" to="/bookings">
            Bookings
          </Link>


          <Link className="hover:text-sky-600 transition duration-300" to="/contactUS">
            Contact
          </Link>

        </div>


        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <Link to="/cart"  className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition">
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>


          {/* History */}
          <Link to="/history" className="hidden md:flex  bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition">
            History
          </Link>


          {/* Logout */}
          <button onClick={handleLogout} className="hidden md:flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition">
            <LogOut size={18} />
            Logout
          </button>


          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800">

            {
              open ? <X size={30} /> : <Menu size={30} />
            }

          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {
        open && (

          <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4 text-gray-700 font-semibold text-[16px]">

            <Link onClick={() => setOpen(false)} to="/home">
              Home
            </Link>


            <Link onClick={() => setOpen(false)} to="/about">
              About
            </Link>


            <Link onClick={() => setOpen(false)} to="/trips">
              Trips
            </Link>


            <Link onClick={() => setOpen(false)} to="/bookings">
              Bookings
            </Link>


            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
            <hr />


            <Link onClick={() => setOpen(false)} to="/history">
              History
            </Link>


            {/* Logout */}
            <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl text-sm font-medium shadow-md transition w-fit">
              <LogOut size={18} />
              Logout
            </button>

          </div>
        )
      }

    </nav>
  );
}
