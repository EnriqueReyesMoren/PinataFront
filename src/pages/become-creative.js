import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeCreative from "../components/BecomeCreative";



const BecomeCreador = () => {
    return (
        <Layout pageTitle="Creadores | Gana dinero publicando">
            <NavThree />
            <PageHeader title="Creadores" />
            <BecomeCreative />
            <Footer />
        </Layout>
    );
};

export default BecomeCreador;