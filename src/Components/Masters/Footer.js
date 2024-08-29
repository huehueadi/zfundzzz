import React from 'react'

function Footer() {
  return (
   <div>  <footer className="site-footer style-1" id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="widget widget_about">
              <div className="footer-logo logo-white">
                <a href="index.html"><img src="images/logo-white.png" alt /></a> 
              </div>
              <p>Akcel is a Crowdfunding &amp; Charity Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
              <div className="dz-social-icon style-1">
                <ul>
                  <li><a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/" /></li>
                  <li><a target="_blank" className="fab fa-instagram" href="https://www.instagram.com/" /></li>
                  <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/" /></li>
                  <li><a target="_blank" className="fab fa-youtube" href="https://youtube.com/" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="widget widget_services">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <li><a href="how-it-works.html">How It Works</a></li>
                <li><a href="ask-a-question.html">Ask A Question</a></li>
                <li><a href="project-story.html">Project Story</a></li>
                <li><a href="mission.html">Mission</a></li>
                <li><a href="certificates.html">Certificates</a></li>
                <li><a href="terms-and-condition.html">Terms And Condition</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="widget widget_services">
              <h5 className="footer-title">Company</h5>
              <ul>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="volunteer.html">Volunteer</a></li>
                <li><a href="happy-clients.html">Happy Clients</a></li>
                <li><a href="project.html">Project</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
                <li><a href="faq.html">Faq</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
            <div className="widget widget_getintuch">
              <h5 className="footer-title">Get in Touch with Us</h5>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <span>832  Thompson Drive, San Fransisco CA 94107, United States</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone" />
                  <span>394-091-3312</span>
                </li>
                <li>
                  <i className="fa fa-envelope" /> 
                  <span>support@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1 move-2" />
      <svg className="shape-2 move-2" viewBox="0 0 86 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="0.5" y="22.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="0.5" y="44.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="22.5" y="0.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="22.5" y="22.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="44.5" y="0.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="44.5" y="22.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="44.5" y="44.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="66.5" y="0.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
        <rect x="66.5" y="22.5" width={19} height={19} rx="9.5" stroke="var(--primary)" />
      </svg>
      <svg className="shape-3 move-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--secondary)" fillOpacity={1} d="M0,64L120,101.3C240,139,480,213,720,213.3C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" />
      </svg>
    </div>
    {/* Footer Bottom Part */}
    <div className="footer-bottom">
      <div className="container">
        <div className="text-center"> 
          <span className="copyright-text">Copyright © 2024 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
        </div>
      </div>
    </div>
  </footer></div>

  )
}

export default Footer