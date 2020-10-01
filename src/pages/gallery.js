import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
    return (
        <Layout pageTitle="Kipso | Gallery">
            <NavThreeTry />
            <PageHeader title="Gallery" />
            <Gallery />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
