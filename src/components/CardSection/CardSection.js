import React from 'react';
import { Link } from 'react-router-dom';
import './CardSection.css';

function CardSection() {
    const backgroundCoverUrl = 'url("assets/images/info-banner.jpg")';
    return (
        <section className="our-info" style={{ backgroundImage: backgroundCoverUrl }}>
            <div className="container">
                <div className="sec-title">

                    <h2>DAO Organizations On BlockChain</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-d col-lg-4 col-xl-4 col-xxl-4">
                        <div className="fleet-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/decentralized.png" />
                            </div>
                            <h6>CHIMPS DAO </h6>
                            <p className="para">Chimps DAO is a community-centric DAO protocol.</p>
                            <ul>
                                <li>
                                    <div><i className="fa-duotone fa-users"></i> Members:</div>
                                    <span>10</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-image"></i> Total NFTs:
                                    </div>
                                    <span>1111</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-exchange"></i> Total Transactions:
                                    </div>
                                    <span>15</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-coins"></i> Total Supply:
                                    </div>
                                    <span>1,000,000</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-calendar"></i> Created Date:
                                    </div>
                                    <span>January 2024</span>
                                </li>
                            </ul>

                            <Link to="/information" className="book-fleet">Join the DAO <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-d col-lg-4 col-xl-4 col-xxl-4">
                        <div className="fleet-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/permissionless.png" />
                            </div>
                            <h6>UQUARIUM DAO</h6>
                            <p className="para">Uquarium DAO is a community-centric DAO protocol.</p>
                            <ul>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-users"></i> Members:
                                    </div>
                                    <span>15</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-image"></i> Total NFTs:
                                    </div>
                                    <span>1121</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-exchange"></i> Total Transactions:
                                    </div>
                                    <span>18</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-coins"></i> Total Supply:
                                    </div>
                                    <span>2,000,000</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-calendar"></i> Created Date:
                                    </div>
                                    <span>January 2024</span>
                                </li>
                            </ul>

                            <Link to="/information" className="book-fleet">Join the DAO <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-d col-lg-4 col-xl-4 col-xxl-4">
                        <div className="fleet-box">
                            <div className="img-box">
                                <img className="img-fluid" src="assets/images/transparent.png" />
                            </div>
                            <h6>ZION DAO </h6>
                            <p className="para">Zion DAO is a community-centric DAO protocol.</p>
                            <ul>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-users"></i> Members:
                                    </div>
                                    <span>17</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-image"></i> Total NFTs:
                                    </div>
                                    <span>1245</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-exchange"></i> Total Transactions:
                                    </div>
                                    <span>21</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-coins"></i> Total Supply:
                                    </div>
                                    <span>3,000,000</span>
                                </li>
                                <li>
                                    <div>
                                        <i className="fa-duotone fa-calendar"></i> Created Date:
                                    </div>
                                    <span>January 2024</span>
                                </li>
                            </ul>
                            <Link to="/information" className="book-fleet">Join the DAO <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
}

export default CardSection;