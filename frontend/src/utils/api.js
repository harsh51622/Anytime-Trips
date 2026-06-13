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

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  // Remove trailing slash and '/api' or '/api/' from baseURL to get the root host URL
  const base = api.defaults.baseURL.replace(/\/api\/?$/, "");
  const normalizedPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${base}${normalizedPath}`;
};

export default api;