import React from 'react'

function Banner() {
  return (
  <div className="page-content bg-white">	
      
      <div className="main-bnr-one" style={{ height: '500px'}}>
      <div className="swiper-container main-slider">
          <div className="swiper-wrapper">
              <div className="swiper-slide">
                  <div className="banner-inner custom-banner-height" style={{backgroundImage: 'url(images/main-slider/slider1/slider-bg1.jpg)'}}>
                      <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-6 col-md-12 pt-5">
                                  <div className="banner-content">
                                      <div className="top-content">
                                          <h5 className="sub-title text-secondary"></h5>
                                          <h1 className="title">Co-Investing Simplified </h1>
                                          <p>Own a business today without breaking your bank and sweat. We help you invest in promising businesses to generate passive income.</p>
                                          <div className="d-flex align-items-center">
                                              <a className="btn btn-primary btnhover1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#modalDonate">
                                                  <span>Invest</span>
                                                  <i className="flaticon-heart text-secondary ms-3" />
                                              </a>
                                              <a href="about-us.html" className="btn btn-secondary btnhover2">Learn More <i className="flaticon-right-arrows ms-3" /></a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                  <div className="banner-media row gx-4" style={{ marginRight: '10px' }}>
                                      <div className="col-7">
                                          <div className="main-img3">
                                              <img src="/assets/images/Banner Imahe .webp" alt="Banner" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <svg className="shape1" width={18} height={559} viewBox="0 0 187 559" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M158 245C71.6 224.2 -50.6667 146.333 -101 110V497C95.8 534.6 153.667 344.667 158 245Z" fill="var(--primary)" />
                          <path d="M-113 2C-12 190 292.675 -12.9435 143 241C54 392 93 529 -100 556" stroke="var(--secondary)" strokeWidth={6} />
                      </svg>
                      <svg className="shape3" viewBox="0 0 619 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 3C68 113 148 236.892 316 249C427 257 557 198 626 354" stroke="var(--secondary)" strokeWidth={8} />
                          <path d="M440.576 119.632C305 113 297.836 59.5755 261 11H619V266C594 162 551.867 125.077 440.576 119.632Z" fill="var(--primary)" />
                      </svg>
                  </div>
              </div>

          </div>
      </div>
  </div>
  
    </div>
   
  )
}

export default Banner