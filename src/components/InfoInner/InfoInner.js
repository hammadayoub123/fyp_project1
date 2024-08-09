import React from 'react';
import { Link } from 'react-router-dom';
import './InfoInner.css';

function InfoInner() {
    const backgroundImageUrl1 = 'url("assets/images/createDao-s1.svg")';
    const backgroundImageUrl2 = 'url("assets/images/learnDao-s2.svg")';
    const backgroundImageUrl3 = 'url("assets/images/buildFaster-s3.svg")';

    return (
        <>
            <section className="info-inner">
                <div className="container">
                    <div className="row">
                        <div className="dao-card">
                            <div className="cardimage" style={{ backgroundImage: backgroundImageUrl1 }}></div>
                            <div className="card-content">
                                <h1 className="card-title">Create your DAO</h1>
                                <p className="card-description">Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code setup process.</p>
                                <Link to="/create"><button className="create-dao-button">Create a Dao</button></Link>
                            </div>
                        </div>

                        <div className="dao-card">
                            <div className="cardimage" style={{ backgroundImage: backgroundImageUrl2 }}></div>
                            <div className="card-content">
                                <h1 className="card-title">Learn about DAOs</h1>
                                <p className="card-description">Find inspiration and learn about DAOs in our education portal designed for builders at every stage of the journey.</p>
                                <Link to="/blogs"><button className="create-dao-button">Learn About DAOs</button></Link>
                            </div>
                        </div>

                        <div className="dao-card">
                            <div className="cardimage" style={{ backgroundImage: backgroundImageUrl3 }}></div>
                            <div className="card-content">
                                <h1 className="card-title">Build faster</h1>
                                <p className="card-description">Use our governance plugins to build a DAO, dApp, or anything you can imagine on the  OSx protocol.</p>
                                <p className="disabled-text">Comming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cards-inner">
                <div className="container">
                    <div className="row">
                        <div class="additional-content">
                            <h2>Explore DAOs</h2>
                            <div class="button-container">
                                <button class="additional-button">All DAOs</button>
                                <button class="additional-button disabled">Member</button>
                                <button class="additional-button disabled">Following</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cardsdetail-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="org-cards">
                                <div className="org-cards-content">
                                    <img className="org-cards-img" src="assets/images/d1.png" />
                                    <h3 class="card-title">Wolf Works DAO</h3>
                                    <p class="card-description">Designed to provide community-led governance, Wolf Works DAO is a decentralized autonomous organization that puts the power directly in the hands of its stakeholders.</p>
                                    <div class="social-icons">
                                        <a href="#" className="icon"><i class="fa-brands fa-ethereum"></i><p className="para">Ethereum</p></a>
                                        <a href="#" className="icon"><i class="fas fa-users"></i><p className="para">Wallet Based</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="org-cards">
                                <div className="org-cards-content">
                                    <img className="org-cards-img" src="assets/images/d2.png"/>
                                    <h3 class="card-title">Swiss Shield DAO</h3>
                                    <p class="card-description">The Swiss Shield DAO is a neutral organisation supporting DAOs purposes and mission statements.</p>
                                    <div class="social-icons">
                                        <a href="#" className="icon"><i class="fa-brands fa-ethereum"></i><p className="para">Ethereum</p></a>
                                        <a href="#" className="icon"><i class="fas fa-users"></i><p className="para">Wallet Based</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <div className="org-cards">
                                <div className="org-cards-content">
                                    <img className="org-cards-img" src="assets/images/d3.png" />
                                    <h3 class="card-title">Eagle Association</h3>
                                    <p class="card-description">Eagle Association, a not for profit focused on the future of DAO Technology.</p>
                                    <div class="social-icons">
                                        <a href="#" className="icon"><i class="fa-brands fa-ethereum"></i><p className="para">Ethereum</p></a>
                                        <a href="#" className="icon"><i class="fas fa-users"></i><p className="para">Wallet Based</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="org-cards">
                                <div className="org-cards-content">
                                    <img className="org-cards-img" src="assets/images/d4.png"/>
                                    <h3 class="card-title">Aragon X</h3>
                                    <p class="card-description">Aragon X is a swiss based organization that aims to push mission by allowing everyone to experiment with governance at the speed of software. Let's build better, together!</p>
                                    <div class="social-icons">
                                        <a href="#" className="icon"><i class="fa-brands fa-ethereum"></i><p className="para">Ethereum</p></a>
                                        <a href="#" className="icon"><i class="fas fa-users"></i><p className="para">Wallet Based</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="org-cards">
                                <div className="org-cards-content">
                                    <img className="org-cards-img" src="assets/images/d5.png" />
                                    <h3 class="card-title">Coasys DAO</h3>
                                    <p class="card-description">Coasys aims at making a contribution to the public’s capacity to find and share reliable and accurate information — to sense-make as a collective by sharing different and potentially complex perspectives.</p>
                                    <div class="social-icons">
                                        <a href="#" className="icon"><i class="fa-brands fa-ethereum"></i><p className="para">Ethereum</p></a>
                                        <a href="#" className="icon"><i class="fas fa-users"></i><p className="para">Wallet Based</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="org-cards">
                                <div className="org-cards-content">
                                    <img className="org-cards-img" src="assets/images/d6.png"/>
                                    <h3 class="card-title">Lang DAO</h3>
                                    <p class="card-description">Lang DAO, a non-profit organisation, to further the utilisation of linguistic data and growth of multilingual communication.</p>
                                    <div class="social-icons">
                                        <a href="#" className="icon"><i class="fa-brands fa-ethereum"></i><p className="para">Ethereum</p></a>
                                        <a href="#" className="icon"><i class="fas fa-users"></i><p className="para">Wallet Based</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>

    );
}

export default InfoInner;