// import Cookies from 'js-cookie';
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//   const location = useLocation();

//   const isAuthenticated = ()=>{
//     const token = Cookies.get('token')

//     return !!token
//   }
  

//   // Function to check if the current link is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="site-header mo-left header style-2">
//       <div className="sticky-header main-bar-wraper navbar-expand-lg">
//         <div className="main-bar clearfix ">
//           <div className="container-fluid clearfix">

            
            
//             <div className="logo-header mostion logo-dark">
//               <Link to="/"><img src="/assets/images/zfundzLogo.png" alt="Zfundz Logo" /></Link>
//             </div>
//             <div className="extra-nav">
//               <div className="extra-cell d-flex align-items-center">		
//                 <ul className="nav-link-list">
//                {isAuthenticated()?( <li><Link to = "/dashboard" className="btn-login text-primary">Dashboard</Link></li>):( <> 
//                   <li><a href="javascript:void(0);" className="btn-login text-primary">Login</a></li>
//                   <li><a href="javascript:void(0);" className="btn-login">Sign Up</a></li></> )}
                
//                 </ul>
//                 <a className="btn btn-primary btnhover1" href="javascript:void(0);">
//                   <span>Invest Now</span>
//                   <i className="flaticon-heart text-secondary ms-3" />
//                 </a>
//               </div>
//             </div>

//             <div className="header-nav navbar-collapse collapse justify-content-start" >

//               <ul className="nav navbar-nav navbar navbar-left">	
//                 <li className={isActive('/home') ? 'active' : ''}><Link to="/home">Home</Link></li>
//                 <li className={isActive('/about') ? 'active' : ''}><Link to="/about">About Us</Link></li>
//                 <li className={isActive('/investment') ? 'active' : ''}><Link to="/investment">Investment</Link></li>
//                 <li className={isActive('/properties') ? 'active' : ''}><Link to="/properties">Properties</Link></li>
//                 <li className={isActive('/blog') ? 'active' : ''}><Link to="/blog">Blog</Link></li>

//                 <li className={isActive('/contact') ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
//               </ul>
//               <div className="header-bottom">
//                 <a href="javascript:void(0);" className="btn btn-light btn-login btn-sm" data-bs-toggle="modal" data-bs-target="#modalLogin">
//                   <i className="flaticon-logout me-3" />Login / Sign Up
//                 </a>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



// import Cookies from 'js-cookie';
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//   const location = useLocation();

//   const isAuthenticated = () => {
//     const token = Cookies.get('token');
//     return !!token;
//   };

//   // Function to check if the current link is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="site-header mo-left header style-2">
//       <div className="sticky-header main-bar-wraper navbar-expand-lg">
//         <div className="main-bar clearfix">
//           <div className="container-fluid clearfix">
//             <div className="logo-header mostion logo-dark">
//               <Link to="/"><img src="/assets/images/zfundzLogo.png" alt="Zfundz Logo" /></Link>
//             </div>
//             <div className="extra-nav">
//               <div className="extra-cell d-flex align-items-center">
//                 <ul className="nav-link-list">
//                   {isAuthenticated() ? (
//                     <li><Link to="/dashboard" className="btn-login text-primary">Dashboard</Link></li>
//                   ) : (
//                     <>
//                       <li><a href="javascript:void(0);" className="btn-login text-primary">Login</a></li>
//                       <li><a href="javascript:void(0);" className="btn-login">Sign Up</a></li>
//                     </>
//                   )}
//                 </ul>
//                 <a className="btn btn-primary btnhover1" href="javascript:void(0);">
//                   <span>Invest Now</span>
//                   <i className="flaticon-heart text-secondary ms-3" />
//                 </a>
//               </div>
//             </div>

//             <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>

//             <div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
//               <ul className="nav navbar-nav navbar navbar-left">
//                 <li className={isActive('/home') ? 'active' : ''}><Link to="/home">Home</Link></li>
//                 <li className={isActive('/about') ? 'active' : ''}><Link to="/about">About Us</Link></li>
//                 <li className={isActive('/investment') ? 'active' : ''}><Link to="/investment">Investment</Link></li>
//                 <li className={isActive('/properties') ? 'active' : ''}><Link to="/properties">Properties</Link></li>
//                 <li className={isActive('/blog') ? 'active' : ''}><Link to="/blog">Blog</Link></li>
//                 <li className={isActive('/contact') ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
//               </ul>
//               <div className="header-bottom">
//                 <a href="javascript:void(0);" className="btn btn-light btn-login btn-sm" data-bs-toggle="modal" data-bs-target="#modalLogin">
//                   <i className="flaticon-logout me-3" />Login / Sign Up
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



import Cookies from 'js-cookie';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isAuthenticated = () => {
    const token = Cookies.get('token');
    return !!token;
  };

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header mo-left header style-2">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container-fluid clearfix">
            {/* Website Logo */}
            <div className="logo-header mostion logo-dark">
              <Link to="/"><img src="/assets/images/zfundzLogo.png" alt="Zfundz Logo" /></Link>
            </div>
            
            {/* Nav Toggle Button */}
            <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            {/* Extra Nav */}
            <div className="extra-nav">
              <div className="extra-cell d-flex align-items-center">
                <ul className="nav-link-list">
                  {isAuthenticated() ? (
                    <li><Link to="/dashboard" className="btn-login text-primary">Dashboard</Link></li>
                  ) : (
                    <>
                      <li><a href="javascript:void(0);" className="btn-login text-primary" data-bs-toggle="modal" data-bs-target="#modalLogin">Login</a></li>
                      <li><a href="javascript:void(0);" className="btn-login" data-bs-toggle="modal" data-bs-target="#modalLogin">Sign Up</a></li>
                    </>
                  )}
                </ul>
                <a className="btn btn-primary btnhover1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#modalDonate">
                  <span>Donate Now</span>
                  <i className="flaticon-heart text-secondary ms-3"></i>
                </a>
                <a href="javascript:void(0);" className="menu-btn">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="22" y="11" width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect x="11" width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect x="22" width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect x="11" y="11" width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect x="11" y="22" width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect y="11" width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect x="22" y="22" width="4" height="4" rx="2" fill="#003B4A"/>
                    <rect y="22" width="4" height="4" rx="2" fill="#003B4A"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Header Nav */}
            <div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
              <div className="logo-header logo-dark">
                <Link to="/"><img src="/assets/images/zfundzLogo.png" alt="Zfundz Logo" /></Link>
              </div>
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
                  <i className="flaticon-logout me-3"></i>Login / Sign Up
                </a>
                <div className="dz-social-icon">
                  <ul>
                    <li><a className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                    <li><a className="fab fa-twitter" href="https://twitter.com/"></a></li>
                    <li><a className="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
                    <li><a className="fab fa-instagram" href="https://www.instagram.com/"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;



