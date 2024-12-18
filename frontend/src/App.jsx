import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Sale from './pages/sale/Sale';
import Rent from './pages/rent/Rent';
import Advertise from './pages/advertise/Advertise';
import FAQ from './pages/faq/FAQ';
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          {/* Route Definitions */}
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
