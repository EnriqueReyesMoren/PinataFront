import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";

const CoursesPage = () => {
    return (
        <Layout pageTitle="Kipso | Course Details">
            <NavThree />
            <PageHeader title="Courses Details" />
            <CourseDetails />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
