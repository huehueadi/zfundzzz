import Cookies from 'js-cookie';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isAuthenticated = ()=>{
    const token = Cookies.get('token')

    return !!token
  }
  

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header mo-left header style-2">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="container-fluid clearfix">
            
            <div className="logo-header mostion logo-dark">
              <Link to="/"><img src="/assets/images/Zfundz-logo.webp" alt="Zfundz Logo" /></Link>
            </div>
            <div className="extra-nav">
              <div className="extra-cell d-flex align-items-center">		
                <ul className="nav-link-list">
               {isAuthenticated()?( <li><Link to = "/dashboard" className="btn-login text-primary">Dashboard</Link></li>):( <> 
                  <li><a href="javascript:void(0);" className="btn-login text-primary">Login</a></li>
                  <li><a href="javascript:void(0);" className="btn-login">Sign Up</a></li></> )}
                
                </ul>
                <a className="btn btn-primary btnhover1" href="javascript:void(0);">
                  <span>Invest Now</span>
                  <i className="flaticon-heart text-secondary ms-3" />
                </a>
              </div>
            </div>

            <div className="header-nav navbar-collapse collapse justify-content-start" >

              <ul className="nav navbar-nav navbar navbar-left">	
                <li className={isActive('/home') ? 'active' : ''}><Link to="/home">Home</Link></li>
                <li className={isActive('/about') ? 'active' : ''}><Link to="/about">About Us</Link></li>
                <li className={isActive('/investment') ? 'active' : ''}><Link to="/investment">Investment</Link></li>
                <li className={isActive('/properties') ? 'active' : ''}><Link to="/properties">Properties</Link></li>
                <li className={isActive('/blog') ? 'active' : ''}><Link to="/blog">Blog</Link></li>

                <li className={isActive('/contact') ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
              </ul>
              <div className="header-bottom">
                <a href="javascript:void(0);" className="btn btn-light btn-login btn-sm" data-bs-toggle="modal" data-bs-target="#modalLogin">
                  <i className="flaticon-logout me-3" />Login / Sign Up
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
