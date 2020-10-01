import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import SliderTwo from "../components/SliderTwo";
import Footer from "../components/Footer";
import AssetCatTwo from "../components/AssetCatTwo";
import AboutOne from "../components/AboutOne";
import CourseTwo from "../components/CourseTwo";
import TeamOne from "../components/TeamOne";
import Pricing from "../components/Pricing";
import MeetingOne from "../components/MeetingOne";
import CallToActionTwo from "../components/CallToActionTwo";
import BlogThree from "../components/BlogThree";

const HomePageTwo = () => {
    return (
        <Layout pageTitle="Kipso | Home 2">
            <NavThreeTry />
            <SliderTwo />
            <AssetCatTwo />
            <AboutOne />
            <CourseTwo />
            <TeamOne />
            <Pricing />
            <MeetingOne />
            <CallToActionTwo />
            <BlogThree />
            <Footer />
        </Layout>
    );
};

export default HomePageTwo;
