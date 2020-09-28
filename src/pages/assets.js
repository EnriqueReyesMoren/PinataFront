import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Assets from "../components/Assets";

const AssetsPage = () => {
    return (
        <Layout pageTitle="Contenido | Descubre">
            <NavThree />
            <PageHeader title="Contenido" />
            <Assets />
            <Footer />
        </Layout>
    );
};

export default AssetsPage;
