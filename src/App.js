import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

//Pages
import CustomerLogin from './pages/customer/CustomerLogin';
import AdminLogin from './pages/admin/AdminLogin'
import Home from './pages/Home';
import Dashboard from './pages/customer/Dashboard'
import FleetManager from './pages/customer/FleetManager'
import Customers from './pages/admin/Customers';

function App() {
  return (
    <div className = "App-header">
    <Router>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<CustomerLogin />}
        />

        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        <Route
          path = "/dashboard"
          element = {<Dashboard droneCount = "15"></Dashboard>}
          />

        <Route
          path = "/fleet"
          element = {<FleetManager fleetCount = "3"></FleetManager>}
          />
          
        <Route
          path = "/admin_dashboard"
          element = {<Customers></Customers>}
          />
        

      </Routes>
    </Router>
    </div>
  );
}

export default App;
