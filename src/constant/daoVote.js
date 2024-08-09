/* 
export const contractAddressDao = "0x706006e10263b443058c9ABe200fB771d4d7A141"; // Use the actual contract address
export const contractABIDao = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "address[]",
                "name": "_candidates",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "createVotingSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            }
        ],
        "name": "endVotingSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoFactory",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_candidate",
                "type": "address"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "VoteCasted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "daoAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }
        ],
        "name": "VotingSessionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "VotingSessionEnded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "daoFactory",
        "outputs": [
            {
                "internalType": "contract DAOFactory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoAddress",
                "type": "address"
            }
        ],
        "name": "getAllVotingSessions",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "daoAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "candidates",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    }
                ],
                "internalType": "struct DAOVoting.VotingSessionInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            }
        ],
        "name": "getTimeLeft",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_candidate",
                "type": "address"
            }
        ],
        "name": "getVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            }
        ],
        "name": "getVotingSessionInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "daoAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "candidates",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    }
                ],
                "internalType": "struct DAOVoting.VotingSessionInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "votingSessions",
        "outputs": [
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "daoAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "active",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] */
/* 
export const contractAddressVote = "0x014EaC1073386A466C42f79A05c3CA1C2cf293df"; // Use the actual contract address
export const contractABIVote = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoFactory",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "VoteCasted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "daoAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }
        ],
        "name": "VotingSessionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "VotingSessionEnded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "autoEndSessions",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "address[]",
                "name": "_candidates",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_purpose",
                "type": "string"
            }
        ],
        "name": "createVotingSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "daoFactory",
        "outputs": [
            {
                "internalType": "contract DAOFactory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoAddress",
                "type": "address"
            }
        ],
        "name": "getAllVotingSessions",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "sessionId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "daoAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "candidates",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "candidateVotes",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "purpose",
                        "type": "string"
                    }
                ],
                "internalType": "struct DAOVoting.VotingSessionInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            }
        ],
        "name": "getTimeLeft",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_candidate",
                "type": "address"
            }
        ],
        "name": "getVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            }
        ],
        "name": "getVotingSessionInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "sessionId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "daoAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "candidates",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "candidateVotes",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "purpose",
                        "type": "string"
                    }
                ],
                "internalType": "struct DAOVoting.VotingSessionInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_candidate",
                "type": "address"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "votingSessions",
        "outputs": [
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "daoAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "active",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "purpose",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] */
/* 

export const contractAddressVote = "0x675686BbE54b4575719F888E6C192a59295936Ef"; // Use the actual contract address
export const contractABIVote = [
    {
        "inputs": [],
        "name": "autoEndSessions",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "address[]",
                "name": "_candidates",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_purpose",
                "type": "string"
            }
        ],
        "name": "createVotingSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoFactory",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_candidate",
                "type": "address"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "VoteCasted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "daoAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }
        ],
        "name": "VotingSessionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "VotingSessionEnded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "daoFactory",
        "outputs": [
            {
                "internalType": "contract DAOFactory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_daoAddress",
                "type": "address"
            }
        ],
        "name": "getAllVotingSessions",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "sessionId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "daoAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "candidates",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "candidateVotes",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "purpose",
                        "type": "string"
                    }
                ],
                "internalType": "struct DAOVoting.VotingSessionInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            }
        ],
        "name": "getTimeLeft",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_candidate",
                "type": "address"
            }
        ],
        "name": "getVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sessionId",
                "type": "uint256"
            }
        ],
        "name": "getVotingSessionInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "sessionId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "daoAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address[]",
                        "name": "candidates",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "candidateVotes",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "purpose",
                        "type": "string"
                    }
                ],
                "internalType": "struct DAOVoting.VotingSessionInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "votingSessions",
        "outputs": [
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "daoAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "active",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "purpose",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] */

    export const contractAddressVote = "0x7ae53482fc3e3ecD2831a5C0f82009f427973e6a"; // Use the actual contract address
    export const contractABIVote =   [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_daoFactory",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "sessionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "voter",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "candidate",
                    "type": "address"
                }
            ],
            "name": "VoteCasted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "sessionId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "daoAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                }
            ],
            "name": "VotingSessionCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "sessionId",
                    "type": "uint256"
                }
            ],
            "name": "VotingSessionEnded",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "autoEndSessions",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_daoAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_title",
                    "type": "string"
                },
                {
                    "internalType": "address[]",
                    "name": "_candidates",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_purpose",
                    "type": "string"
                }
            ],
            "name": "createVotingSession",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "daoFactory",
            "outputs": [
                {
                    "internalType": "contract DAOFactory",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_daoAddress",
                    "type": "address"
                }
            ],
            "name": "getAllVotingSessions",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "sessionId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "daoAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "candidates",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "candidateVotes",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "active",
                            "type": "bool"
                        },
                        {
                            "internalType": "address",
                            "name": "winner",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "status",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "purpose",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DAOVoting.VotingSessionInfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_sessionId",
                    "type": "uint256"
                }
            ],
            "name": "getTimeLeft",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_sessionId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_candidate",
                    "type": "address"
                }
            ],
            "name": "getVotes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_sessionId",
                    "type": "uint256"
                }
            ],
            "name": "getVotingSessionInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "sessionId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "daoAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "candidates",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "candidateVotes",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "active",
                            "type": "bool"
                        },
                        {
                            "internalType": "address",
                            "name": "winner",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "status",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "purpose",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DAOVoting.VotingSessionInfo",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_sessionId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_candidate",
                    "type": "address"
                }
            ],
            "name": "vote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "votingSessions",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "daoAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "active",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "winner",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "status",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "purpose",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]