import React from 'react';
import Banner from '../Masters/Banner';
import './Custom.css'; // Import the CSS file

function Investment() {
  return (
    <div className="page-content bg-white">
      <Banner />
      
      {/* About Us Section */}
      <section className="content-inner section-wrapper5">
        <div className="container">
          <div className="section-head text-center">
            <h5 className="sub-title">About Us</h5>
            <h2>Introduction to Investment Opportunities</h2>
            <p className="m-t20">
              Overview of how investing can help grow your capital and the importance of strategic investments for business scaling.
            </p>
          </div>
        </div>
      </section>

      {/* How Your Capital Grows Section */}
      <section className="content-inner bg-light">
        <div className="container">
          <div className="section-head text-center">
            <h5 className="sub-title">How Your Capital Grows</h5>
            <h2>Understanding Investment Growth</h2>
            <p className="m-t20">
              Explanation of different investment types (stocks, real estate, etc.), how investments appreciate over time, and strategies for maximizing returns.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <h3>Diversification</h3>
                <p>Why spreading investments across various assets can reduce risk and improve returns.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <h3>Risk Management</h3>
                <p>Techniques to mitigate risk and protect your investments.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <h3>Long-term vs. Short-term Investments</h3>
                <p>Understanding the benefits and drawbacks of different investment time horizons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Your Property Section */}
      <section className="content-inner-2 bg-img-fix" style={{ backgroundImage: 'url("/assets/images/background/bg4.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="section-head text-center">
            <h5 className="sub-title">Register Your Property</h5>
            <h2>Why Register Your Property?</h2>
            <p className="m-t20">
              Benefits of property registration for investors, how registration can streamline investment processes, and steps to register your property.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3>Benefits of Property Registration</h3>
              <p>How property registration enhances investment security and efficiency.</p>
              <h3>Steps to Register Your Property</h3>
              <ul>
                <li>Required documentation</li>
                <li>Registration process overview</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h3>Managing Your Registered Property</h3>
              <p>Tips for maintaining and optimizing property value, and resources for property management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Your Business to the Next Level Section */}
      <section className="content-inner bg-light">
        <div className="container">
          <div className="section-head text-center">
            <h5 className="sub-title">Scale Your Business to the Next Level</h5>
            <h2>Investment Strategies for Business Growth</h2>
            <p className="m-t20">
              Identifying growth opportunities, attracting investors, securing funding, and practical tips for scaling your business.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3>Investment Strategies for Business Growth</h3>
              <p>How to identify and leverage opportunities for scaling your business.</p>
              <h3>Practical Tips for Scaling Your Business</h3>
              <ul>
                <li>Developing a growth plan</li>
                <li>Leveraging technology and innovation</li>
                <li>Expanding your market reach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today Section */}
      <section className="content-inner-2 bg-primary text-white">
        <div className="container text-center">
          <h5 className="sub-title">Get Started Today</h5>
          <h2>Sign Up for Our Services</h2>
          <p className="m-t20">
            Easy steps to register and start investing. Contact us for more information, support, and consultation details.
          </p>
          <a href="sign-up.html" className="btn btn-light m-r30">Sign Up</a>
          <a href="contact.html" className="btn btn-outline-light">Contact Us</a>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="content-inner">
        <div className="container">
          <div className="section-head text-center">
            <h5 className="sub-title">Success Stories</h5>
            <h2>Case Studies of Successful Investments</h2>
            <p className="m-t20">
              Examples of how others have grown their capital and inspiring stories of businesses that scaled successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Resources and Tools Section */}
      <section className="content-inner bg-light">
        <div className="container">
          <div className="section-head text-center">
            <h5 className="sub-title">Resources and Tools</h5>
            <h2>Investment Calculators and Educational Resources</h2>
            <p className="m-t20">
              Tools to estimate potential returns and growth, along with recommended readings, courses, and webinars.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Investment;
