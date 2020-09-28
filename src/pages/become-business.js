import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeBusiness from "../components/BecomeBusiness";
import TeamOne from "../components/TeamOne";


const GalleryPage = () => {
    return (
        <Layout pageTitle="Kipso | Become Teacher">
            <NavThree />
            <PageHeader title="Become Teacher" />
            <BecomeBusiness />
            <TeamOne />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
