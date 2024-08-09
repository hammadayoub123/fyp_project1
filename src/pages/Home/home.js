import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import ServicesInner from "../../components/ServicesInner/ServicesInner";
import BlogsInner from "../../components/BlogsInner/BlogsInner";
import ContactInner from "../../components/ContactInner/ContactInner";
import Features from "../../components/Features/Features";
import Members from "../../components/Members/Members";
import CardSection from "../../components/CardSection/CardSection";
export default function home() {
    return (
        <>
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
        </>
    )
}
