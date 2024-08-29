import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardLayout from './Components/Layout/DashboardLayout';
import Layout from './Components/Layout/Layout';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/AfterLogin/Portfolio';
import Profile from './Components/Pages/AfterLogin/Profile';
import PropertyDetail from './Components/Pages/AfterLogin/PropertyDetail';
import PropertyListings from './Components/Pages/AfterLogin/PropertyListings';
import Transaction from './Components/Pages/AfterLogin/Transaction';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import HomePage from './Components/Pages/HomePage';
import Investment from './Components/Pages/Investment';
import Login from './Components/Pages/Login';
import Properties from './Components/Pages/Properties';
import Signup from './Components/Pages/Signup';
import TermsCondition from './Components/Pages/TermsCondition';

function App() {
  return (
    <div className="page-wrapper">
      <Router>
        <Routes>
          {/* Root route to render HomePage */}
          <Route path="/" element={<Layout />}>
            <Route path= "home" element ={<HomePage />} />  {/* This sets the default route to HomePage */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="properties" element={<Properties />} />
            <Route path="blog" element={<Blog />} />
            <Route path="investment" element={<Investment />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="terms-and-condition" element={<TermsCondition />} />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="detail/:id" element={<PropertyDetail />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="property-listing" element={<PropertyListings />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

