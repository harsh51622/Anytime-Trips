import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Amit Sharma",
      place: "Delhi",
      review:
        "Amazing service! My trip to Goa was perfectly managed. Very smooth booking experience.",
      rating: 5,
    },
    {
      name: "Neha Verma",
      place: "Mumbai",
      review:
        "Best travel website. Cheap prices and excellent support. Highly recommended!",
      rating: 4,
    },
    {
      name: "Rohit Singh",
      place: "Meerut",
      review:
        "Very good experience. Hotels and trips were exactly as shown. Loved it!",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 px-6 bg-white">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          Real reviews from happy travelers who booked with us.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 mb-4">
              {Array(item.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-6 mb-5">
              "{item.review}"
            </p>

            {/* Name */}
            <h4 className="font-semibold text-gray-800">
              {item.name}
            </h4>

            <p className="text-gray-500 text-sm">{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}