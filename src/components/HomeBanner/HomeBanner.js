import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css';


function HomeBanner() {
    const backgroundImageUrl = 'url("assets/images/banner.jpg")';

    return (
        <section className="home-banner" style={{ backgroundImage: backgroundImageUrl }}>
            <div className="container">
                <div className="content-box">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="text-box">
                                <h3>Welcome To Dencentralized Autonomous Organization (DAO) </h3>
                                <h1>WE MAKE YOUR DECISION SECURE AND TRANSPARENT</h1>
                                <p className="para"><span>Welcome to DVote</span>  -  Your trusted space for transparent voting and surveys. Our user-friendly app prioritizes privacy and complies with regulations. Seamless onboarding awaits you, and our vibrant community is ready for your active engagement!</p>
                                <Link className="launch-dao-button" to="/information"><img src="assets/images/rocketicon.png" alt="Rocket Icon"/>Launch Your DAO</Link>
                                <Link className="dao-button" to="/blogs"><img src="assets/images/daoicon.png" alt="DAO Icon"/>What is a DAO?</Link>                    
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeBanner;