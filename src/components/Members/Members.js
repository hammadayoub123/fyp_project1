import React, { useState, useEffect } from 'react';
import './Members.css';


function Members() {
    return (
        <section className="member-section">
            <div className="container">
                
                <div className="member-title">
                    <h2>OUR MEMBERS</h2>
                </div>
                <div className="row">
                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-card">
                        <img src="assets/images/img_avatar.png" alt="Member Image" />
                        <div className="member-details">
                            <h2>John Doe</h2>
                            <h3>Web Developer</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="top-text-container">
                        <h2>Stay Connected With Us</h2>
                    </div>
                    <div className="horizontal-grid">
                        <div className="grid-item">
                            <span>50+</span> Members
                        </div>
                        <div className="grid-item">
                            <span>70+</span> Proposals Executed
                        </div>
                        <div className="grid-item">
                            <span>115+</span> Consensus Achieved
                        </div>
                        <div className="grid-item">
                            <span>165+</span> DAO Meetings
                        </div>
                    </div>
                   
                </div>

            </div>
            <hr />
        </section>
    );
}

export default Members;