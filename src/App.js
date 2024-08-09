import React from "react";
import Routes from './routes';
import { WalletProvider } from './context/walletContext';
import { DaoProvider } from './context/daoaddress';
import { OwnerProvider } from './context/ownerCheck';
/* import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import ServicesInner from "./components/ServicesInner/ServicesInner";
import BlogsInner from "./components/BlogsInner/BlogsInner";
import ContactInner from "./components/ContactInner/ContactInner";
import Features from "./components/Features/Features";
import Members from "./components/Members/Members";
import CardSection from "./components/CardSection/CardSection";
import { WalletProvider } from './context/walletContext';

function App() {
  return (
    <>
      <WalletProvider>
        <Header />
        <HomeBanner />
        <Features />
        <ServicesInner />
        <BlogsInner />
        <CardSection />
        <Members />
        <ContactInner />
        <Footer />
        <ScrollButton />
      </WalletProvider>
    </>
  );
} */


function App() {
  return (
    <WalletProvider>
      <DaoProvider>
        <OwnerProvider>
          {/* Rest of your app */}
          <Routes />
        </OwnerProvider>
      </DaoProvider>
    </WalletProvider>
  );
}

export default App;
