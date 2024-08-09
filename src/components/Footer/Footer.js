import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
      <footer className="footer-bg">
          <div className="container">
              <div className="row">
                  <div className="footer-middle">
                      <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                              <Link className="logo-bg" to="/"><img className="img-fluid footer-logo" src="assets/images/logo.png" alt="footer-logo" /></Link>
                              <p className="para">Welcome to DVote - Your trusted space for transparent voting and surveys. Our user-friendly app prioritizes privacy and complies with regulations. Seamless onboarding awaits you, and our vibrant community is ready for your active engagement!</p>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                              <div className="row">
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                      <h4>Quick Links</h4>
                                      <ul className="footer-list">
                                          <li><Link to="/">Home</Link></li>
                                          <li><Link to="/about">About Us</Link></li>
                                          <li><Link to="/blogs">Blogs</Link ></li>
                                          <li><Link to="/services">Services</Link ></li>
                                          <li><Link to="/contact">Contact Us</Link ></li>
                                      </ul>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                      <h4>Our Services</h4>
                                      <ul className="footer-list">
                                          <li><Link to="/services">Effortless Onboarding</Link></li>
                                          <li><Link to="/services">Regulatory Compliance</Link></li>
                                          <li><Link to="/services">Privacy-Focused Approach</Link></li>
                                          <li><Link to="/services">Interactive Data Analytics</Link></li>
                                          <li><Link to="/services">Active Community Engagement</Link></li>
                                          <li><Link to="/services">Secure Voting Platform</Link></li>
                                      </ul>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                      <h4>Contact</h4>
                                      <ul className="footer-list">
                                          <li><a href="tel:090078601"><i className="fa-solid fa-phone"></i> 0900 78601</a></li>
                                          <li><span><a href="mailto:info@Dvote.pk"><i className="fa-solid fa-envelope"></i> info@Dvote.pk</a></span></li>
                                          <li><a href="javascript:;"><i className="fa-sharp fa-solid fa-location-dot"></i> North Karachi Twp, Karachi, Karachi City, Sindh, Pakistan</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="footer-lower"><p className="para">© 2024 All rights reserved.<a href="#">&nbsp;DVote</a></p></div>
              </div>
          </div>
      </footer>
  )
}

export default Footer;