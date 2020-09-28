import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomePina from "../components/BecomePina";



const Login = () => {
    return (
        <Layout pageTitle="Registrate | Conviertete en miembro">
            <NavThree />
            <PageHeader title="Registrato" />
            <BecomePina />
            <Footer />
        </Layout>
    );
};

export default Login;