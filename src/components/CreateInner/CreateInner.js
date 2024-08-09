import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateInner.css";
import Web3 from 'web3';
import { useWallet } from '../../context/walletContext';
import { useDao } from '../../context/daoaddress';
import '../../components/Header/Header.css'
import { contractABI, contractAddress } from "../../constant/BuildDao"
import { useOwner } from '../../context/ownerCheck';
import swal from 'sweetalert';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';

// toast-configuration method,
// toast.configure();

function CreateInner() {
    const { daoAddress, setdao } = useDao();
    const { daoDetails, setAddress } = useOwner();
    //toast
    const notify = () => {
        // Calling toast method by passing string
        // toast("Please, Create Your Profile !");
        // toast.info("Please, Create Your Profile !", {
        //     position: toast.POSITION.BOTTOM_CENTER,
        //     pauseOnHover: false,
        //     draggable: false,
        //     autoClose: 5000
        // });
        swal("Please, Create Your Profile !");
        swal({
            title: "Please, Create Your Profile !",
            icon: "info",
            button: false,
            timer: 5000,      
        });
    };
    const [daoData, setdaoData] = useState({
        name: "",
        description: "",
        blockchain: "",

    })
    console.log("daoData",daoData, daoAddress);
    const { walletAddress, setWallet } = useWallet();
    useEffect(() => {
        const fetchwalletaddress = async () => {
            const newWeb3 = new Web3(window.ethereum);
            const accountforwallet = await newWeb3.eth.getAccounts();
            setWallet(accountforwallet[0])
        }
        fetchwalletaddress()
    }, [])


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
    const [callContract, setcallContract] = useState(false);
    const [hideButton, sethideButton] = useState(false)
    //errorpopup
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const toggleErrorPopup = () => { setIsErrorOpen(!isErrorOpen); };
    const closeErrorPopup = () => { setIsErrorOpen(false); };
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { id, value } = e.target;
       
        console.log("qwretr", id, value)
        setdaoData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    console.log("DS daoAddress", daoAddress)
    useEffect(() => {
        const fetchData = async () => {
            if (walletAddress) {
                try {
                    const newWeb3 = new Web3(window.ethereum);
                    const accounts = await newWeb3.eth.getAccounts();

                    if (accounts.length === 0) {
                        console.log('No Ethereum accounts available.');

                        return;
                    }

                    var newContract = new newWeb3.eth.Contract(contractABI, contractAddress);


                    /*  */
                    /* 
                    
                    */
                  //  const result = await newContract.methods.getDAOByAddress(walletAddress).call();
                  const result = await newContract.methods.getDAOsForAddress(walletAddress).call();
                    console.log("piuy", result)
                  //  setAddress(result[3])
                    //dao naddress
                    setdao(result[4])

                    if (result) {
                        sethideButton(true);
                        setdaoData({
                            name: result.name,
                            description: result.description,
                            blockchain: result.blockchain,
                        });
                    }


                } catch (error) {
                    console.log('Error fetching user profile:', error);
                }
            }
        };


        fetchData();
    }, [walletAddress, callContract]);


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        console.log("SDFsfdsfdsf daoData", daoData)
        const newWeb3 = new Web3(window.ethereum);

        const contract = new newWeb3.eth.Contract(contractABI, contractAddress);
        const registered = await contract.methods.createDAO(
            daoData.name,
            daoData.description,
            daoData.blockchain,
        ).send({ from: walletAddress });
        console.log("dao registered", registered, registered.events.DAOCreated.returnValues.daoAddress)
        await setdao(registered.events.DAOCreated.returnValues.daoAddress)
        await setAddress(walletAddress)
       // setcallContract(true)
        // toast.success("dao Registered", {
        //     position: toast.POSITION.TOP_CENTER,
        //     pauseOnHover: false,
        //     draggable: false,
        //     autoClose: 5000
        // });
        swal({
            title: "DAO Registered",
            text: "Your DAO has been registered successfully!",
            icon: "success",
            button: false,
            timer: 5000
          });
          setTimeout(() => {
            navigate("/Dashboard");
        }, 2000);
    };


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
                {/* 
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-nav">
                            <div className="navbar-nav mr-auto">
                                <div className="create"><Link to="/information"><img src="assets/images/back.png" alt="Create Dao" className="create-arrow" /></Link>Create your DAO  ye hatao or logo lagao apna </div>
                            </div>
                        </div>
                        {walletAddress == null ? (
                            <div className="end-box"><Link className="nav-link book-btn" onClick={togglePopup}><img src="assets/images/fox-btn.png" alt="Book Online" />Connect Wallet</Link></div>
                        ) : (

                            <div className="end-box"><div className="nav-link book-btn" ><img src="assets/images/fox-btn.png" alt="Book Online" /><h6 >{walletAddress.substring(0, 9)}...</h6></div></div>

                        )}
                      
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
                                    <Link to="#" className="connect-wallet-btn" onClick={notify}>Connect wallet now</Link>
                                </div>
                            </div>
                        )}
                        

                    </nav>
                </div> */}
            </section>

            <section className="create-inner">
                <div className="horizontal-container">
                    <div className="container-heading">Build your DAO</div>
                    <div className="container-description">Start simple and learn as you go. You can always evolve your DAO in the future.</div>
                    <Link><button class="container-button">Build your DAO<img src="assets/images/right.png" alt="Button Image" /></button> </Link>
                </div>

                <section className="profile-inner">
                <WaveAnimation />
                    <div className="profile-form">
                        <form onSubmit={handleSubmit}>
                            <div className="title-heading">
                                <h2 className="title">Create Dao</h2>
                            </div>
                            <div className="main-content">
                                <div className="input-container">
                                    <i className="fa fa-user icon"></i>
                                    <input className="input-field" value={daoData.name} required type="text" placeholder="name" name="name" id='name' onChange={handleChange} />
                                </div>
                                <div className="input-container">
                                    <i class="fa fa-flag icon"></i>
                                    <input className="input-field" value={daoData.description} required type="text" placeholder="description" name="description" id='description' onChange={handleChange} />
                                </div>
                                <div className="input-container">
                                    <i className="fa fa-envelope icon"></i>
                                    <input className="input-field" value={daoData.blockchain} required type="text" placeholder="purpose" name="blockchain" id='blockchain' onChange={handleChange} />
                                </div> 
                                <button type="submit" className="register-btn">Register</button>
                               
                               {/*  {!hideButton ? (
                                    <button type="submit" className="register-btn">Register</button>
                                ) : (
                                  
                                    <button className="register-btn"><Link to="/Dashboard">{`You are a ${daoDetails.role} of ${daoDetails.DaoName} Dao`}</Link> </button>



                                )} */}

                            </div>
                        </form>
                    </div>

                </section>

            </section>
        </>
    );
}

export default CreateInner;