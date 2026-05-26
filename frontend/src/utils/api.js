import axios from "axios";

const api = axios.create({
  baseURL: "https://anytime-trips.onrender.com/api/",
});

// auto attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  // Don't attach token for login or register endpoints
  if (token && !config.url.includes("login") && !config.url.includes("register")) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

