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
      className="relative w-full h-[80vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark gradient overlay (better than plain black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white w-full max-w-5xl">

        {/* Tag */}
        <p className="uppercase tracking-[6px] text-sky-300 text-[10px] sm:text-xs md:text-sm mb-4">
          Explore • Travel • Discover
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Find Your <br className="hidden sm:block" />
          Dream Destination
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover amazing trips, beautiful places and unforgettable travel
          experiences across the world with ease and comfort.
        </p>

        {/* SEARCH BOX */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto">

          {/* Input */}
          <div className="flex items-center gap-2 flex-1 px-4 py-3">
            <Search className="text-sky-300" size={20} />

            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-300"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            className="bg-sky-500 hover:bg-sky-600 active:scale-95 transition px-6 py-3 rounded-xl font-semibold shadow-lg w-full sm:w-auto"
          >
            Search
          </button>

        </div>

      </div>
    </div>
  );
}
