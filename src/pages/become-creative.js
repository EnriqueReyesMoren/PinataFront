import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeTeacher from "../components/BecomeTeacher";
import TeamOne from "../components/TeamOne";


const GalleryPage = () => {
    return (
        <Layout pageTitle="Kipso | Become Teacher">
            <NavThree />
            <PageHeader title="Become Teacher" />
            <BecomeTeacher />
            <TeamOne />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
