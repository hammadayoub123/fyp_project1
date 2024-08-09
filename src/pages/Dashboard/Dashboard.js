import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import DashboardInner from '../../components/DashboardInner/DashboardInner';

function Dashboard() {
  return (
   <>
   <Header/>
   <DashboardInner/>
   <ScrollButton/>
   </>
  );
}

export default Dashboard;