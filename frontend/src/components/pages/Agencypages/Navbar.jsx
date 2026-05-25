import logo from "../../../assets/logo.png";

import {
  User,
  LogOut,
  ClipboardList,
  Menu,
  X
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";


export default function Navbar() {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();


  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    localStorage.removeItem("role");

    navigate("/login");
  };


  return (
    <>
      <nav className="w-full bg-white shadow-md px-4 md:px-8 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="w-[140px] md:w-[180px]">

            <img
              src={logo}
              alt="logo"
              className="w-full object-contain"
            />

          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">

            {/* Summary */}
            <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full shadow-md transition duration-300">

              <ClipboardList size={18} />

              <span>Summary</span>

            </button>


            {/* Profile */}
            <button className="flex items-center gap-2 border border-sky-500 text-sky-500 hover:bg-sky-50 px-5 py-2 rounded-full transition duration-300">

              <User size={18} />

              <span>Profile</span>

            </button>


            {/* Logout */}
            <button

              onClick={handleLogout}

              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full shadow-md transition duration-300"
            >

              <LogOut size={18} />

              <span>Logout</span>

            </button>

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >

            {
              open
                ?

                <X size={28} />

                :

                <Menu size={28} />
            }

          </button>

        </div>



        {/* Mobile Menu */}
        {
          open && (

            <div className="flex flex-col gap-4 mt-5 md:hidden">

              {/* Summary */}
              <button className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-2xl shadow-md transition duration-300">

                <ClipboardList size={18} />

                <span>Summary</span>

              </button>


              {/* Profile */}
              <button className="flex items-center justify-center gap-2 border border-sky-500 text-sky-500 hover:bg-sky-50 px-5 py-3 rounded-2xl transition duration-300">

                <User size={18} />

                <span>Profile</span>

              </button>


              {/* Logout */}
              <button

                onClick={handleLogout}

                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl shadow-md transition duration-300"
              >

                <LogOut size={18} />

                <span>Logout</span>

              </button>

            </div>
          )
        }

      </nav>
    </>
  );
}