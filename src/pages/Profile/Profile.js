import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProfileInner from '../../components/ProfileInner/ProfileInner';
import Footer from '../../components/Footer/Footer';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import '../../App.css';
import { useWallet } from '../../context/walletContext';
import { useOwner } from '../../context/ownerCheck';
import { contractABIProfile, contractAddressProfile } from "../../constant/Userprofile"
import Web3 from 'web3';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Profile() {


  const backgroundImageUrl = 'url("assets/images/inner-banner.jpg")';
  const { walletAddress } = useWallet();
  const { setAddress } = useOwner();
  const [hideButton, sethideButton] = useState(false)
  const [profileData, setprofileData] = useState({
    userName: "",
    password: "",
    email: "",
    country: ""
  })

  const [callContract, setcallContract] = useState(false);
  const [contract, setContract] = useState(null);



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

          var newContract = new newWeb3.eth.Contract(contractABIProfile, contractAddressProfile);

          setContract(newContract)
          /*  */
          /* 
          
          */
          const result = await newContract.methods.getUserProfile(accounts[0]).call();
          console.log("piuy", result)
          setAddress(accounts[0])
          if (result[0]) {
            sethideButton(true);
            setprofileData({
              userName: result.userName,
              email: result.email,
              country: result.country,
              password: result.password,
            });
          }


        } catch (error) {
          console.log('Error fetching user profile:', error);
        }
      }
    };


    fetchData();
  }, [walletAddress, callContract]);

  const handleSubmit = async (data) => {

    if (walletAddress == null) {
      //  toast.error('Connect wallet first', { duration: 7000 });
      toast.error("Connect wallet first", {
        position: toast.POSITION.TOP_CENTER,
        pauseOnHover: false,
        draggable: false,
        autoClose: 5000
      });
      return; // Stop further processing if wallet address is null
    }

    try {
      console.log("submit data", data)
      const newWeb3 = new Web3(window.ethereum);

      const contract = new newWeb3.eth.Contract(contractABIProfile, contractAddressProfile);
      await contract.methods.addUserProfile(
        walletAddress,
        data.userName,
        data.email,
        data.country,
        data.password
      ).send({ from: walletAddress });

      // toast.success('Profile Registered', { duration: 7000 });
      toast.success("Profile Registered", {
        position: toast.POSITION.TOP_CENTER,
        pauseOnHover: false,
        draggable: false,
        autoClose: 5000
      });
      setcallContract(true);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }






  return (
    <>
      <><Header />
        {/*************************************** MAIN CONTENT ***************************************/}
        <section className="inner-banner" style={{ backgroundImage: backgroundImageUrl }}>
          <div className="container">
            <div className="row">
              <div className="content-box">
                <h2>Create Profile</h2>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><a href="javascript:;">/</a></li>
                  <li><Link to="/profile">Create Profile</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/********************************************************************************************/}
        <ProfileInner profileData={profileData} setprofileData={setprofileData} hideButton={hideButton} onSubmit={handleSubmit} />
        <Footer />
        <ScrollButton /></>

    </>
  );
}

export default Profile;