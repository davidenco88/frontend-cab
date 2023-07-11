import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cab from "./pages/Cab";
import Booking from "./pages/Booking";
import FailedPayment from "./pages/FailedPayment";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import DefaultLayout from "./Layout/DefaultLayout";
import LoginLayout from "./Layout/LoginLayout";
import Profile from "./pages/Profile";
import ActivateAccount from "./pages/ActivateAccount";
import Trips from "./pages/TripsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/failed" element={<FailedPayment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/driver-travels/" element={<Trips />} />
      </Route>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/activate-account/:token" element={<ActivateAccount />} />
    </Routes>
  );
}

export default App;
