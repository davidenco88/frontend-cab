import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cab from './pages/Cab';
import Booking from './pages/Booking';
import FailedPayment from './pages/FailedPayment';
import Payment from './pages/Payment';
import Login from './pages/Login';
import DefaultLayout from './Layout/DefaultLayout';
import LoginLayout from './Layout/LoginLayout';

function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/cab" element={<Cab />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/failed" element={<FailedPayment />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path='/' element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
