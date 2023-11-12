import './App.css';

// Router 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Pages
import CustomerLogin from './pages/customer/CustomerLogin';
import AdminLogin from './pages/admin/AdminLogin'
import Home from './pages/Home';
import Dashboard from './pages/customer/Dashboard'
import FleetManager from './pages/customer/FleetManager'
import Customers from './pages/admin/Customers';
import CustomerRecovery from './pages/customer/CustomerRecovery'
import AdminRecovery from './pages/admin/adminRecovery'
import CustomerSignUp from './pages/customer/CustomerSignUp';

function App() {
  return (
    <div className = "App-header">
    {/* Setting up router for page linking */}
    <Router basename={"/"}>
      <Routes>
        <Route
        exact = {true}
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

          <Route
          path = "/recovery"
          element = {<CustomerRecovery></CustomerRecovery>}
          />

          <Route
          path = "/admin_recovery"
          element = {<AdminRecovery></AdminRecovery>}
          />

          <Route
          path = "/create"
          element = {<CustomerSignUp></CustomerSignUp>}
          />
        </Routes>


    </Router>
    </div>
  );
}

export default App;
