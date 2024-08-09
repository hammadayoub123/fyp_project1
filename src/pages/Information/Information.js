import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import InfoInner from '../../components/InfoInner/InfoInner';
import '../../App.css';

function Information() {
    const backgroundImageUrl = 'url("assets/images/inner-banner.jpg")';
    const btnStyle = {
        color: 'white',
        cssText: 'color: white !important'
    };

    return (
        <> <Header />
            {/* ************************************** MAIN CONTENT ************************************** */}
            <section className="inner-banner" style={{ backgroundImage: backgroundImageUrl }}>
                <div className="container">
                    <div className="row">
                        <div className="content-box">
                            <h1>Explore the DAO World</h1>                   
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="javascript:;">/</a></li>
                                <li><Link to="/contact">Information</Link></li>
                            </ul>
                        </div>
                        <div className="para">
                        <p style={btnStyle}>Build your DAO, explore communities,and find <br/> inspiration for your project all in one place.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ****************************************************************************************** */}
            <InfoInner/>
            <Footer/>
            <ScrollButton/>
        </>
    );
}

export default Information;