import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import PublicarPromo from "../components/PublicarPromo";

const AssetPublicar = () => {
    return (
        <Layout pageTitle="Piñata | Publica promociones">
            <NavThreeTry />
            <PageHeader title="Publica tu promo" />
            <PublicarPromo />
            <Footer />
        </Layout>
    );
};

export default AssetPublicar;
