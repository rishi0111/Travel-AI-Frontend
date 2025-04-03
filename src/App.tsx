import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <Router>
      {/* <nav className="bg-gray-800 p-4">
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/about" className="text-white">About</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
