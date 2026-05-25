import { Routes, Route } from "react-router-dom";

import Register from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ProtectedRoute from "./utils/protected_route";
import Home from "./mainpage/home";
import AgencyDashboard from "./mainpage/agency_dashboard";
import Tripdetails from "./components/pages/Userpages/Tripdetails";
import Trips from "./mainpage/Trips";
import About from "./mainpage/About";
import ContactUs from "./mainpage/Contactus";
import Bookings from "./mainpage/Bookings";
import Cart from "./components/pages/Userpages/Cart";
import Order from "./components/pages/Userpages/Order";
import OrderHistory from "./components/pages/Userpages/Orderhistory";
import AgencyTripDetails from "./components/pages/Agencypages/AgencyTripDetails";


export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Traveller/Home */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Protected Agency Dashboard */}
      <Route
        path="/agency-dashboard"
        element={
          <ProtectedRoute>
            <AgencyDashboard />
          </ProtectedRoute>
        }
      />
      {/* PRODUCT DETAILS */}
      <Route
        path='/Trips/:id'
        element={<ProtectedRoute>
          <Tripdetails />
        </ProtectedRoute>}
      />
      {/* TRIPS DETAILS */}
      <Route
        path='/Trips/'
        element={<ProtectedRoute>
          <Trips />
        </ProtectedRoute>}
      />
      <Route
        path='/About/'
        element={<ProtectedRoute>
          <About />
        </ProtectedRoute>}
      />
      <Route
        path='/ContactUs/'
        element={<ProtectedRoute>
          <ContactUs />
        </ProtectedRoute>}
      />
      <Route
        path='/Bookings/'
        element={<ProtectedRoute>
          <Bookings />
        </ProtectedRoute>}
      />
      <Route
        path='/cart/'
        element={<ProtectedRoute>
          <Cart />
        </ProtectedRoute>}
      />

      <Route
        path="/order"
        element={<Order />}
      />

      <Route
        path="/history"
        element={<OrderHistory />}
      />
      <Route
    path="/trip-details/:id"
    element={<AgencyTripDetails />}
/>


    </Routes>
  );
}