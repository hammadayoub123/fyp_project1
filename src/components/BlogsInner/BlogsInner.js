import React from 'react';
import './BlogsInner.css';

function BlogsInner() {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-title">
                    <h2>BLOGS & NEWSLETTER</h2>
                </div>
                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <h2>BLOCKCHAIN TECHNOLOGY</h2>
                            <h5>Why Build Organizations On BlockChain? </h5>
                            <img className="blog-banner" src="assets/images/blockchain-banner.jpg" alt="blockchain-banner" />
                            <p className="param">Building an organization on blockchain offers a transparent and secure framework for operations. By utilizing blockchain technology, the organization can ensure an immutable and decentralized ledger, reducing the risk of fraud and enhancing trust among stakeholders. This technology enables seamless and efficient transactions, cutting down on intermediaries and associated costs. Moreover, the decentralized nature of blockchain fosters a more inclusive and democratic decision-making process, empowering participants and promoting a collaborative approach. Overall, embracing blockchain in organizational structure enhances transparency, security, and efficiency, ultimately contributing to a more robust and trustworthy ecosystem.</p>
                        </div>

                        <div className="card">
                            <h2>DECENTRALIZED AUTONOMOUS ORAGANIZATION (DAO) </h2>
                            <h5>What is a DAO?</h5>
                            <img className="blog-banner" src="assets/images/dao-banner.png" alt="dao-banner" />
                            <p className="param">Decentralized autonomous organizations (DAOs) are a sort of bottom-up entity structure that lack centralized control. Members of a DAO own tokens belonging to the DAO and have the ability to cast votes on the entity’s initiatives.A DAO is a blockchain-enabled community, meaning its actions are powered by the blockchain. In the end, a DAO is solely managed by its individual members, who collaborate to make decisions about crucial project matters like technological advancements and treasury allocations.In general, community members draft recommendations for the protocol’s future operations before gathering to vote on each one. The rules implemented within the smart contract then select and impose proposals that reach a certain level of consensus.</p>
                        </div>

                        <div className="card">
                            <h2>SMART CONTRACTS IN DAO</h2>
                            <h5>How do DAOs use smart contracts?</h5>
                            <img className="blog-banner" src="assets/images/smart-banner.jpg" alt="smart-banner" />
                            <p className="param">DAOs are governed by Smart Contracts. The fundamental pillars of a DAO are its smart contracts. Smart contracts define the DAOs regulations as well as the groups use of its treasury. The smart contracts that regulate a DAO are programmed with its rules and logic. If a user attempts to perform an action that is not covered by the rules and logic in the code, the action will fail.</p>
                        </div>

                        <div className="card">
                            <h2>ETHEREUM BLOCKCHAIN </h2>
                            <h5>What is Ethereum Blockchain IN DAO?</h5>
                            <img className="blog-banner" src="assets/images/eth-banner.png" alt="eth-banner" />
                            <p className="param">Ethereum is an open-source, decentralized, L1(subcaste 1) computing network that permits the development of decentralized activities (dApps). These activities have Higher security.Further trustability in deals. This is due to the fact that, as compared to other chains, it experiences fewer unexpected crimes.Slower, gentler, and more precious deals than other chains. This is primarily due to a large number of deals available due to its popularity.But at times developing these kinds of task is pretty challenging as these technologies are complex and fairly new. So it can be easier to get the tasdone from experts, one can hire dedicated developers who are known for solving complicated problem with ease and are very economical.</p>
                        </div>
                    </div>

                    <div className="rightcolumn">
                        <div className="card">
                            <h2>About <span style={{ color: '#40A2D8' }}>DVote</span></h2>
                            <img className="columnimg" src="assets/images/about-column.png" alt="about-column" />
                            <p className="param">Welcome to DVote - Your trusted space for transparent voting and surveys. Our user-friendly app prioritizes privacy and complies with regulations. Seamless onboarding awaits you, and our vibrant community is ready for your active engagement!</p>
                        </div>

                        <div className="card">
                            <h3>Popular Post</h3>
                            <div>
                                <h5>How do DAOs use smart contracts?</h5>
                                <div className="postimg-container">
                                    <img className="postimg" src="assets/images/smart-banner.jpg" alt="smart-banner" />
                                    <a href="#" className="read-more-btn">Read More</a>
                                </div>
                                <p className="param2">DAOs are governed by Smart Contracts. The fundamental pillars of a DAO are its smart contracts...</p>
                                <hr />
                            </div>

                            <div>
                                <h5>What is Ethereum Blockchain IN DAO?</h5>
                                <div className="postimg-container">
                                    <img className="postimg" src="assets/images/eth-banner.png" alt="eth-banner" />
                                    <a href="#" className="read-more-btn">Read More</a>
                                </div>
                                <p className="param2">Ethereum is an open-source, decentralized, L1(subcaste 1) computing network that permits...</p>
                                <hr />
                            </div>


                            <div>
                                <h5>What are Smart contracts?</h5>
                                <div className="postimg-container">
                                    <img className="postimg" src="assets/images/smartcontract-banner.png" alt="smartcontract-banner" />
                                    <a href="#" className="read-more-btn">Read More</a>
                                </div>
                                <p className="param2">A fully operational Decentralized Autonomous Organization (DAO) includes a set of rules....</p>
                                <hr />
                            </div>

                            <div>
                                <h5>What is a DAO?</h5>
                                <div className="postimg-container">
                                    <img className="postimg" src="assets/images/dao-banner.png" alt="dao-banner" />
                                    <a href="#" className="read-more-btn">Read More</a>
                                </div>
                                <p className="param2">Decentralized autonomous organizations (DAOs) are a sort of bottom-up entity structure...</p>
                                <hr />
                            </div>


                            <div>
                                <h5>Why Build Organizations On BlockChain? </h5>
                                <div className="postimg-container">
                                    <img className="postimg" src="assets/images/blockchain-banner.jpg" alt="blockchain-banner" />
                                    <a href="#" className="read-more-btn">Read More</a>
                                </div>
                                <p className="param2">Building an organization on blockchain offers a transparent and secure framework for operations...</p>
                                <hr />
                            </div>


                            <div>
                                <h5>How do DAOs Operate?</h5>
                                <div className="postimg-container">
                                    <img className="postimg" src="assets/images/daooperate-banner.png" alt="daooperate-banner" />
                                    <a href="#" className="read-more-btn">Read More</a>
                                </div>
                                <p className="param2">A fully operational Decentralized Autonomous Organization (DAO) includes a set of rules...</p>
                            </div>

                        </div>

                        <div className="card">
                            <h3>Stay Connected</h3>
                            <p className="param2">Stay connected with our DAO community by following us on our official social media channels. Receive real-time updates, engage in discussions, and participate in important polls that shape the direction of our decentralized organization. Your involvement is key to the success of our community-driven initiatives. Join us on social media platforms to be part of the conversation and contribute to the future of our DAO.</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </section>
    );
}

export default BlogsInner;