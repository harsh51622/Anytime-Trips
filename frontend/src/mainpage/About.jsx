import Nabar from "../components/pages/Navbar";
import Footer from "../components/pages/Footer";

import {
  Globe,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function About() {

  return (
    <>
      <Nabar />
      <div className="min-h-screen bg-gray-100">

        {/* Hero Section */}
        <div
          className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-5">

            <p className="uppercase tracking-[5px] text-sky-300 mb-3">
              Discover The World
            </p>

            <h1 className="text-6xl font-bold">
              About Us
            </h1>

            <p className="mt-5 text-lg text-gray-200 max-w-3xl">
              We help travelers explore amazing destinations
              with unforgettable experiences and affordable trips.
            </p>

          </div>
        </div>

        {/* About Section */}
        <div className="w-[85%] mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
              alt="travel"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <p className="text-sky-500 uppercase tracking-[4px] font-semibold">
              Who We Are
            </p>

            <h2 className="text-5xl font-bold text-gray-800 mt-4 leading-tight">
              Your Trusted Travel Partner
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              We are passionate about making travel simple,
              exciting, and affordable for everyone. Our platform
              connects travelers with the best trips, destinations,
              and travel agencies to create memorable journeys.
            </p>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              Whether you dream of mountains, beaches, deserts,
              or international adventures, we bring the perfect
              travel experience directly to you.
            </p>

          </div>

        </div>

        {/* Features */}
        <div className="w-[85%] mx-auto pb-20">

          <div className="text-center mb-14">

            <p className="text-sky-500 uppercase tracking-[4px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-gray-800 mt-3">
              Best Travel Experience
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition duration-300">

              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="text-sky-500" size={35} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Easy Booking
              </h3>

              <p className="text-gray-500">
                Book your dream trips quickly and easily.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition duration-300">

              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-sky-500" size={35} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Safe Travel
              </h3>

              <p className="text-gray-500">
                Your safety and comfort are always our priority.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition duration-300">

              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-sky-500" size={35} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Worldwide Tours
              </h3>

              <p className="text-gray-500">
                Explore destinations across the world.
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition duration-300">

              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-sky-500" size={35} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Happy Travelers
              </h3>

              <p className="text-gray-500">
                Thousands of travelers trust our services.
              </p>

            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}