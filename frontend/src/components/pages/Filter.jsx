import { useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";

export default function TripsFilterPage() {

  const [trips, setTrips] = useState([]);

  const [filters, setFilters] = useState({
    search: "",
    destination: "",
    days: "",
    price: "",
  });

  // Get Trips
  const getTrips = async () => {
    try {
      const res = await api.get("/get_trips/");
      setTrips(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  // Filter Trips
  const filteredTrips = trips.filter((item) => {

    return (
      item.name.toLowerCase().includes(filters.search.toLowerCase()) &&

      item.destination
        .toLowerCase()
        .includes(filters.destination.toLowerCase()) &&

      (filters.days === "" || item.days <= filters.days) &&

      (filters.price === "" || item.amount <= filters.price)
    );

  });

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      {/* Title */}
      <h1 className="text-5xl font-bold text-center text-sky-500 mb-10">
        Search Your Destination
      </h1>

      {/* Filter Box */}
      <div className="w-[80%] mx-auto bg-white p-6 rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

        {/* Search */}
        <input
          type="text"
          placeholder="Search Trip"
          className="border p-4 rounded-xl outline-none focus:border-sky-500"
          onChange={(e) =>
            setFilters({
              ...filters,
              search: e.target.value,
            })
          }
        />

        {/* Destination */}
        <input
          type="text"
          placeholder="Destination"
          className="border p-4 rounded-xl outline-none focus:border-sky-500"
          onChange={(e) =>
            setFilters({
              ...filters,
              destination: e.target.value,
            })
          }
        />

        {/* Days */}
        <input
          type="number"
          placeholder="Max Days"
          className="border p-4 rounded-xl outline-none focus:border-sky-500"
          onChange={(e) =>
            setFilters({
              ...filters,
              days: e.target.value,
            })
          }
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="border p-4 rounded-xl outline-none focus:border-sky-500"
          onChange={(e) =>
            setFilters({
              ...filters,
              price: e.target.value,
            })
          }
        />

      </div>

      {/* Trips */}
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {filteredTrips.map((item) => (

          <Link
            key={item.id}
            to={`/Trips/${item.id}`}
          >

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

              {/* Image */}
              <img
                src={`http://127.0.0.1:8000${item.image}`}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  📍 {item.destination}
                </p>

                <div className="flex justify-between mt-4">

                  <span className="bg-sky-100 text-sky-600 px-4 py-1 rounded-full">
                    {item.days} Days
                  </span>

                  <span className="text-2xl font-bold text-sky-500">
                    ₹ {item.amount}
                  </span>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}