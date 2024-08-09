import React, { useEffect, useState } from 'react';

import './ProfileInner.css';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import { useWallet } from '../../context/walletContext';
import { useOwner } from '../../context/ownerCheck';
import { useDao } from '../../context/daoaddress';
import { useNavigate } from 'react-router-dom';



function ProfileInner({ profileData, setprofileData, hideButton, onSubmit }) {
  console.log("DSvsdhkdjkl", profileData)
  const { walletAddress } = useWallet();
  const { daoDetails } = useOwner();

  const { daoAddress, setdao } = useDao();
  console.log("daoDetails", daoDetails)
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log("qwretr", id, value)
    setprofileData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    onSubmit(profileData); // Call the onSubmit function passed from the parent component
  };

  const handleSubmitToDashboard = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    await setdao(daoDetails.daoAddress)
    setTimeout(() => {
      navigate("/Dashboard");
    }, 2000);

  };

  const handleSubmitToCreate = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    await setdao(daoDetails.daoAddress)
    setTimeout(() => {
      navigate("/create");
    }, 2000);

  };

  return (
    <section className="profile-inner">
      <WaveAnimation />
      <div className="profile-form">
        <form onSubmit={handleSubmit} >
          <div className="title-heading">
            <h2 className="title">Create Profile Form</h2>
          </div>
          <div className="main-content">
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input className="input-field" value={profileData.userName} required disabled={hideButton} onChange={handleChange} type="text" placeholder="Username" name="userName" id='userName' />
            </div>
            <div className="input-container">
              <i class="fa fa-flag icon"></i>
              <input className="input-field" value={profileData.country} required disabled={hideButton} onChange={handleChange} type="text" placeholder="Country" name="country" id='country' />
            </div>
            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input className="input-field" value={profileData.email} required disabled={hideButton} onChange={handleChange} type="text" placeholder="Email" name="email" id='email' />
            </div>
            <div className="input-container">
              <i className="fa fa-key icon"></i>
              <input className="input-field" value={profileData.password} required disabled={hideButton} onChange={handleChange} type="password" placeholder="Password" name="password" id='password' />
            </div>
            {/*   <button type="submit" className="register-btn">Register</button> */}
            {!hideButton ? (
              <button type="submit" className="register-btn">Register</button>
            ) : (
              <button type="submit" className="register-btn" >
                {daoDetails.role === 'Owner' || daoDetails.role === 'Member' ? (
                  <button className="register-btn" onClick={handleSubmitToDashboard} >{`You are a ${daoDetails.role} of ${daoDetails.DaoName} Dao`}</button>
                ) : (
                  <button  className="register-btn" onClick={handleSubmitToCreate}>{daoDetails.role}</button>
                )}
              </button>
            )}

          </div>
        </form>
      </div>

    </section>
  );
}

export default ProfileInner;

