import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomePina from "../components/BecomePina";



const SignUp = () => {
    return (
        <Layout pageTitle="Registrate | Conviertete en miembro">
            <NavThree />
            <PageHeader title="Registrate" />
            <BecomePina />
            <Footer />
        </Layout>
    );
};

export default SignUp;