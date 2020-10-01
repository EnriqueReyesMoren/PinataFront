import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Assets from "../components/Assets";

const Colections = () => {
    return (
        <Layout pageTitle="Colecciones | Verifica tu contenido">
            <NavThreeTry />
            <PageHeader title="Colecciones" />
            <Assets />
            <Footer />
        </Layout>
    );
};

export default Colections;
