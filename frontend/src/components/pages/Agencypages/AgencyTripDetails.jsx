import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api, { getImageUrl } from "../../../utils/api"
import Navbar from "../Agencypages/Navbar"

export default function AgencyTripDetails() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [trip, setTrip] = useState(null)


    useEffect(() => {

        fetchTrip()

    }, [])


    const fetchTrip = async () => {

        try {

            const res = await api.get(
                `gettripid/${id}/`
            )

            console.log(res.data)

            setTrip(res.data)

        } catch (error) {

            console.log(error)
        }
    }


    const handleChange = (e) => {

        const { name, value, files } = e.target

        if (name === "image") {

            setTrip({
                ...trip,
                image: files[0]
            })

        } else {

            setTrip({
                ...trip,
                [name]: value
            })
        }
    }


    const handleUpdate = async (e) => {

        e.preventDefault()

        try {

            const formData = new FormData()

            formData.append("name", trip.name)

            formData.append(
                "destination",
                trip.destination
            )

            formData.append(
                "days",
                trip.days
            )

            formData.append(
                "amount",
                trip.amount
            )

            if (trip.image instanceof File) {

                formData.append(
                    "image",
                    trip.image
                )
            }

            await api.put(
                `update-trip/${id}/`,
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data"
                    }
                }
            )

            alert("Trip Updated")

        } catch (error) {

            console.log(error)
        }
    }


    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            "Delete this trip?"
        )

        if (!confirmDelete) return

        try {

            await api.delete(
                `delete-trip/${id}/`
            )

            alert("Trip Deleted")

            navigate("/agency-dashboard")

        } catch (error) {

            console.log(error)
        }
    }


    if (!trip) {

        return (

            <h1 className="text-center mt-20 text-3xl font-bold">
                Loading...
            </h1>
        )
    }


    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 p-6">

                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

                    <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
                        Update Trip
                    </h1>


                    <form
                        onSubmit={handleUpdate}
                        className="space-y-5"
                    >

                        <input
                            type="text"
                            name="name"
                            value={trip.name || ""}
                            onChange={handleChange}
                            placeholder="Trip Name"
                            className="w-full border p-4 rounded-2xl"
                        />


                        <input
                            type="text"
                            name="destination"
                            value={trip.destination || ""}
                            onChange={handleChange}
                            placeholder="Destination"
                            className="w-full border p-4 rounded-2xl"
                        />


                        <input
                            type="number"
                            name="days"
                            value={trip.days || ""}
                            onChange={handleChange}
                            placeholder="Days"
                            className="w-full border p-4 rounded-2xl"
                        />


                        <input
                            type="number"
                            name="amount"
                            value={trip.amount || ""}
                            onChange={handleChange}
                            placeholder="Amount"
                            className="w-full border p-4 rounded-2xl"
                        />


                        {
                            trip.image &&
                            typeof trip.image === "string" && (

                                <img
                                    src={getImageUrl(trip.image)}
                                    alt="trip"
                                    className="w-full h-72 object-cover rounded-2xl"
                                />
                            )
                        }


                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="w-full border p-4 rounded-2xl"
                        />


                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold"
                        >
                            Update Trip
                        </button>


                        <button
                            type="button"
                            onClick={handleDelete}
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-bold"
                        >
                            Delete Trip
                        </button>

                    </form>

                </div>

            </div>
        </>
    )
}