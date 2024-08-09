// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { Chart } from 'react-google-charts';
// import './DashboardInner.css';
// import { contractABI, contractAddress } from "../../constant/BuildDao"


// function DashboardInner() {
//     // popups
//     const [isOpen, setIsOpen] = useState(false);
//     const [isOpenRmove, setIsOpenRemove] = useState(false);
//     const [isOpensuccess, setIsOpenSuccess] = useState(false);
//     const [isOpenpending, setIsOpenPending] = useState(false);

//     const togglePopup = () => { setIsOpen(!isOpen); };
//     const closePopup = () => { setIsOpen(false); };
//     const toggleRemovePopup = () => { setIsOpenRemove(!isOpen); };
//     const closeRemovePopup = () => { setIsOpenRemove(false); };
//     const toggleSuccessPopup = () => { setIsOpenSuccess(!isOpen); };
//     const closeSuccessPopup = () => { setIsOpenSuccess(false); };
//     const togglePendingPopup = () => { setIsOpenPending(!isOpen); };
//     const closePendingPopup = () => { setIsOpenPending(false); };

//     const data = [
//         ['Country', 'Mhl'],
//         ['Italy', 54.8],
//         ['France', 48.6],
//         ['Spain', 44.4],
//         ['USA', 23.9],
//         ['Argentina', 14.5],
//     ];

//     const options = {
//         title: 'World Wide Wine Production',
//     };


//     return (
//         <>
//             <Helmet>
//                 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
//             </Helmet>

//             <section className="voting-section">
//                 <div className='container'>
//                     <h3>Voting Session</h3>
//                     <div className="cards-container">
//                         <div class="card success" onClick={toggleSuccessPopup}>
//                             <h4>Success</h4>
//                             <p>Your recent vote was successful.</p>
//                         </div>

//                         <div class="card pending" onClick={togglePendingPopup}>
//                             <h4>Pending</h4>
//                             <p>Your vote is currently pending.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <div className="main-content">
//                 <div className="table-container">
//                     <div className="heading-container">
//                         <h2 className="table-heading">Members Details</h2>
//                     </div>
//                     <div class="table-message">There is no data</div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Age</th>
//                                 <th>Occupation</th>
//                                 <th>Location</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td data-label="Name">John Doe</td>
//                                 <td data-label="Age">28</td>
//                                 <td data-label="Occupation">Software Developer</td>
//                                 <td data-label="Location">New York</td>
//                             </tr>
//                             <tr>
//                                 <td data-label="Name">Jane Smith</td>
//                                 <td data-label="Age">34</td>
//                                 <td data-label="Occupation">Graphic Designer</td>
//                                 <td data-label="Location">San Francisco</td>
//                             </tr>
//                             <tr>
//                                 <td data-label="Name">Paul Brown</td>
//                                 <td data-label="Age">45</td>
//                                 <td data-label="Occupation">Project Manager</td>
//                                 <td data-label="Location">Chicago</td>
//                             </tr>
//                             <tr>
//                                 <td data-label="Name">Emily White</td>
//                                 <td data-label="Age">29</td>
//                                 <td data-label="Occupation">Data Scientist</td>
//                                 <td data-label="Location">Austin</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <div className="analytics-inner">
//                 <div className="container">
//                     <div className="row">
//                         <div style={{ width: '100%', maxWidth: '600px', height: '500px' }}>
//                             <Chart
//                                 chartType="PieChart"
//                                 data={data}
//                                 options={options}
//                                 width="100%"
//                                 height="400px"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ============================== popup Add Member ===========================================*/}
//             {isOpen && (
//                 <div className="popup-overlay">
//                     <div className="popup">
//                         <span className="close" onClick={closePopup}>&times;</span>
//                         <p>Add Member To Participate.</p>
//                     </div>
//                     <div className="popup-bottom">
//                         <img className="popup-img" src="assets/images/add_member.png" alt="Add_member" />
//                         <h3 className="title">Voter's Address</h3>
//                         <input type="text" placeholder="Enter Voter's Address" className="voter-address-input" />
//                         <Link to="" className="add-member-btn">Add Member now</Link>
//                     </div>
//                 </div>
//             )}
//             {/*==============================================================================*/}

//             {/* ============================== popup Remove Member ===========================================*/}
//             {isOpenRmove && (
//                 <div className="popup-overlay">
//                     <div className="popup">
//                         <span className="close" onClick={closeRemovePopup}>&times;</span>
//                         <p>Remove Member From Participation.</p>
//                     </div>
//                     <div className="popup-bottom">
//                         <img className="popup-img" src="assets/images/rem_member.png" alt="Remove_member" />
//                         <h3 className="title">Voter's Address</h3>
//                         <input type="text" placeholder="Enter Voter's Address" className="voter-address-input" />
//                         <Link to="" className="add-member-btn">Remove Member now</Link>
//                     </div>
//                 </div>
//             )}
//             {/*==============================================================================*/}

//             {/* ============================== popup success ===========================================*/}
//             {isOpensuccess && (<div className="modal-overlay">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h2>Session Results</h2>
//                         <button className="close-button" onClick={closeSuccessPopup}>&times;</button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="winner-section">
//                             <h3>Winner</h3>
//                             <p className="address">0xa5f64d</p>
//                             <p className="votes">3 votes</p>
//                         </div>
//                         <div className="runner-up-section">
//                             <h3>Runner-up</h3>
//                             <p className="address">0xaef64d</p>
//                             <p className="votes">4 votes</p>
//                         </div>
//                         <div className="session-info">
//                             <p><b>Session start time:</b> 1 am</p>
//                             <p><b>Session end time:</b> 3 am</p>
//                             <p className="status">Session:<span className="stc-check"> Completed</span></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             )}
//             {/*==============================================================================*/}

//             {/* ============================== popup pending ===========================================*/}
//             {isOpenpending && (<div className="modal-overlay">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h2>Session Results</h2>
//                         <button className="close-button" onClick={closePendingPopup}>&times;</button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="winner-section">
//                             <h3>Voting-In Progress</h3>
//                             <p className="address">0xa5f64d</p>
//                             <p className="votes">3 votes</p>
//                             <div className="session-info"></div>
//                             <p className="address">0xaef64d</p>
//                             <p className="votes">4 votes</p>
//                         </div>

//                         <div className="session-info">
//                             <p><b>Session start time:</b> 1 am</p>
//                             <p><b>Session end time:</b> 3 am</p>
//                             <p className="status">Session:<span className="stp-check"> Pending</span></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             )}
//             {/*==============================================================================*/}

//             <div className="main-body">
//                 <aside className="sidebar">
//                     <div className="sidebar-header">
//                         <Link className="navbar-brand" to="/"><img className="logo" src="assets/images/logo.png" /></Link>
//                         {/* <h2>DVOTE</h2> */}
//                     </div>
//                     <ul className="sidebar-links">
//                         <h4>
//                             <span>Oranization Name</span>
//                             <div className="menu-separator"></div>
//                         </h4>
//                         <li>
//                             <Link to="#">
//                                 <span class="material-symbols-outlined"> group</span>
//                                 Member Details
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="#" onClick={togglePopup}>
//                                 <span className="material-symbols-outlined"> group_add </span>
//                                 Add Member
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="#" onClick={toggleRemovePopup}>
//                                 <span class="material-symbols-outlined">group_remove</span>
//                                 Remove Member
//                             </Link>
//                         </li>

//                         <h4>
//                             <span><div className="menu-separator"></div></span>
//                             <div className="menu-separator"></div>
//                         </h4>
//                         <li>
//                             <Link to="#">
//                                 <span className="material-symbols-outlined"> account_circle </span>
//                                 Profile
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="#">
//                                 <span className="material-symbols-outlined"> settings </span>
//                                 Settings
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="#">
//                                 <span className="material-symbols-outlined"> logout </span>
//                                 Logout
//                             </Link>
//                         </li>
//                     </ul>
//                     {/* <div className="user-account">
//                         <div className="user-profile">
//                             <img src="images/profile-img.jpg" alt="Profile Image" />
//                             <div className="user-detail">
//                                 <h3>name of organi....</h3>
//                                 <span>details....</span>
//                             </div>
//                         </div>
//                     </div> */}
//                 </aside>
//             </div>


//         </>
//     );
// }

// export default DashboardInner;





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Chart } from 'react-google-charts';
import './DashboardInner.css';
import { contractABI, contractAddress } from "../../constant/BuildDao"
import Web3 from 'web3';
import { useDao } from '../../context/daoaddress';
import { useWallet } from '../../context/walletContext';
import { useOwner } from '../../context/ownerCheck';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { contractABIProfile, contractAddressProfile } from "../../constant/Userprofile"
import { contractAddressVote, contractABIVote } from "../../constant/daoVote"

function DashboardInner() {

    const { daoAddress, setdao } = useDao();
    const [membersAddresses, setmembersAddresses] = useState([]);
    const { daoDetails } = useOwner();

    // popups
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenRmove, setIsOpenRemove] = useState(false);
    const [isOpensuccess, setIsOpenSuccess] = useState(false);
    const [isOpenpending, setIsOpenPending] = useState(false);
    const [memberAddress, setmemberAddress] = useState("");
    const [callfunction, setcallfunction] = useState(false);
    const [isOpenAdded, setisOpenAdded] = useState(false);
    const togglePopup = () => { setIsOpen(!isOpen); };
    const closePopup = () => { setIsOpen(false); };
    const toggleRemovePopup = () => { setIsOpenRemove(!isOpen); };
    const closeRemovePopup = () => { setIsOpenRemove(false); };
    const toggleSuccessPopup = () => { setIsOpenSuccess(!isOpen); };
    const closeSuccessPopup = () => { setIsOpenSuccess(false); };
    const togglePendingPopup = (session) => { setSelectedSession(session); setIsOpenPending(!isOpen); };
    const toggleaddedPopup = () => { setisOpenAdded(!isOpen); };
    const closePendingPopup = () => { setIsOpenPending(false); };
    const closeaddedPopup = () => { setisOpenAdded(false); };


    /* const data = [
        ['Country', 'Mhl'],
        ['Italy', 54.8],
        ['France', 48.6],
        ['Spain', 44.4],
        ['USA', 23.9],
        ['Argentina', 14.5],
    ];

    const options = {
        title: 'World Wide Wine Production',
    }; */
    const [profiles, setProfiles] = useState([]);
    const [runFunction, setrunFunction] = useState(false)
    const [allvotesession, setallvotesession] = useState([]);
    const [selectedSession, setSelectedSession] = useState(null);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const newWeb3 = new Web3(window.ethereum);
            const accounts = await newWeb3.eth.getAccounts();

            if (accounts.length === 0) {
                console.log('No Ethereum accounts available.');
                return;
            }

            const contract = new newWeb3.eth.Contract(contractABI, contractAddress);

            try {
                console.log("object", daoAddress[0]);
                const result = await contract.methods.getDAOByAddress(daoAddress[0]).call();

                setmembersAddresses(result[5])
                if (result) {
                    /*  toast.success("get dao ", {
                         position: toast.POSITION.TOP_CENTER,
                         pauseOnHover: false,
                         draggable: false,
                         autoClose: 5000
                     }); */
                }
            } catch (error) {
                console.error('Failed to fetch getDAOByAddress:', error);
            }
        };

        fetchData();
    }, [runFunction]);
    console.log("selectedSession", selectedSession)
    useEffect(() => {
        const fetchProfiles = async () => {
            const newWeb3 = new Web3(window.ethereum);
            const newContract = new newWeb3.eth.Contract(contractABIProfile, contractAddressProfile);

            const profilePromises = membersAddresses.map(async (address) => {
                try {
                    const profile = await newContract.methods.getUserProfile(address).call();
                    /*   toast.success("Memeber removed", {
                          position: toast.POSITION.TOP_CENTER,
                          pauseOnHover: false,
                          draggable: false,
                          autoClose: 5000
                      }); */
                    return { address, ...profile };

                } catch (error) {
                    console.error('Failed to fetch profile for address:', address, error);
                    return null;
                }
            });

            const profilesData = await Promise.all(profilePromises);
            setProfiles(profilesData.filter(profile => profile !== null));
        };

        if (membersAddresses.length > 0) {
            fetchProfiles();
        }
    }, [membersAddresses]);

    useEffect(() => {
        const fetchdataforsession = async () => {
            const newWeb3 = new Web3(window.ethereum);
            const newContract = new newWeb3.eth.Contract(contractABIVote, contractAddressVote);


            try {
                const data = await newContract.methods.getAllVotingSessions(daoAddress[0]).call();
                console.log("DDs", data)
                const formattedSessions = data.map(session => ({
                    sessionId: Number(session.sessionId.toString().replace('n', '')),
                    startTime: parseInt(session.startTime.toString().replace('n', ''), 10),
                    endTime: parseInt(session.endTime.toString().replace('n', ''), 10),
                    purpose: session.purpose,
                    title: session.title,
                    status: session.status,
                    winner: session.winner,
                    candidates: session.candidates.map(candidate => ({
                        address: candidate,
                        votes: parseInt(session.candidateVotes[session.candidates.indexOf(candidate)].toString().replace('n', ''), 10)
                    })),
                    daoAddress: session.daoAddress,

                }));
                console.log("first===========", formattedSessions)
                setallvotesession(formattedSessions);
                /*   toast.success("Memeber removed", {
                      position: toast.POSITION.TOP_CENTER,
                      pauseOnHover: false,
                      draggable: false,
                      autoClose: 5000
                  }); */


            } catch (error) {
                console.error('Failed to fetch profile for address:', error);
                return null;
            }


        };
        fetchdataforsession()
    }, [callfunction]);


    const handleChangeMember = (e) => {
        const { id, value } = e.target;
        console.log("qwretr", id, value)
        setmemberAddress(value)

    };

    const { walletAddress } = useWallet();
    // Contract interaction functions


    const addMember = async (e) => {
        e.preventDefault();


        const newWeb3 = new Web3(window.ethereum);
        const accounts = await newWeb3.eth.getAccounts();

        if (accounts.length === 0) {
            console.log('No Ethereum accounts available.');

            return;
        }
        const contract = new newWeb3.eth.Contract(contractABI, contractAddress);
        console.log("Ffsd",daoAddress[0] )

        try {
            const result = await contract.methods.addMember(daoAddress[0], memberAddress).send({ from: walletAddress });
            console.log("piuy", result)
            if (result) {
                setIsOpen(false)
                setrunFunction(true)
                /*  toast.success("Memeber added", {
                     position: toast.POSITION.TOP_CENTER,
                     pauseOnHover: false,
                     draggable: false,
                     autoClose: 5000
                 }); */
            }
            // Handle success (maybe show a success popup)
        } catch (error) {
            // Handle error (maybe show an error popup)
            console.error('Failed to add member:', error);
        }
    };

    const removeMember = async (e) => {
        e.preventDefault();


        const newWeb3 = new Web3(window.ethereum);
        const accounts = await newWeb3.eth.getAccounts();

        if (accounts.length === 0) {
            console.log('No Ethereum accounts available.');

            return;
        }
        const contract = new newWeb3.eth.Contract(contractABI, contractAddress);

        try {
            const result = await contract.methods.removeMember(daoAddress[0], memberAddress).send({ from: walletAddress });
            console.log("piuy", result)
            if (result) {
                setIsOpenRemove(false)
                setrunFunction(true)
                /*  toast.success("Memeber removed", {
                     position: toast.POSITION.TOP_CENTER,
                     pauseOnHover: false,
                     draggable: false,
                     autoClose: 5000
                 }); */
            }
            // Handle success (maybe show a success popup)
        } catch (error) {
            // Handle error (maybe show an error popup)
            console.error('Failed to add member:', error);
        }
    };

    console.log("allvotesession", allvotesession)




    const [selectedCandidates, setSelectedCandidates] = useState([]); // State to store selected candidates
    const [startDateTime, setStartDateTime] = useState(''); // State for session start datetime
    const [endDateTime, setEndDateTime] = useState(''); // State for session end datetime
    const [votingTitle, setVotingTitle] = useState(''); // State for voting title
    const [votingPurpose, setVotingPurpose] = useState(''); // State for voting purpose

    // Mock data for candidates
    const candidates = profiles

    // Function to handle selecting a candidate from dropdown
    const handleCandidateSelect = (event) => {

        const selectedAddress = event.target.value;
        const candidate = candidates.find((c) => c.address === selectedAddress);

        if (candidate && !selectedCandidates.includes(candidate.address)) {
            setSelectedCandidates([...selectedCandidates, candidate.address]);
        }
    };

    // Function to handle removing a selected candidate
    const removeCandidate = (addressToRemove) => {
        const updatedCandidates = selectedCandidates.filter((address) => address !== addressToRemove);
        setSelectedCandidates(updatedCandidates);
    };

    // Function to handle input change for start datetime
    const handleStartDateTimeChange = (event) => {

        setStartDateTime(event.target.value);
    };

    // Function to handle input change for end datetime
    const handleEndDateTimeChange = (event) => {

        setEndDateTime(event.target.value);

    };

    // Function to handle input change for voting title
    const handleVotingTitleChange = (event) => {
        setVotingTitle(event.target.value);
    };

    // Function to handle input change for voting purpose
    const handleVotingPurposeChange = (event) => {
        setVotingPurpose(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        // Here you can save the session information to a state, API, or perform other actions

        const unixstarttime = Date.parse(startDateTime) / 1000;
        const unixEndtime = Date.parse(endDateTime) / 1000;
        const sessionData = {
            daoAddress: daoAddress[0],
            title: votingTitle,
            candidates: selectedCandidates,
            startTime: unixstarttime,
            endTime: unixEndtime,
            purpose: votingPurpose,


        };
        console.log('Session Data:', sessionData);

        const newWeb3 = new Web3(window.ethereum);
        const accounts = await newWeb3.eth.getAccounts();

        if (accounts.length === 0) {
            console.log('No Ethereum accounts available.');

            return;
        }

        var newContract = new newWeb3.eth.Contract(contractABIVote, contractAddressVote);


        /*  */
        /* 
        
        */
        const result = await newContract.methods.createVotingSession(

            daoAddress[0],
            votingTitle,
            selectedCandidates,
            unixstarttime,
            unixEndtime,
            votingPurpose

        ).send({ from: walletAddress });
        console.log("return result ", result.events.VotingSessionCreated.returnValues.sessionId
        )
        if (result) {
            setcallfunction(true);
            setisOpenAdded(false);
            setSelectedCandidates([]);
            setStartDateTime("");
            setEndDateTime('');
            setVotingTitle('');
            setVotingPurpose('');
        }
        

    };
    console.log("first", walletAddress)

    const handleVote = async (candidateAddress) => {
        console.log("first", selectedSession, selectedSession.sessionId, candidateAddress)

        console.log("first scdds", walletAddress)
       /*  try {
            const newWeb3 = new Web3(window.ethereum);
            const newContract = new newWeb3.eth.Contract(contractABIVote, contractAddressVote);
            await newContract.methods.vote(selectedSession.sessionId, candidateAddress).send({ from: walletAddress });

            // Refresh voting session data after voting
            setcallfunction(true)
        } catch (error) {
            console.error('Failed to vote:', error);
        } */
    };


    const autoEndSession = async (sessionId) => {
        try {
            console.log("=================autoEndSession", sessionId, walletAddress )
            const newWeb3 = new Web3(window.ethereum);
            const newContract = new newWeb3.eth.Contract(contractABIVote, contractAddressVote);
            await newContract.methods.autoEndSessions(sessionId).send({ from: walletAddress });
            toast.success("Session ended successfully", {
                position: toast.POSITION.TOP_CENTER,
                pauseOnHover: false,
                draggable: false,
                autoClose: 5000
            });
            setIsOpenPending(false)
            setrunFunction(!runFunction)
        } catch (error) {
            console.error('Failed to end session:', error);
        }
    }; 

console.log("vds=vgsdfvfdvfdv", selectedSession, "FGfhfg", walletAddress);
    return (
        <>

            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Helmet>

            {/*  <section className="voting-section">
                <div className='container'>
                    <h3>Voting Sessions</h3>
                    <div className="cards-container">
                        {allvotesession?.map(session => (
                            <div className="card pending" onClick={() => togglePendingPopup(session)} key={session.sessionId}>
                                <h4>{session.title}</h4>
                                <p><strong>winner:</strong> {session.winner}</p>
                               
                            </div>
                        ))}
                        <div className="card pending" onClick={togglePendingPopup}>
                            <h4>create Voting </h4>
                            <p>Your vote is currently pending.</p>
                        </div>
                    </div>
                </div>

                {isOpenpending && selectedSession && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>Session Results</h2>
                                <button className="close-button" onClick={closePendingPopup}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="winner-section">
                                    <h3>Voting In Progress</h3>
                                    {selectedSession.candidates.map((candidate, index) => (
                                        <div key={index} className="session-info">
                                            <p className="address">{candidate.address}</p>
                                            <p className="votes">{candidate.votes} votes</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="session-info">
                                    <p><b>Session start time:</b> {new Date(selectedSession.startTime * 1000).toLocaleString()}</p>
                                    <p><b>Session end time:</b> {new Date(selectedSession.endTime * 1000).toLocaleString()}</p>
                                    <p className="status">Session: <span className="stp-check">{selectedSession.status}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section> */}
            <section className="voting-section">
                
                <div className='container'>
                    <h3>Voting Sessions</h3>
                    <div className="cards-container">
                        {allvotesession?.map(session => (
                            <div className="card success" onClick={() => togglePendingPopup(session)} key={session.sessionId}>
                                <h4>{session.title}</h4>
                                {session.status === 'Pending' ? (
                                    <p><strong>Status:</strong> Voting in Progress</p>
                                ) : (
                                    <p><strong>Status:</strong> Voting Closed</p>
                                )}
                                <p><strong>winner:</strong> {session.winner}</p>
                                {/* Render other details as needed */}
                            </div>
                        ))}
                        {daoDetails.role === 'Owner' && (
                            <>
                        <div className="card pending" onClick={toggleaddedPopup}>
                            <h4>create Voting </h4>
                            <p>Your vote is currently pending.</p>
                        </div>
                        </>
                        ) }
                    </div>
                    
                </div>

                {isOpenpending && selectedSession && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>Session Details</h2>
                                <button className="close-button" onClick={closePendingPopup}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="winner-section">
                                    <h3>{selectedSession.status === 'Pending' ? 'Voting In Progress' : 'Session Results'}</h3>
                                    {selectedSession.status === 'Pending' && selectedSession.endTime > Date.now() / 1000 && daoDetails.role === 'Member' ? (
                                        <div>
                                           {selectedSession.candidates.map((candidate, index) => (
    <div key={index} className="session-info">
        <p className="address">{candidate.address}</p>
        <p className="votes">{candidate.votes} votes</p>
        {candidate.address === walletAddress ? (
            <button
                className="vote-button"
                disabled={true} // Disable the button if walletAddress matches candidate's address
            >
                Vote
            </button>
        ) : (
            <button
                className="vote-button"
                onClick={() => handleVote(candidate.address)}
            >
                Vote
            </button>
        )}
    </div>
))}
                                        </div>
                                    ) : (
                                        <div>
                                            {selectedSession.candidates.map((candidate, index) => (
                                                <div key={index} className="session-info">
                                                    <p className="address">{candidate.address}</p>
                                                    <p className="votes">{candidate.votes} votes</p>
                                                </div>
                                            ))}
                                   {/*    {selectedSession.status === 'Pending' && daoDetails.role === 'Member' &&  ( */}
                                    <div>
                                        <p><strong>WAIT FOR RESULTS</strong></p>
                                        {selectedSession.endTime < (Date.now() / 1000) &&  daoDetails.role === 'Owner' && ( 
                                        <button onClick={() => autoEndSession(selectedSession.sessionId)}>End session</button>
                                    )}
                                    </div>
                        {/*         )} */}
                                        </div>
                                    )}
                                </div>

                                <div className="session-info">
                                    <p><b>Session start time:</b> {new Date(selectedSession.startTime * 1000).toLocaleString()}</p>
                                    <p><b>Session end time:</b> {new Date(selectedSession.endTime * 1000).toLocaleString()}</p>
                                    <p className="status">Session: <span className="stp-check">{selectedSession.status}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            {daoDetails.role === 'Owner' && (
                <>
                    <div className="main-content">
                        <div className="table-container">
                            <div className="heading-container">
                                <h2 className="table-heading">Members Details</h2>
                            </div>


                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Country</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profiles.length > 0 ? (
                                        profiles.map((profile, index) => (
                                            <tr key={index}>
                                                <td data-label="Name">{profile.userName}</td>
                                                <td data-label="Country">{profile.country}</td>
                                                <td data-label="Email">{profile.email}</td>
                                                <td data-label="Address">{profile.address}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="table-message">There is no data</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                   {/*  <div className="analytics-inner">
                        <div className="container">
                            <div className="row">
                                <div style={{ width: '100%', maxWidth: '600px', height: '500px' }}>
                                    <Chart
                                        chartType="PieChart"
                                        data={data}
                                        options={options}
                                        width="100%"
                                        height="400px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* ============================== popup Add Member ===========================================*/}
                    {isOpen && (
                        <div className="popup-overlay">
                            <div className="popup">
                                <span className="close" onClick={closePopup}>&times;</span>
                                <p>Add Member To Participate.</p>
                            </div>
                            <div className="popup-bottom">

                                <img className="popup-img" src="assets/images/add_member.png" alt="Add_member" />
                                <h3 className="title">Voter's Address</h3>
                                <input type="text" placeholder="Enter Voter's Address" className="voter-address-input" onChange={handleChangeMember} />
                                <button to="" className="add-member-btn" onClick={addMember} >Add Member now</button>

                            </div>
                        </div>
                    )}
                    {/*==============================================================================*/}

                    {/* ============================== popup Remove Member ===========================================*/}
                    {isOpenRmove && (
                        <div className="popup-overlay">
                            <div className="popup">
                                <span className="close" onClick={closeRemovePopup}>&times;</span>
                                <p>Remove Member From Participation.</p>
                            </div>
                            <div className="popup-bottom">

                                <img className="popup-img" src="assets/images/rem_member.png" alt="Remove_member" />
                                <h3 className="title">Voter's Address</h3>
                                <input type="text" placeholder="Enter Voter's Address" className="voter-address-input" onChange={handleChangeMember} />
                                <button to="" className="add-member-btn" onClick={removeMember} >Remove Member now</button>

                            </div>
                        </div>
                    )}
                </>
            )}
            {/*==============================================================================*/}

            {/* ============================== popup success ===========================================*/}
            {isOpensuccess && (<div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Session Results</h2>
                        <button className="close-button" onClick={closeSuccessPopup}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="winner-section">
                            <h3>Winner</h3>
                            <p className="address">0xa5f64d</p>
                            <p className="votes">3 votes</p>
                        </div>
                        <div className="runner-up-section">
                            <h3>Runner-up</h3>
                            <p className="address">0xaef64d</p>
                            <p className="votes">4 votes</p>
                        </div>
                        <div className="session-info">
                            <p><b>Session start time:</b> 1 am</p>
                            <p><b>Session end time:</b> 3 am</p>
                            <p className="status">Session:<span className="stc-check"> Completed</span></p>
                        </div>
                    </div>
                </div>
            </div>
            )}
            {/*==============================================================================*/}

            {/* ============================== popup pending ===========================================*/}


            {isOpenAdded && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Session Results</h2>
                            <button className="close-button" onClick={closeaddedPopup}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="winner-section">
                                <h3>Select Candidates</h3>
                                <select onChange={handleCandidateSelect}>
                                    <option value="">Select a candidate</option>
                                    {candidates.map((candidate) => (
                                        <option key={candidate.address} value={candidate.address}>
                                            {candidate.address}
                                        </option>
                                    ))}
                                </select>
                                <div className="selected-candidates">
                                    <h4>Selected Candidates</h4>
                                    {selectedCandidates.map((address, index) => (
                                        <>
                                            <li key={index}>{address}</li>
                                            <button onClick={() => removeCandidate(address)}>
                                                Remove
                                            </button>
                                        </>

                                    ))}
                                </div>
                            </div>

                            <div className="session-info">
                                <h3>Session Timing</h3>
                                <label>
                                    Start Datetime:
                                    <input type="datetime-local" step="1" value={startDateTime} onChange={handleStartDateTimeChange} />
                                </label>
                                <label>
                                    End Datetime:
                                    <input type="datetime-local" step="1" value={endDateTime} onChange={handleEndDateTimeChange} />
                                </label>
                            </div>

                            <div className="session-info">
                                <h3>Voting Details</h3>
                                <label>
                                    Voting Title:
                                    <input type="text" value={votingTitle} onChange={handleVotingTitleChange} />
                                </label>
                                <label>
                                    Voting Purpose:
                                    <input type="text" value={votingPurpose} onChange={handleVotingPurposeChange} />
                                </label>
                            </div>

                            <div className="submit-section">
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/*==============================================================================*/}

            <div className="main-body">
                <aside className="sidebar">
                    <div className="sidebar-header">
                        <Link className="navbar-brand" to="/"><img className="logo" src="assets/images/logo.png" /></Link>
                        {/* <h2>DVOTE</h2> */}
                    </div>
                    <ul className="sidebar-links">
                        <h4>
                            <span>{daoDetails.DaoName}</span>
                            <div className="menu-separator"></div>
                        </h4>
                        {daoDetails.role === 'Owner' && (
                            <>
                                <li>
                                    <Link to="#">
                                        <span class="material-symbols-outlined"> group</span>
                                        Member Details
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={togglePopup}>
                                        <span className="material-symbols-outlined"> group_add </span>
                                        Add Member
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={toggleRemovePopup}>
                                        <span class="material-symbols-outlined">group_remove</span>
                                        Remove Member
                                    </Link>
                                </li>
                            </>
                        )}
                        <h4>
                            <span><div className="menu-separator"></div></span>
                            <div className="menu-separator"></div>
                        </h4>
                        <li>
                            <Link to="#">
                                <span className="material-symbols-outlined"> account_circle </span>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span className="material-symbols-outlined"> settings </span>
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span className="material-symbols-outlined"> logout </span>
                                Logout
                            </Link>
                        </li>
                    </ul>
                    {/* <div className="user-account">
                        <div className="user-profile">
                            <img src="images/profile-img.jpg" alt="Profile Image" />
                            <div className="user-detail">
                                <h3>name of organi....</h3>
                                <span>details....</span>
                            </div>
                        </div>
                    </div> */}
                </aside>
            </div>
            <ToastContainer />

        </>
    );
}

export default DashboardInner;