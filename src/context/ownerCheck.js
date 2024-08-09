/* import React, { createContext, useContext, useState } from 'react';

const DaoContext = createContext();

export const DaoProvider = ({ children }) => {
    const [daoAddress, setdaoAddress] = useState([]);


    const setdao = (address) => {
        setdaoAddress(address);
    };

    console.log("Context value:", { daoAddress }); // Log the context value

    return (
        <DaoContext.Provider value={{ daoAddress, setdao }}>
            {children}
        </DaoContext.Provider>
    );

};

export const useDao = () => {
    const context = useContext(DaoContext);
    if (!context) {
        throw new Error('usedao must be used within a daoProvider');
    }
    return context;
}; */

import React, { createContext, useContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import  { contractAddress, contractABI } from '../constant/BuildDao'

const OwnerContext = createContext();

export const OwnerProvider = ({ children }) => {
    const [daoDetails, setDaoDetails] = useState({});
    const [address, setAddress] = useState('');
console.log("==",address) 
    const fetchDaoDetails = async (address) => {
        const newWeb3 = new Web3(window.ethereum);
        const newContract = new newWeb3.eth.Contract(contractABI, contractAddress);

        try {
            /*   const [names, daoAddresses, isOwnerArray] = await newContract.methods.getDAOsForAddress(address).call(); */
            const arr = await newContract.methods.getDAOsForAddress(address).call();
console.log("FDdfdfvfd", arr, "ccc", arr[2]);

            /*  const details = names.map((name, index) => ({
                 name,
                 daoAddress: daoAddresses[index],
                 role: isOwnerArray[index] ? 'Owner' : 'Member',
             })); */
            let role;

            if (!arr[2] || (Array.isArray(arr[2]) && arr[2].length === 0)) {
                role = 'Build your Dao';
            } else if (arr[2][0] === true ) {
                role = 'Owner';
            } else {
                role = 'Member';
            }
            let detail = {
                DaoName: arr[0],
                daoAddress: arr[1],
                role: role
            };
            console.log("ds", detail)
            setDaoDetails(detail)

        } catch (error) {
            console.error('Failed to fetch DAO details:', error);
        }
    };

    useEffect(() => {
        if (address) {

            fetchDaoDetails(address);
        }
    }, [address]);

    return (
        <OwnerContext.Provider value={{ daoDetails, setAddress }}>
            {children}
        </OwnerContext.Provider>
    );
};

export const useOwner = () => {
    const context = useContext(OwnerContext);
    if (!context) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
/* 0x03dbF7E8da721E69e13133dEf8214a7A0cf79079 */