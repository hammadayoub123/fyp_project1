import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import Blogs from './pages/Blogs/Blogs';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Information from './pages/Information/Information';
import Profile from './pages/Profile/Profile';
import Create from './pages/Create/Create';
import Creates1 from './pages/Create-s1/Creates1';
import Home from './pages/Home/home';
import Dashboard from './pages/Dashboard/Dashboard';


export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element=<Home />
        />
        <Route
          path="/blogs"
          element=<Blogs />
        />
        <Route
          path="/services"
          element=<Services />
        />
        <Route
          path="/contact"
          element=<Contact />
        />
        <Route
          path="/about"
          element=<About />
        />
        <Route
          path="/information"
          element=<Information />
        />
        <Route
          path="/create"
          element=<Create />
        />
        <Route
          path="/create-s1"
          element=<Creates1 />
        />
        <Route
          path="/profile"
          element=<Profile />
        />
        <Route
          path="/Dashboard"
          element=<Dashboard />
        />



      </Routes>
    </Router>
  );
}
