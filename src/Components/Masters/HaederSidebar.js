import React from 'react';
import { FaBell, FaCog, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeaderSidebar() {
  return (
    <header
      className="bg-white d-flex align-items-center px-4 shadow-sm"
      style={{
        height: '60px',
        marginLeft: '320px',
        position: 'fixed',
        width: 'calc(100% - 250px)', 
        top: 0,
        zIndex: 1000
      }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo or Brand Name */}
          <Link to="/" className="text-dark text-decoration-none">
              <h4>Welcome Back, Kevin </h4>
          </Link>

          {/* Right-side elements like notifications and profile */}
          <div className="d-flex align-items-center">
            <button className="btn btn-link text-dark me-3">
              <FaBell size={20} />
            </button>
            <button className="btn btn-link text-dark me-3">
              <FaCog size={20} />
            </button>
            <Link to="/dashboard/profile" className="btn btn-link text-dark">
              <FaUser size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSidebar;

