import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ChangePassword from './pages/auth/ChangePassword';
import OTP from './pages/auth/OtpVerification';
import Chat from './pages/chat/Chat';
import PlanDetails from './pages/planDetails/PlanDetails';
import Bookings from './pages/bookings/Bookings';
import Payment from './pages/payments/Payments';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/otp-verification" element={<OTP />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/plan-details" element={<PlanDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
