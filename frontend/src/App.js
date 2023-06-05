import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import LoginAdmin from './Components/LoginAdmin';
import DonorSignup from './Components/SignupDonor';
import AdminDashboard from './Components/AdminDashboard';
import UpdateUser from './Components/UpdateUser';
import AdminSignup from './Components/SignupAdmin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path='/donor/signup' element={<DonorSignup />} />
        <Route path='/admin/update' element={<UpdateUser />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/signup' element={<AdminSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
