import React from 'react';
import './ContactInner.css';

function ContactInner() {
    return (
        <>
            <section className="sec-info">
                <div className="container">
                    <div className="sec-title">
                        <h3>Contact Us</h3>
                        <h2>Contact Now For Any Query</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 colxl-4 col-xxl-4">
                            <div className="white-box">
                                <div className="img-box">
                                    <i className="fa-light fa-phone"></i>
                                </div>
                                <h6>OUR PHONE NUMBER</h6>
                                <div className="num-link">
                                    <a href="tel:090078601">0900 78601</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 colxl-4 col-xxl-4">
                            <div className="white-box">
                                <div className="img-box">
                                    <i className="fa-light fa-map-location-dot"></i>
                                </div>
                                <h6>OUR OFFICE LOCATION</h6>
                                <div className="num-link">
                                    <a href="javascript:;">North Karachi Twp, Karachi, Karachi City, Sindh, Pakistan</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 colxl-4 col-xxl-4">
                            <div className="white-box">
                                <div className="img-box">
                                    <i className="fa-light fa-envelope-open"></i>
                                </div>
                                <h6>Any Question? Email Us!</h6>
                                <div className="num-link">
                                    <a href="mailto:info@Dvote.pk">info@Dvote.pk</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0">
                            <div className="address-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.001403046013!2d67.05768871943076!3d24.97460709703981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e59b6b225b%3A0x1951829acb486c7e!2sNorth%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707213787242!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0">
                            <div className="contact-form">
                                <h2>GET A FREE QUOTE</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="field-box">
                                                <input type="text" className="form-control contact-input" placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="field-box">
                                                <input type="email" className="form-control contact-input" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="field-box">
                                                <input type="tel" className="form-control contact-input" placeholder="Phone No" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="field-box">
                                                <input type="text" className="form-control contact-input" placeholder="Enter Subject" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div className="field-box">
                                                <textarea className="form-control contact-input" placeholder="Message" rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div className="field-box">
                                                <button>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactInner;