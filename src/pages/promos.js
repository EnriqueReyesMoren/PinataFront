import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const PromoPage = () => {
    return (
        <Layout pageTitle="Promociones | Pinata Stock">
            <NavThreeTry />
            <PageHeader title="Promociones" />
            <News />
            <Footer />
        </Layout>
    );
};

export default PromoPage;
