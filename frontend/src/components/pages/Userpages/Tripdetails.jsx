import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from "../../context/UserContext";
import api from "../../../utils/api"; // ✅ IMPORTANT FIX
import Navbar from "../Navbar"; // ✅ IMPORTANT FIX

export default function Tripdetails() {

    const { id } = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useCart();

    useEffect(() => {

        api.get(`trip/${id}/`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });

    }, [id]);

    // LOADING UI
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-3xl font-bold">
                Loading...
            </div>
        );
    }

    // ERROR UI
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
                {error.message}
            </div>
        );
    }

    // ADD TO CART
    const handleAddToCart = () => {

        if (!data) return;

        addToCart({
            id: data.id,
            name: data.name,
            price: data.amount || 0,
            image: data.image
                ? `https://anytime-trips.onrender.com${data.image}`
                : "",
        });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

                <div className="bg-white max-w-5xl w-full rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

                    {/* IMAGE */}
                    <div className="p-5 flex justify-center items-center bg-gray-50">

                        <img
                            src={
                                data?.image
                                    ? `http://127.0.0.1:8000${data.image}`
                                    : "https://via.placeholder.com/400"
                            }
                            alt={data?.name || "trip"}
                            className="w-full max-w-md h-[400px] object-cover rounded-2xl"
                        />

                    </div>

                    {/* CONTENT */}
                    <div className="p-8 flex flex-col justify-center gap-6">

                        <h1 className="text-4xl font-bold text-gray-800">
                            {data?.name}
                        </h1>

                        <p className="text-gray-600 text-lg leading-8">
                            {data?.destination}
                        </p>

                        <h2 className="text-2xl font-bold text-green-600">
                            {data?.days} Days
                        </h2>

                        <h2 className="text-3xl font-bold text-green-600">
                            ₹ {data?.amount}
                        </h2>

                        <div className="flex gap-4 flex-wrap">

                            {/* ADD TO CART */}
                            <button
                                onClick={handleAddToCart}
                                className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800 duration-300"
                            >
                                Add To Cart
                            </button>

                            <div className='mt-4'>
                                <a
                                    href='/Trips'
                                    className="text-blue-600 hover:underline"
                                >
                                    &larr; Back to Trips
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div></>
    );
}