import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="app-section">
    <div className="container">
        <div className="app-title">
            <h2>OUR FEATURES</h2>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="content-box">
                    <h3>Dencentralized Autonomous Organization (DAO)</h3>
                    <h2>Welcome To <span>DVote</span></h2>
                    <p className="para"> Designed to empower you and promote active community participation.</p>
                    <ul>
                        <li>Secure and Transparent</li>
                        <li>Easy To Use</li>
                        <li>24/7 Service</li>
                        <li>Real-time Data Insights</li>
                        <li>Cutting-Edge Security</li>
                        <li>Live Voting Tracking</li>
                    </ul>
                    <div className="app-btn">
                        <a className="downlaod-app" href="javascript:;">
                            <img className="img-fluid" src="assets/images/explore.png" />
                        </a>
                        <a className="downlaod-app" href="javascript:;">
                            <img className="img-fluid" src="assets/images/join.png" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="img-box">
                    <img className="img-fluid" src="assets/images/app-screen.jpg" />
                </div>
            </div>
        </div>
    </div>
    <hr/>
</section>

  );
}

export default Features;