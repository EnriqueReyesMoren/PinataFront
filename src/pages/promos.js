import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = () => {
    return (
        <Layout pageTitle="Kipso | News">
            <NavThree />
            <PageHeader title="News" />
            <News />
            <Footer />
        </Layout>
    );
};

export default NewsPage;
