import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      navigate("/trips", { state: { query: search } });
    } else {
      navigate("/trips");
    }
  };

  return (
    <div
      className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Box (Centered with side space) */}
      <div className="relative z-10 text-center text-white w-full max-w-6xl">

        {/* Tagline */}
        <p className="uppercase tracking-[5px] text-sky-300 mb-4 text-xs sm:text-sm">
          Explore • Travel • Discover
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          Find Your <br />
          Dream Destination
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
          Discover amazing trips, beautiful places and unforgettable travel
          experiences across the world.
        </p>

        {/* Search Box */}
        <div className="mt-10 flex flex-col sm:flex-row items-center bg-white/90 backdrop-blur-md rounded-full shadow-2xl overflow-hidden max-w-3xl mx-auto">

          <div className="flex items-center w-full sm:flex-1 px-4 py-3">
            <Search className="text-gray-500" size={20} />

            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 outline-none bg-transparent"
            />
          </div>

          <button
            onClick={handleSearch}
            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 font-semibold transition"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
}