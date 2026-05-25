import { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "traveller",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("register/", form);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.message || "Registration Successful");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);

      const errorMessage = err.response?.data
        ? JSON.stringify(err.response.data)
        : err.message;

      alert("Error in registration: " + errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side Image */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="travel"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-10">
            <h1 className="text-5xl font-bold mb-4">
              Travelista Tours
            </h1>

            <p className="text-center text-lg">
              Travel is the only purchase that enriches you in ways
              beyond material wealth
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex items-center justify-center p-8 md:p-14">
          <div className="w-full max-w-md">
            <h2 className="text-5xl font-bold text-sky-500 mb-2">
              Register
            </h2>

            <p className="text-gray-500 mb-8">
              Create your travel account
            </p>

            <form onSubmit={registerUser} className="space-y-5">
              
              {/* Username */}
              <div>
                <label className="text-sm text-gray-600">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:border-sky-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-gray-600">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:border-sky-500"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-sm text-gray-600">
                  Select Role
                </label>

                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:border-sky-500"
                >
                  <option value="traveller">Traveller</option>
                  <option value="agency">Agency</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                REGISTER
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-gray-500 mt-6">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-sky-500 cursor-pointer font-semibold"
              >
                Login Now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}