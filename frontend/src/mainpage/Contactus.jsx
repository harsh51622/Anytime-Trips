import Navbar from "../components/pages/Navbar";
import Footer from "../components/pages/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactUs() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12">

      {/* Title */}
      <div className="text-center mb-12">

        <p className="text-sky-500 uppercase tracking-[4px] font-semibold">
          Get In Touch
        </p>

        <h1 className="text-5xl font-bold text-gray-800 mt-3">
          Contact Us
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          We would love to hear from you
        </p>

      </div>

      {/* Main Section */}
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Contact Information
          </h2>

          {/* Email */}
          <div className="flex items-center gap-5 mb-8">

            <div className="bg-sky-100 p-4 rounded-full">
              <Mail className="text-sky-500" />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Email
              </h3>

              <p className="text-gray-500">
                travel@gmail.com
              </p>
            </div>

          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 mb-8">

            <div className="bg-sky-100 p-4 rounded-full">
              <Phone className="text-sky-500" />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Phone
              </h3>

              <p className="text-gray-500">
                +91 9876543210
              </p>
            </div>

          </div>

          {/* Address */}
          <div className="flex items-center gap-5">

            <div className="bg-sky-100 p-4 rounded-full">
              <MapPin className="text-sky-500" />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Address
              </h3>

              <p className="text-gray-500">
                Delhi, India
              </p>
            </div>

          </div>

        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Send Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-xl outline-none focus:border-sky-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-xl outline-none focus:border-sky-500"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-4 rounded-xl outline-none focus:border-sky-500"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border p-4 rounded-xl outline-none focus:border-sky-500"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300"
            >
              <Send size={20} />
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
    <Footer />
    </>
  );
}