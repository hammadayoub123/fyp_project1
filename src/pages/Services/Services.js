import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ServicesInner from '../../components/ServicesInner/ServicesInner';
import Footer from '../../components/Footer/Footer';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import '../../App.css';


function Services() {
    const backgroundImageUrl = 'url("assets/images/inner-banner.jpg")';

    return (
        <><Header />
            {/* ************************************** MAIN CONTENT ************************************** */}
            <section class="inner-banner" style={{ backgroundImage: backgroundImageUrl }}>
                <div class="container">
                    <div class="row">
                        <div class="content-box">
                            <h2>Our Services</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="javascript:;">/</a></li>
                                <li><Link to="/services">Services</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ****************************************************************************************** */}
        <ServicesInner/>
        <Footer />
        <ScrollButton /></>
    );
}

export default Services;