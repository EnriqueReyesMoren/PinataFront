import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News2 from "../components/News2";

const PromoPage2 = () => {
    return (
        <Layout pageTitle="Promociones | Pinata Stock">
            <NavThreeTry />
            <PageHeader title="Tus Promociones" />
            <News2 />
            <Footer />
        </Layout>
    );
};

export default PromoPage2;
