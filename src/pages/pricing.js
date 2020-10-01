import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import CallToActionOne from "../components/CallToActionOne";

const PricingPage = () => {
    return (
        <Layout pageTitle="Kipso | Pricing">
            <NavThreeTry />
            <PageHeader title="Pricing" />
            <Pricing />
            <CallToActionOne />
            <Footer />
        </Layout>
    );
};

export default PricingPage;
