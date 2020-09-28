import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeBusiness from "../components/BecomeBusiness";



const Login = () => {
    return (
        <Layout pageTitle="Login | Inicia sesión">
            <NavThree />
            <PageHeader title="Inicia sesión" />
            <BecomeBusiness />
            <Footer />
        </Layout>
    );
};

export default Login;