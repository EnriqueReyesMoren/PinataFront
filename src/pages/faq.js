import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import PublicarAsset from "../components/PublicarAsset";

const AssetPublicar = () => {
    return (
        <Layout pageTitle="Kipso | FAQ">
            <NavThreeTry />
            <PageHeader title="Publica tu archivo" />
            <PublicarAsset />
            <Footer />
        </Layout>
    );
};

export default AssetPublicar;
