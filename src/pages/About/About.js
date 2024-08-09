import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Footer from '../../components/Footer/Footer';
import AboutInner from '../../components/AboutInner/AboutInner';
import '../../App.css';
import Members from '../../components/Members/Members';

function About() {
    const backgroundImageUrl = 'url("assets/images/inner-banner.jpg")';

    return (
        <><Header />
            {/* ************************************** INNER BANNER CONTENT ************************************** */}
            <section className="inner-banner" style={{ backgroundImage: backgroundImageUrl }}>
                <div className="container">
                    <div className="row">
                        <div className="content-box">
                            <h2>About Us</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="javascript:;">/</a></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ****************************************************************************************** */}
            <AboutInner />
            <Members/>
            <Footer />
            <ScrollButton /></>
    );
}

export default About;