import React from 'react';

function HomeBanner() {
  return (
<div className="main-bnr-one" style={{ backgroundColor: 'white', paddingTop: '50px', paddingBottom: '0' }}>
          <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="banner-content">
              <div className="top-content">
                <h1 className="sub-title" style={{ color: 'black' }}></h1>
                <h1 className="title" style={{ color: 'black' }}>Co-Investing Simplified</h1>
                <p style={{ color: 'black' }}>
                Own a business today without breaking your bank and sweat. We help you invest in promising businesses to generate passive income
                </p>
                <div className="d-flex align-items-center">
                  <a
                    className="btn btn-primary btnhover1"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDonate"
                  >
                    <span>Invest</span>
                    <i className="flaticon-heart text-secondary ms-3" />
                  </a>
                  <a href="about-us.html" className="btn btn-secondary btnhover2">
                    Learn More <i className="flaticon-right-arrows ms-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="banner-media">
              <video className="w-100" autoPlay loop muted>
                <source src="/assets/images/B1.mp4" type="video/mp4" allowFullScreen />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
