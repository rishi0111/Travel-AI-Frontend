import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import OTP from './pages/auth/OtpVerification';
import Chat from './pages/chat/Chat';
import PlanDetails from './pages/planDetails/PlanDetails';
import ConfirmPassword from './pages/auth/ConfirmPassword';
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';
import Bookings from './pages/bookings/Bookings';
import Payment from './pages/payments/Payments';
import ContactUs from './pages/contact/ContactUs';
import Layout from './Layout';
import ChangePasswordAdmin from './pages/changePassword/AdminChangePassword';
import Terms from './pages/legal/Terms';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<PublicRoute element={<Register />} />} />
          <Route path="/forgot-password" element={<PublicRoute element={<ForgotPassword />} />} />
          <Route path="/confirm-password" element={<PublicRoute element={<ConfirmPassword />} />} />
          <Route path="/otp-verification" element={<PublicRoute element={<OTP />} />} />
          <Route path="/chat" element={<ProtectedRoute element={<Layout><Chat /></Layout>} />} />
          <Route path="/chat/:threadUid" element={<ProtectedRoute element={<Layout><Chat /></Layout>} />} />
          <Route path="/plan-details/:tour_id" element={<ProtectedRoute element={<Layout><PlanDetails /></Layout>} />} />
          <Route path="/bookings" element={<ProtectedRoute element={<Layout><Bookings /></Layout>} />} />
          <Route path="/payments" element={<ProtectedRoute element={<Layout><Payment /></Layout>} />} />
          <Route path="/contact" element={<ProtectedRoute element={<Layout><ContactUs /></Layout>} />} />
          <Route path="/change-password" element={<ProtectedRoute element={<Layout><ChangePasswordAdmin /></Layout>} />} />
          <Route path="/terms" element={<ProtectedRoute element={<Layout><Terms /></Layout>} />} />
          <Route path="/privacy-policy" element={<ProtectedRoute element={<Layout><PrivacyPolicy /></Layout>} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
