import React from 'react';
import { FaBriefcase, FaBuilding, FaChartBar, FaDollarSign, FaEnvelope, FaHome, FaQuestionCircle, FaShieldAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="col-md-3 col-lg-2 bg-light d-flex flex-column p-3" style={{ height: '100vh', position: 'fixed' }}>
      <div className="d-flex justify-content-center mb-4">
        <Link to="/" className="d-flex align-items-center">
          <img
            src="/assets/images/Zfundz-logo.webp" // Replace with your logo URL
            alt="Logo"
            className="img-fluid"
            style={{ height: '70px' }} // Adjust height as needed
          />
        </Link>
      </div>
      <nav className="flex-fill">
        {/* Navigation Section */}
        <div className="mb-4">
          <label className="form-label text-muted">Navigation</label>
          <ul className="nav flex-column">
            {[
              { to: '/dashboard', icon: <FaHome />, text: 'Dashboard' },
              { to: '/dashboard/property-listing', icon: <FaBuilding />, text: 'Property Listings' },
              { to: '/dashboard/portfolio', icon: <FaBriefcase />, text: 'Portfolio' },
              { to: '/dashboard/transaction', icon: <FaDollarSign />, text: 'Transaction' },
              { to: '/dashboard/profile', icon: <FaUser />, text: 'Profile' },
              { to: '/dashboard/reports', icon: <FaChartBar />, text: 'Reports' },
              { to: '/dashboard/faq', icon: <FaQuestionCircle />, text: 'F.A.Q' },
              { to: '/dashboard/privacy-policy', icon: <FaShieldAlt />, text: 'Privacy & Policy' },
              { to: '/dashboard/contact-us', icon: <FaEnvelope />, text: 'Contact Us' },
            ].map(({ to, icon, text }, index) => (
              <li className="nav-item mb-2" key={index}>
                <Link
                  to={to}
                  className="nav-link d-flex align-items-center text-dark p-2 rounded hover:bg-light"
                >
                  <span className="me-2">{icon}</span>
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Horizontal Divider */}
        <hr className="my-4" />

        {/* Additional Section */}
        <div>
          {/* Add more sections or content here if needed */}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
