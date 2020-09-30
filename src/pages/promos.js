import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const PromoPage = () => {
    return (
        <Layout pageTitle="Promociones | Pinata Stock">
            <NavThree />
            <PageHeader title="Promociones" />
            <News />
            <Footer />
        </Layout>
    );
};

export default PromoPage;
