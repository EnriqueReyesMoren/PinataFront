import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const CoursesPage = () => {
    return (
        <Layout pageTitle="Kipso | Courses">
            <NavThree />
            <PageHeader title="Courses" />
            <Courses />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
