import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeBusiness2 from "../components/BecomeBusiness2";



const BecomeNegocio = () => {
    return (
        <Layout pageTitle="Negocios | Publica retos y conecta con creativos">
            <NavThree />
            <PageHeader title="Negocios" />
            <BecomeBusiness2 />
            <Footer />
        </Layout>
    );
};

export default BecomeNegocio;
