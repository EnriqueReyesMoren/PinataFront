import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import CallToActionTwo from "../components/CallToActionTwo";

const CreativePage = () => {
    return (
        <Layout pageTitle="Pinata | Creativos">
            <NavThreeTry />
            <PageHeader title="Creativos" />
            <Teachers />
            <CallToActionTwo />
            <Footer />
        </Layout>
    );
};

export default CreativePage;
