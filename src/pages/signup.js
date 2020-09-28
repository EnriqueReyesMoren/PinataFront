import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const SignUpPage = () => {
    return (
        <Layout pageTitle="Kipso | Contact">
            <NavThree />
            <PageHeader title="Contact" />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default SignUpPage;
