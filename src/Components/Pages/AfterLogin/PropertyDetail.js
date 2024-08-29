import React from 'react';
function PropertyDetail() {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-4">
              <div className="fundraiser-single">
                <div className="swiper fundraiser-gallery-wrapper">
                  <div className="swiper fundraiser-gallery-thumb">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="dz-media">
                          <img src="/assets/images/blog/large/pic1.jpg" alt="Gallery Pic 1" />
                        </div>
                      </div>
                      {/* Additional slides */}
                    </div>
                    <div className="btn-wrapper">
                      <div className="swiper-button-prev btn-prev">
                        <i className="fa fa-arrow-left-long" />
                      </div>
                      <div className="swiper-button-next btn-next">
                        <i className="fa fa-arrow-right-long" />
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="title">Schooling Special Needs Children Education</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <h5>About the Fundraiser</h5>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <ul className="fundraiser-bottom list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm me-2">
                      <i className="fa-brands fa-facebook-square me-1" /> Spread The Word
                    </a>
                  </li>
                  <li>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">
                      <i className="fa-brands fa-whatsapp me-1" /> Share
                    </a>
                  </li>
                </ul>
              </div>
              {/* Financial Details Card */}
              <div className="card financial-details-card mt-4 bg-light">
                <div className="card-header">
                  <h4>Financial Details</h4>
                </div>
                <div className="card-body p-2">
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center py-1">
                      <i className="bi bi-house-door fs-5 me-2 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between text-small">
                        <span className="text-start">Property Type</span>
                        <span className="text-end">Residential</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-1">
                      <i className="bi bi-arrows-fullscreen fs-5 me-2 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between text-small">
                        <span className="text-start">Space</span>
                        <span className="text-end">1500 sq ft</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-1">
                      <i className="bi bi-cash fs-5 me-2 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between text-small">
                        <span className="text-start">Property Cost</span>
                        <span className="text-end">₹ 40,00,000</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-1">
                      <i className="bi bi-cash fs-5 me-2 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between text-small">
                        <span className="text-start">Maintenance Cost</span>
                        <span className="text-end">₹ 5,000/month</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-1">
                      <i className="bi bi-cash fs-5 me-2 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between text-small">
                        <span className="text-start">Total Investment</span>
                        <span className="text-end">₹ 45,00,000</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-1">
                      <i className="bi bi-arrow-up-right-circle fs-5 me-2 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between text-small">
                        <span className="text-start">Annual Returns</span>
                        <span className="text-end">₹ 3,00,000</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-1">
                      <i className="bi bi-bar-chart fs-5 me-2 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between text-small">
                        <span className="text-start">Maximum ROI</span>
                        <span className="text-end">20%</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mt-4">
  <div className="card-header">
    <h4>Property Location</h4>
  </div>
  <div className="card-body p-3">
    <p className="mb-3 text-muted fs-6">Here is the location of the property. You can explore the surroundings and get a better idea of the area.</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.884443175983!2d75.81853095!3d25.128214449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835fcc2a9e43%3A0x69e74069e551d77d!2sRajasthan%20Technical%20University%2C%20Kota!5e0!3m2!1sen!2sin!4v1645506412870!5m2!1sen!2sin"
      style={{ border: 0, width: '100%', height: '400px' }} // Adjust height as needed
      allowFullScreen
      loading="lazy"
      title="Google Map"
    />
  </div>
</div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <aside className="side-bar sticky-top">
                {/* Widget Fund */}
                <div className="widget style-1 widget_fund">
                  <h3 className="title">₹ 45,00,000</h3>
                  <p>raised of <span>₹ 50,00,000</span> goal</p>
                  <div className="progress-bx style-1">
                    <div className="progress">
                      <div className="progress-bar progress-bar-secondary progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }} />
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center py-2 border-bottom">
                      <i className="bi bi-people fs-4 me-3 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between">
                        <span className="text-start">Supporters</span>
                        <span className="text-end text-muted small">₹ 45,00,000</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-2 border-bottom">
                      <i className="bi bi-calendar fs-4 me-3 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between">
                        <span className="text-start">Days Left</span>
                        <span className="text-end text-muted small">52</span>
                      </div>
                    </li>
                  </ul>
                  {/* New Fields */}
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center py-2 border-bottom">
                      <i className="bi bi-cash fs-4 me-3 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between">
                        <span className="text-start">Min Investment</span>
                        <span className="text-end text-muted small">₹ 10,000</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-2 border-bottom">
                      <i className="bi bi-percent fs-4 me-3 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between">
                        <span className="text-start">Rental Yields</span>
                        <span className="text-end text-muted small">7%</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-2 border-bottom">
                      <i className="bi bi-arrow-up-right-circle fs-4 me-3 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between">
                        <span className="text-start">Target IRR</span>
                        <span className="text-end text-muted small">15%</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center py-2">
                      <i className="bi bi-bar-chart fs-4 me-3 text-muted"></i>
                      <div className="w-100 d-flex justify-content-between">
                        <span className="text-start">Maximum ROI</span>
                        <span className="text-end text-muted small">20%</span>
                      </div>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center mt-4">
  <button type="submit" className="btn btn-primary btn-sm">Invest Now</button>
</div>

                </div>
                {/* Fundraiser Post */}
                {/* Fundraising Team */}
                {/* Top Donors */}

              </aside>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PropertyDetail;
