import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeCreative from "../components/BecomeCreative";



const BecomeCreador = () => {
    return (
        <Layout pageTitle="Creadores | Gana dinero publicando">
            <NavThreeTry />
            <PageHeader title="Creadores" />
            <BecomeCreative />
            <Footer />
        </Layout>
    );
};

export default BecomeCreador;