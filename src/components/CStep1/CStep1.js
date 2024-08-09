import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CStep1.css";

// toast-configuration method,
toast.configure();

function CStep1() {

    //toast
    const notify = () => {
        // Calling toast method by passing string
        // toast("Please, Create Your Profile !");
        toast.info("Please, Create Your Profile !", {
            position: toast.POSITION.BOTTOM_CENTER,
            pauseOnHover: false,
            draggable: false,
            autoClose: 5000
        });
    };


    //scroll
    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('scroll');
            if (header) {
                const scroll = window.scrollY;
                if (scroll >= 100) {
                    header.classList.add('scroll');
                } else {
                    header.classList.remove('scroll');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // popup
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => { setIsOpen(!isOpen); };
    const closePopup = () => { setIsOpen(false); };

    //errorpopup
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const toggleErrorPopup = () => { setIsErrorOpen(!isErrorOpen); };
    const closeErrorPopup = () => { setIsErrorOpen(false); };

    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.classList.add('blur');
    //     } else {
    //         document.body.classList.remove('blur');
    //     }
    // }, [isOpen]);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsOpen(true);
    //     }, 10000); // 10000 milliseconds (10 seconds)

    //     return () => clearTimeout(timer); // Cleanup function
    // }, []);


    return (
        <>
            <section className="inner-header" id="scroll">
                <div className="upper-list">
                    <div className="container align-box">
                        <div className="box-1">
                            <ul className="info-list">
                                <li><span><a href="tel:090078601"><i className="fa-solid fa-phone"></i> 0900 78601</a></span></li>
                                <li><span><a href="mailto:info@Dvote.pk"><i className="fa-solid fa-envelope"></i> info@Dvote.pk</a></span></li>
                            </ul>
                        </div>
                        <div className="box-2">
                            <ul className="social-list">
                                <li><a href="javascript:;"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="javascript:;"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="javascript:;"><i className="fa-brands fa-instagram"></i></a></li>|
                                <li><span><i class="fa fa-user-plus" aria-hidden="true"></i></span><Link to="/profile">Create Profile</Link></li>|
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-nav">
                            <div className="navbar-nav mr-auto">
                                <div className="create"><img src="assets/images/back.png" alt="Create Dao" className="create-arrow" onClick={toggleErrorPopup} />Create your DAO</div>
                                {/* ============================== Error Popup ======================================*/}
                                {isErrorOpen && (
                                    <div className="error-popup-overlay" onClick={closeErrorPopup}>
                                        <div className="error-popup">
                                            <span className="error-close" onClick={closeErrorPopup}>&times;</span>
                                        </div>
                                        <div className="error-popup-bottom">
                                            <img className="error-popup-img" src="assets/images/error.png" alt="Error" />
                                            <h3 className="error-title">Exit DAO creation</h3>
                                            <p className="error-description">If you leave the process, you'll lose all the information you've put in. Would you like to exit the process?</p>
                                            <Link to="/create"><button className="close-error-btn">Yes, exit now</button></Link>
                                            <Link to="/create-s1"><button className="close-error-btn-stay">No, stay</button></Link>
                                        </div>
                                    </div>
                                )}
                                {/*================================================================================*/}

                            </div>


                        </div>
                        <div className="navbar-nav ml-auto">
                            <button className="createdao-btn" onClick={togglePopup}><img src="assets/images/fox-btn.png" alt="Book Online" /> Connect Wallet</button>
                        </div>
                        {/* ============================== popup ===========================================*/}
                        {isOpen && (
                            <div className="popup-overlay" onClick={closePopup}>
                                <div className="popup">
                                    <span className="close" onClick={closePopup}>&times;</span>
                                    <p>Connect wallet to continue</p>
                                </div>
                                <div className="popup-bottom">
                                    <img className="popup-img" src="assets/images/wallet.svg" alt="Wallet" />
                                    <h3 className="title">Wallet connection</h3>
                                    <p className="description">Connect your wallet to continue.</p>
                                    <Link to="" className="connect-wallet-btn" onClick={notify}>Connect wallet now</Link>
                                </div>
                            </div>
                        )}
                        {/*==============================================================================*/}

                    </nav>
                </div>
            </section>

            <section className="step-one-inner">
                <div className="main-container">
                    <div className="main-title">Create your DAO</div>
                    <div className="main-side-text">Step 1 of 4</div>
                    <div className="progress-bar">
                        <div className="progress-bar-inner" id="progress-bar-inner"></div>
                    </div>
                    <div className="main-heading">Select Blockchain</div>
                    <div className="main-description">The chain you choose is where your tokens and assets are stored. If you already have a token, choose the chain your token is minted on. This cannot be changed later.</div>

                </div>

            </section>

            <section className="blockchain-inner">
                <div className="container">
                    <div className="row">
                        <div class="blockchain-container">
                            <button class="blockchain-button">All Blockchains</button>
                            <button class="blockchain-button">Ethereum Blockchain</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="names-inner">
                <div class="names-container">
                    <div className="row">
                        <div className="doneblock-container">
                            <img className="doneblock-image" src="assets/images/ethereum.png" alt="ethereum" />
                            <h5 className="doneblock-title">Ethereum</h5>
                            <p className="doneblock-para">L1 Blockchain</p>
                        </div>
                        
                        <div className="row">
                        <div className="doneblock-container">
                            <img className="doneblock-image" src="assets/images/ethereum.png" alt="ethereum" />
                            <h5 className="doneblock-title">Ethereum</h5>
                            <p className="doneblock-para">L1 Blockchain</p>
                        </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* <section className="bottom-inner">
                <div className="bottom-buttons">
                    <button className="bottom-backbtn"><i class="fa-solid fa-circle-chevron-left"></i>Back</button>
                </div>
            </section> */}
        </>
    );
}

export default CStep1;