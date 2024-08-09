import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesInner.css';

function ServicesInner() {
    return (
        <section className="sec-services">
            <div className="container">
                <div className="sec-title">
                    <h2>OUR SERVICES</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="service-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/service-1.jpg" />
                            </div>
                            <div className="text-box">
                                <h4>Secure Voting Platform</h4>
                                <Link className="read-btn" to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="service-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/service-2.jpg" />
                            </div>
                            <div className="text-box">
                                <h4>Effortless Onboarding</h4>
                                <Link className="read-btn" to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="service-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/service-3.jpg" />
                            </div>
                            <div className="text-box">
                                <h4>Privacy-Focused Approach</h4>
                                <Link className="read-btn" to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="service-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/service-4.jpg" />
                            </div>
                            <div className="text-box">
                                <h4>Regulatory Compliance</h4>
                                <Link className="read-btn" to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="service-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/service-5.jpg" />
                            </div>
                            <div className="text-box">
                                <h4>Interactive Data Analytics</h4>
                                <Link className="read-btn" to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="service-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/service-6.jpg" />
                            </div>
                            <div className="text-box">
                                <h4>Active Community Engagement</h4>
                                <Link className="read-btn" to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
        </section>
    );
}

export default ServicesInner;