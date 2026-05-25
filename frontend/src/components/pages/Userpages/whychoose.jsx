import {
  ShieldCheck,
  Wallet,
  Headset,
  MapPin,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Wallet,
      title: "Best Prices",
      desc: "Affordable travel packages with maximum discounts.",
      color: "text-green-500",
    },
    {
      icon: ShieldCheck,
      title: "Secure Booking",
      desc: "Safe payments and trusted travel partners.",
      color: "text-sky-500",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      desc: "We are always here to help you anytime.",
      color: "text-pink-500",
    },
    {
      icon: MapPin,
      title: "Top Destinations",
      desc: "Explore trending and beautiful places worldwide.",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Us
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-base">
          We make your travel experience smooth, safe, and unforgettable with the best services.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`mb-5 ${item.color}`}>
                <Icon size={34} className="group-hover:scale-110 transition duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-600 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}