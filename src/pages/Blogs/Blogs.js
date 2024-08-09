import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import BlogsInner from '../../components/BlogsInner/BlogsInner';
import '../../App.css';

function Blogs() {
    const backgroundImageUrl = 'url("assets/images/inner-banner.jpg")';

  return (
    <>
    <Header/>
    {/* ************************************** INNER BANNER CONTENT ************************************** */}
          <section className="inner-banner" style={{ backgroundImage: backgroundImageUrl }}>
              <div className="container">
                  <div className="row">
                      <div className="content-box">
                          <h2>Blogs & NewsLetter</h2>
                          <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><a href="javascript:;">/</a></li>
                              <li><Link to="/blogs">Our Blogs</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
    {/* ****************************************************************************************** */}
    
    <BlogsInner/>
    <Footer/>
    <ScrollButton/>
    </>
  );
}

export default Blogs;