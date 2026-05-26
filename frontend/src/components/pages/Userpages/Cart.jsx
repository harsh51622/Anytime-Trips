import { Link } from "react-router-dom";
import { useCart } from "../../context/UserContext";
import { useNavigate } from "react-router-dom"
import  Navbar from "../Navbar";



export default function Cart() {
  const navigate = useNavigate()

  const {
    increaseQty,
    decreaseQty,
    removeItem,
    cartItems,
  } = useCart();

  // SAFE TOTAL PRICE (no crash if price missing)
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return total + price * qty;
  }, 0);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Shopping Cart
        </h1>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

            <h2 className="text-2xl font-semibold mb-4">
              Your Cart Is Empty
            </h2>

            <p className="text-gray-500 mb-6">
              Add some trips to continue
            </p>

            <Link
              to="/Trips"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 duration-300"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="space-y-6">

            {/* CART ITEMS */}
            {cartItems.map((item) => {

              const price = Number(item.price) || 0;
              const qty = Number(item.quantity) || 0;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center justify-between gap-6"
                >

                  {/* IMAGE */}
                  <div className="w-28 h-28 overflow-hidden rounded-xl bg-gray-200">

                    {item.image ? (
                      <img
                       src={`https://anytime-trips.onrender.com${item.image}`}
                        alt={item.name || "trip"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                        No Image
                      </div>
                    )}

                  </div>

                  {/* DETAILS */}
                  <div className="flex-1 text-center md:text-left">

                    <h2 className="text-2xl font-semibold">
                      {item.name || "Unknown Trip"}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      ₹{price}
                    </p>

                  </div>

                  {/* QTY */}
                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-10 h-10 rounded-full bg-red-500 text-white text-2xl hover:bg-red-600 duration-300"
                    >
                      -
                    </button>

                    <span className="text-xl font-bold">
                      {qty}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-10 h-10 rounded-full bg-green-500 text-white text-2xl hover:bg-green-600 duration-300"
                    >
                      +
                    </button>

                  </div>

                  {/* SUBTOTAL */}
                  <div className="text-center">

                    <p className="text-lg font-bold">
                      ₹{price * qty}
                    </p>

                    <p className="text-sm text-gray-500">
                      Subtotal
                    </p>

                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 duration-300"
                  >
                    Remove
                  </button>

                </div>
              );
            })}

            {/* TOTAL */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-5">

              <div>
                <h2 className="text-3xl font-bold">
                  Total: ₹{totalPrice.toLocaleString("en-IN")}
                </h2>

                <p className="text-gray-500 mt-1">
                  Including all items
                </p>
              </div>

              <div className="flex gap-4">

                <Link
                  to="/Trips"
                  className="bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 duration-300"
                >
                  Back
                </Link>


                <button

                  onClick={() => navigate("/order")}

                  disabled={cartItems.length === 0}

                  className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 duration-300 disabled:opacity-50"
                >

                  Checkout

                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
    </>
  );
}