import React, { useState } from 'react';
import Banner from '../Masters/Banner';

function Contact() {
  const [formData, setFormData] = useState({
    dzFirstName: '',
    dzLastName: '',
    dzEmail: '',
    dzPhoneNumber: '',
    dzMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here, e.g., sending formData to an API
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="page-content bg-white">
        {/* Banner */}
       
        {/* Banner End */}
        <Banner/>
        {/* Icon Box */}
        <section className="content-inner-1 bg-light section-pattren1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 m-b20">
                <div className="icon-bx-wraper box-hover style-3">
                  <div className="icon-lg">
                    <a href="tel:394-091-3312" className="icon-cell">
                      <i className="flaticon-phone-call-1" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-tilte m-b5 text-capitalize">Trusted Partner</h5>
                    <span>394-091-3312</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b20">
                <div className="icon-bx-wraper box-hover style-3">
                  <div className="icon-lg">
                    <a href="mailto:support@akcel.com" className="icon-cell">
                      <i className="flaticon-email" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-tilte m-b5 text-capitalize">Mail</h5>
                    <span>support@akcel.com</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b20">
                <div className="icon-bx-wraper box-hover style-3">
                  <div className="icon-lg">
                    <a href="https://goo.gl/maps/your-address" className="icon-cell">
                      <i className="flaticon-pin" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-tilte m-b5 text-capitalize">Our Address</h5>
                    <span>832 Thompson Drive, San Fransisco, United States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Icon Box End */}

        {/* Map Iframe */}
        <section className="content-inner map-wrapper1">
          <div className="container-fluid">
            <div className="map-iframe style-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.884443175983!2d75.81853095!3d25.128214449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835fcc2a9e43%3A0x69e74069e551d77d!2sRajasthan%20Technical%20University%2C%20Kota!5e0!3m2!1sen!2sin!4v1645506412870!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              />
            </div>
           
          </div>
        </section>
        {/* Map Iframe End */}
      </div>
    </div>
  );
}

export default Contact;
