import React from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomePina from "../components/BecomePina";



const SignUp = () => {
    return (
        <Layout pageTitle="Registrate | Conviertete en miembro">
            <NavThreeTry />
            <PageHeader title="Registrate" />
            <BecomePina />
            <Footer />
        </Layout>
    );
};

export default SignUp;