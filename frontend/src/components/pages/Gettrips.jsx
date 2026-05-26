import { useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";

export default function Gettrips({ home = false }) {

    const [trips, setTrips] = useState([]);

    const [user, setUser] = useState(null);


    const getTrips = async () => {

        try {

            const res = await api.get("/get_trips/");

            let data = res.data;

            if (home) {

                data = [...data]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3);
            }

            setTrips(data);

        } catch (err) {

            console.log(err);
        }
    };


    const getProfile = async () => {

        try {

            const res = await api.get(
                "/user_Profile/"
            )

            setUser(res.data)

        } catch (error) {

            console.log(error)
        }
    }


    useEffect(() => {

        getTrips()

        getProfile()

    }, [])


    return (

        <div className="min-h-screen bg-gray-100 p-5">

            <h1 className="text-4xl font-bold mb-8">
                My Trips
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    trips.length === 0
                        ?

                        <p>Loading trips...</p>

                        :

                        trips.map((item) => (

                            <Link

                                key={item.id}

                                to={
                                    user?.role === "agency"

                                        ?

                                        `/trip-details/${item.id}`

                                        :

                                        `/Trips/${item.id}`
                                }
                            >

                                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

    <img
  src={`https://anytime-trips.onrender.com${item.image}`}
  alt=""
  className="w-full h-52 object-cover"
/>

                                    <div className="p-5">

                                        <h2 className="text-2xl font-bold">
                                            {item.name}
                                        </h2>

                                        <p className="text-gray-500 mt-2">
                                            {item.destination}
                                        </p>

                                        <div className="flex justify-between mt-4">

                                            <span className="font-semibold">
                                                {item.days} Days
                                            </span>

                                            <span className="font-bold text-lg text-green-600">
                                                ₹ {item.amount}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </Link>
                        ))
                }

            </div>

        </div>
    );
}
