import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import CallToActionTwo from "../components/CallToActionTwo";

const BusinessPage = () => {
    return (
        <Layout pageTitle="Kipso | Teachers">
            <NavThreeTry />
            <PageHeader title="Teachers" />
            <Teachers />
            <CallToActionTwo />
            <Footer />
        </Layout>
    );
};

export default BusinessPage;
