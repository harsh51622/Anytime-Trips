import { useState } from "react";
import api from "../../../utils/api";

export default function CreateTrip() {

    const [trip, setTrip] = useState({
        name: "",
        destination: "",
        days: "",
        amount: "",
        image: null,
    });


    // HANDLE INPUTS
    const handleChange = (e) => {

        if (e.target.name === "image") {

            setTrip({
                ...trip,
                image: e.target.files[0],
            });

        } else {

            setTrip({
                ...trip,
                [e.target.name]: e.target.value,
            });

        }
    };


    // CREATE TRIP
    const createTrip = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("name", trip.name);
            formData.append("destination", trip.destination);
            formData.append("days", trip.days);
            formData.append("amount", trip.amount);
            formData.append("image", trip.image);

            await api.post(

                "/create-trip/",

                formData,

                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert("Trip Added Successfully");
            window.location.reload();

            // CLEAR FORM
            setTrip({
                name: "",
                destination: "",
                days: "",
                amount: "",
                image: null,
            });

        } catch (err) {

            console.log(err);

            alert("Trip Create Failed");
        }
    };



    return (
        <div className="min-h-screen bg-gray-100 p-5">

            <div className="w-full max-w-3xl bg-white rounded-[30px] shadow-xl p-8 mx-auto">

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-black">
                        Create New Trip
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Add your travel package details
                    </p>

                </div>


                <form
                    onSubmit={createTrip}
                    className="space-y-5"
                >

                    <div>

                        <label className="text-sm font-medium">
                            Trip Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={trip.name}
                            onChange={handleChange}
                            placeholder="Enter trip name"
                            className="w-full mt-2 border rounded-2xl p-4 outline-none"
                        />

                    </div>


                    <div>

                        <label className="text-sm font-medium">
                            Destination
                        </label>

                        <input
                            type="text"
                            name="destination"
                            value={trip.destination}
                            onChange={handleChange}
                            placeholder="Enter destination"
                            className="w-full mt-2 border rounded-2xl p-4 outline-none"
                        />

                    </div>


                    <div>

                        <label className="text-sm font-medium">
                            Total Days
                        </label>

                        <input
                            type="number"
                            name="days"
                            value={trip.days}
                            onChange={handleChange}
                            placeholder="Enter total days"
                            className="w-full mt-2 border rounded-2xl p-4 outline-none"
                        />

                    </div>


                    <div>

                        <label className="text-sm font-medium">
                            Amount
                        </label>

                        <input
                            type="number"
                            name="amount"
                            value={trip.amount}
                            onChange={handleChange}
                            placeholder="Enter amount"
                            className="w-full mt-2 border rounded-2xl p-4 outline-none"
                        />

                    </div>


                    <div>

                        <label className="text-sm font-medium">
                            Trip Image
                        </label>

                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="w-full mt-2 border rounded-2xl p-4"
                        />

                    </div>


                    <button
                        type="submit"
                        className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300"
                    >
                        Add Trip
                    </button>

                </form>

            </div>

        </div>
    );
}