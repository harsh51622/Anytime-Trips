import api from "../../../utils/api";
import { useState } from "react";
import Navbar from "../Navbar";

export default function Order() {

    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [loading, setLoading] = useState(false);

    const cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];


    const handleOrder = async () => {

        if (!number || !address || !email || !payment) {

            alert("Please fill all fields");
            return;
        }

        try {

            setLoading(true);

            const res = await api.post(

                "checkout/",

                {
                    number,
                    address,
                    email,
                    payment_method: payment,
                    cart
                }
            );

            console.log(res.data);

            alert("Order Success & Email Sent");

            localStorage.removeItem("cart");

        } catch (error) {

    console.log(error.response?.data)

    alert(JSON.stringify(error.response?.data))


            alert("Order Failed");

        } finally {

            setLoading(false);
        }
    };


    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

                <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

                    <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
                        Checkout
                    </h1>


                    {/* PHONE */}
                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">
                            Phone Number
                        </label>

                        <input

                            type="text"

                            placeholder="Enter Phone Number"

                            value={number}

                            onChange={(e) =>
                                setNumber(e.target.value)
                            }

                            className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-500"
                        />

                    </div>


                    {/* EMAIL */}
                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">
                            Email
                        </label>

                        <input

                            type="email"

                            placeholder="Enter Email"

                            value={email}

                            onChange={(e) =>
                                setEmail(e.target.value)
                            }

                            className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-500"
                        />

                    </div>


                    {/* ADDRESS */}
                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">
                            Address
                        </label>

                        <textarea

                            placeholder="Enter Address"

                            value={address}

                            onChange={(e) =>
                                setAddress(e.target.value)
                            }

                            rows="4"

                            className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-500"
                        />

                    </div>


                    {/* PAYMENT */}
                    <div className="mb-6">

                        <label className="block mb-2 font-semibold">
                            Payment Method
                        </label>

                        <select

                            value={payment}

                            onChange={(e) =>
                                setPayment(e.target.value)
                            }

                            className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-500"
                        >

                            <option value="">
                                Select Payment Method
                            </option>

                            <option value="UPI">
                                UPI
                            </option>

                            <option value="CARD">
                                Card
                            </option>

                            <option value="NETBANKING">
                                Net Banking
                            </option>

                        </select>

                    </div>


                    {/* BUTTON */}
                    <button

                        onClick={handleOrder}

                        disabled={loading}

                        className="w-full bg-green-600 hover:bg-green-700 duration-300 text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50"
                    >

                        {
                            loading
                                ?
                                "Processing..."
                                :
                                "Place Order"
                        }

                    </button>

                </div>

            </div>
        </>
    );
}