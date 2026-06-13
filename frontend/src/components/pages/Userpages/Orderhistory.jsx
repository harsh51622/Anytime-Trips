import { useEffect, useState } from "react"
import api, { getImageUrl } from "../../../utils/api"
import  Navbar from "../Navbar";

export default function OrderHistory() {

    const [orders, setOrders] = useState([])

    const [loading, setLoading] = useState(true)


    useEffect(() => {

        fetchOrders()

    }, [])


    const fetchOrders = async () => {

        try {

            const res = await api.get(
                "order-history/"
            )

            setOrders(res.data)

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)
        }
    }


    if (loading) {

        return (

            <h1 className="text-center mt-10 text-2xl font-bold">
                Loading...
            </h1>
        )
    }


    return (
        <>
        <Navbar />

        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
                My Orders
            </h1>


            {
                orders.length === 0
                    ?

                    <h2 className="text-center text-xl">
                        No Orders Found
                    </h2>

                    :

                    <div className="max-w-5xl mx-auto space-y-8">

                        {
                            orders.map((order) => (

                                <div

                                    key={order.id}

                                    className="bg-white shadow-xl rounded-3xl p-6"
                                >

                                    <div className="flex justify-between items-center mb-5">

                                        <div>

                                            <h2 className="text-2xl font-bold">
                                                Order #{order.id}
                                            </h2>

                                            <p className="text-gray-500">
                                                {order.created_at}
                                            </p>

                                        </div>


                                        <div className="text-right">

                                            <p className="font-semibold">
                                                Payment:
                                                {" "}
                                                {order.payment_method}
                                            </p>

                                            <p className="text-green-600 font-bold text-xl">
                                                ₹ {order.total_price}
                                            </p>

                                        </div>

                                    </div>


                                    <div className="mb-4">

                                        <p className="font-semibold">
                                            Address:
                                        </p>

                                        <p className="text-gray-600">
                                            {order.address}
                                        </p>

                                    </div>


                                    <h3 className="text-xl font-bold mb-4">
                                        Trips
                                    </h3>

<div className="space-y-4">

    {
        order.items.map((item) => (

            <div
                key={item.id}
                className="flex items-center gap-5 border rounded-2xl p-4 bg-gray-50"
            >

                <img
                    src={getImageUrl(item.trips?.image) || "https://via.placeholder.com/150"}
                    alt="trip"
                    className="w-28 h-20 object-cover rounded-xl"
                />

                <div className="flex-1">

                    <h2 className="text-lg font-bold">
                        {item.trips?.name || "Trip Name Not Found"}
                    </h2>

                    <p className="text-gray-500">
                        Members: {item.quantity}
                    </p>

                </div>

            </div>
        ))
    }

</div>
                                </div>
                            ))
                        }

                    </div>
            }

        </div>
        </>
    )
}