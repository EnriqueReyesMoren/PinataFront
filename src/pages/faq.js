import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import PublicarAsset from "../components/PublicarAsset";

const AssetPublicar = () => {
    return (
        <Layout pageTitle="Kipso | FAQ">
            <NavThree />
            <PageHeader title="FAQ" />
            <PublicarAsset />
            <Footer />
        </Layout>
    );
};

export default AssetPublicar;
