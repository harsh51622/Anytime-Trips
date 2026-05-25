import travel from "../assets/travel2.avif";
import React from "react";
import {
  Plane,
  Mail,
  Lock,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

export default function TravelLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">

      {/* MAIN CARD */}
      <div className="w-full max-w-6xl border rounded-[30px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative h-[260px] sm:h-[350px] lg:h-[650px] ">

          {/* IMAGE */}
          <img
            src={travel}
            alt="travel"
            className="w-full h-full "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 "></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-black">

            {/* TOP */}
            <div>

              <div className="flex items-center gap-3">

                <Plane size={28} />

                <h1 className="text-3xl sm:text-4xl font-bold">
                  TravelNest
                </h1>

              </div>

              <p className="mt-5 text-l sm:text-base max-w-sm leading-7">
                Discover beautiful destinations and explore amazing journeys
                around the world.
              </p>

            </div>

            {/* BOTTOM */}
            <div>
              <p className="text-xl sm:text-2xl leading-10 max-w-md font-semibold -mt-6">
  ✈ Luxury stays, adventure trips, and unforgettable memories.
</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16 bg-white">

          <div className="w-full max-w-md">

            {/* HEADING */}
            <div className="mb-8">

              <h2 className="text-4xl sm:text-5xl font-bold text-black">
                Welcome Back
              </h2>

              <p className="text-sm sm:text-base text-black mt-3">
                Login to continue your journey
              </p>

            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* EMAIL */}
              <div>

                <label className="text-sm text-black">
                  Email Address
                </label>

                <div className="mt-2 flex items-center border rounded-2xl px-4 py-3">

                  <Mail size={20} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full ml-3 outline-none text-sm"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-sm text-black">
                  Password
                </label>

                <div className="mt-2 flex items-center border rounded-2xl px-4 py-3">

                  <Lock size={20} />

                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full ml-3 outline-none text-sm"
                  />

                </div>

              </div>

              {/* FORGOT */}
              <div className="flex justify-end">

                <button
                  type="button"
                  className="text-sm text-black"
                >
                  Forgot Password?
                </button>

              </div>

              {/* BUTTON */}
              <button className="w-full bg-black text-white py-3 rounded-2xl text-sm font-semibold hover:scale-[1.02] transition duration-300">
                LOGIN
              </button>

            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-8">

              <div className="flex-1 h-[1px] bg-gray-300"></div>

              <span className="text-sm text-black">
                OR
              </span>

              <div className="flex-1 h-[1px] bg-gray-300"></div>

            </div>

            {/* SOCIAL */}
            <div className="grid grid-cols-3 gap-4">

              <button className="border rounded-2xl py-3 flex items-center justify-center hover:scale-105 transition duration-300">
                <FcGoogle size={24} />
              </button>

              <button className="border rounded-2xl py-3 flex items-center justify-center hover:scale-105 transition duration-300">
                <FaFacebookF size={20} />
              </button>

              <button className="border rounded-2xl py-3 flex items-center justify-center hover:scale-105 transition duration-300">
                <FaApple size={22} />
              </button>

            </div>

            {/* REGISTER */}
            <p className="text-center text-sm text-black mt-8">

              Don’t have an account?{" "}

              <span className="font-semibold cursor-pointer">
                Register Now
              </span>

            </p>

          </div>
        </div>
      </div>
    </div>
  );
}