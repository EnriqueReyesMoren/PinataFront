import React from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import ContenidoOne from "../components/ContenidoOne";
import VideoTwo from "../components/VideoTwo";
import CountdownPina from "../components/CountdownPina";
import AssetCatOne from "../components/AssetCatOne";
import PromosTwo from "../components/PromosTwo";
import CallToActionFour from "../components/CallToActionFour";




const HomePage = () => (

    <Layout pageTitle="Pinata - Manten fresca tu marca con contenido parecido a">
      <NavThree />
      <SliderOne />
      <AboutTwo />
      <ContenidoOne />
      <VideoTwo />
      <CountdownPina />
      <AssetCatOne />
      <PromosTwo />
      <CallToActionFour />
      <Footer />
    </Layout>

)

export default HomePage;