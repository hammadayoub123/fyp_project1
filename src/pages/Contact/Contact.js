import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import ContactInner from '../../components/ContactInner/ContactInner';
import '../../App.css';

function Contact() {
  const backgroundImageUrl = 'url("assets/images/inner-banner.jpg")';

  return (
    <><Header />
      {/* ************************************** MAIN CONTENT ************************************** */}
      <section className="inner-banner" style={{ backgroundImage: backgroundImageUrl }}>
        <div className="container">
          <div className="row">
            <div className="content-box">
              <h2>Contact Us</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="javascript:;">/</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ****************************************************************************************** */}
      <ContactInner/>
      <Footer />
      <ScrollButton /></>
  );
}

export default Contact;