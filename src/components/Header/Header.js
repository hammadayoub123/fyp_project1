import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Header.css';
import Web3 from 'web3';
import { useWallet } from '../../context/walletContext';
import swal from 'sweetalert';


// toast-configuration method,
//toast.configure();

function Header() {
    const [web3, setweb3] = useState(null);
    const navigate = useNavigate();
    const { walletAddress, setWallet } = useWallet();

    /* 
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
        }; */

    console.log("dsfsjkd", walletAddress)


    useEffect(() => {
        const fetchwalletaddress = async () => {
            const newWeb3 = new Web3(window.ethereum);
            const accountforwallet = await newWeb3.eth.getAccounts();
            setWallet(accountforwallet[0])
        }
        fetchwalletaddress()
    }, [])

    useEffect(() => {
        const checkWalletConnection = async () => {
            if (window.ethereum) {
                try {
                    // Create a new instance of Web3
                    const newWeb3 = new Web3(window.ethereum);
                    if (window.ethereum.isConnected) {
                        console.log('MetaMask is connected!');

                        // Get the user's Ethereum address
                        const accounts = await window.ethereum.request({ method: 'eth_accounts' });

                        const userAddress = accounts[0]; // Assuming the user grants access to only one account

                        console.log('User address:', userAddress, accounts);
                        setWallet(userAddress)
                    }

                } catch (error) {
                    // Handle any errors that occur during connection
                    console.error("Error connecting to wallet:", error);
                }
            } else {
                // If MetaMask is not detected, indicate that the wallet is not connected
                console.log("MetaMask not detected");
            }
        };

        // Call the function to check wallet connection when the component mounts
        checkWalletConnection();
    }, []);
    const newWeb3 = new Web3(window.ethereum);
    const accountforwallet = newWeb3.eth.getAccounts();
    console.log("accountforwallet", accountforwallet[0])

    const handleWalletClick = async () => {
        if (window.ethereum) {
            const newWeb3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            setweb3(newWeb3);

            const accounts = await newWeb3.eth.getAccounts();
            setWallet(accounts[0]);
            console.log("dsvdshkvjfdsfcd", accounts[0])
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Continue with your logic after the delay
            if (accounts[0] !== null) {
                //    toast.success('Wallet Connected');
                // toast.success("Wallet Connected", {
                //     position: toast.POSITION.TOP_CENTER,
                //     pauseOnHover: false,
                //     draggable: false,
                //     autoClose: 2000
                // });
                swal({
                    title: "Wallet Connected",
                    text: "Your wallet has been successfully connected!",
                    icon: "success",
                    button: false,
                    timer: 2200
                  });
                  

                const balance = await newWeb3.eth.getBalance(accounts[0]);
                console.log("ETH Balance:", newWeb3.utils.fromWei(balance, 'ether'));

                // Wait for 2 seconds (2000 milliseconds) before navigating to the next page
                /*   setTimeout(() => {
                      navigate("/profile");
                  }, 2000); */
            }
            else if(accounts[0] == null){
                swal({
                    title: "Wallet Disconnected",
                    text: "Your wallet has been successfully disconnected!",
                    icon: "warning",
                    button: false,
                    timer: 2200
                  });
            }


        }
    }





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

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsOpen(true); 
    //     }, 6000); // 6000 milliseconds (6 seconds)

    //     return () => clearTimeout(timer); // Cleanup function
    // }, []);


    return (

        <header className="main-header" id="scroll">
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
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/"><img className="logo" src="assets/images/logo.png" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                                {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="airport-transfer.html">Airport Transfer</a></li>
                                        <li><a className="dropdown-item" href="seaport-transfer.html">Seaport Transfer</a></li>
                                        <li><a className="dropdown-item" href="station-transfer.html">Station Transfer</a></li>
                                        <li><a className="dropdown-item" href="hotel-transfer.html">Hotel Transfer</a></li>
                                        <li><a className="dropdown-item" href="city-transfer.html">City to City Transfer</a></li>
                                        <li><a className="dropdown-item" href="private-hire.html">Private Hire</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/blogs">Our Blogs</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        {/* <div className="end-box"><Link className="nav-link book-btn" onClick={togglePopup}><img src="assets/images/fox-btn.png" alt="Book Online" /> Connect Wallet</Link></div> */}
                        {walletAddress == null ? (
                            <div className="end-box"><Link className="nav-link book-btn" onClick={togglePopup}><img src="assets/images/fox-btn.png" alt="Book Online" /> Connect Wallet</Link></div>
                        ) : (

                            <div className="end-box"><div className="nav-link book-btn" ><img src="assets/images/fox-btn.png" alt="Book Online" /><h6 className='wallet-address'>{walletAddress}</h6></div></div>

                        )}
                        {/* ============================== popup continue wallet ===========================================*/}
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
                                    <Link to="" className="connect-wallet-btn" onClick={handleWalletClick}>Connect wallet now</Link>
                                </div>
                            </div>
                        )}
                        {/*==============================================================================*/}

                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;