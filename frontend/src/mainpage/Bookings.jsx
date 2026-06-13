import Navbar from "../components/pages/Navbar";
import Footer from "../components/pages/Footer";


import { useState } from "react";
import {
  Search,
  Plane,
  Train,
  Bus,
  Hotel,
  MapPin,
  CalendarDays,
} from "lucide-react";

export default function BookingPage() {
  

  const [bookingType, setBookingType] = useState("flights");

  return (
    <>
  <Navbar />

    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-[90%] max-w-6xl">

          {/* Title */}
          <div className="text-center text-white mb-10">

            <p className="uppercase tracking-[5px] text-sky-300 mb-3">
              Explore The World
            </p>

            <h1 className="text-5xl md:text-7xl font-bold">
              Book of Your Journey
            </h1>

            <p className="mt-5 text-lg text-gray-200">
              Flights, Hotels, Trains, Buses & Amazing Destinations
            </p>

          </div>

          {/* Booking Box */}
          <div className="bg-white rounded-3xl shadow-2xl p-6">

            {/* Booking Types */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">

              <button
                onClick={() => setBookingType("flights")}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition duration-300 ${
                  bookingType === "flights"
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <Plane size={20} />
                Flights
              </button>

              <button
                onClick={() => setBookingType("trains")}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition duration-300 ${
                  bookingType === "trains"
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <Train size={20} />
                Trains
              </button>

              <button
                onClick={() => setBookingType("buses")}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition duration-300 ${
                  bookingType === "buses"
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <Bus size={20} />
                Buses
              </button>

              <button
                onClick={() => setBookingType("hotels")}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition duration-300 ${
                  bookingType === "hotels"
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <Hotel size={20} />
                Hotels
              </button>

            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* From */}
              <div className="border rounded-2xl p-4">

                <p className="text-gray-500 text-sm mb-2">
                  From
                </p>

                <div className="flex items-center gap-3">
                  <MapPin className="text-sky-500" />

                  <input
                    type="text"
                    placeholder="Departure City"
                    className="outline-none w-full"
                  />
                </div>

              </div>

              {/* To */}
              <div className="border rounded-2xl p-4">

                <p className="text-gray-500 text-sm mb-2">
                  To
                </p>

                <div className="flex items-center gap-3">
                  <MapPin className="text-sky-500" />

                  <input
                    type="text"
                    placeholder="Destination"
                    className="outline-none w-full"
                  />
                </div>

              </div>

              {/* Date */}
              <div className="border rounded-2xl p-4">

                <p className="text-gray-500 text-sm mb-2">
                  Date
                </p>

                <div className="flex items-center gap-3">
                  <CalendarDays className="text-sky-500" />

                  <input
                    type="date"
                    className="outline-none w-full"
                  />
                </div>

              </div>

              {/* Search Button */}
              <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold transition duration-300">

                <Search size={24} />
                Search

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Popular Destinations */}
      <div className="w-[85%] mx-auto py-20">

        <div className="text-center mb-14">

          <p className="text-sky-500 uppercase tracking-[4px] font-semibold">
            Popular Places
          </p>

          <h2 className="text-5xl font-bold text-gray-800 mt-3">
            Top Destinations
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card */}
          {[
            {
              name: "Goa",
              image:
                "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
            },
            {
              name: "Manali",
              image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            },
            {
              name: "Dubai",
              image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
            },
            {
              name: "Paris",
              image:
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
            },
          ].map((place, index) => (

            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
            >

              <img
                src={place.image}
                alt={place.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-6">

                <h3 className="text-white text-3xl font-bold">
                  {place.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
    <Footer />
    </>
  );
}