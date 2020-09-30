import React, { useState, useEffect, useContext }  from 'react';
import Layout from "../components/Layout";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import AssetsNuevos from "../components/AssetsNuevos";

import {
    Image,
    Row,
    Col,
    Typography
  } from "antd"
  import { getAsset } from "../services/assets"
  import { MyContext } from "../context"
  import { Link } from "react-router-dom"
import { AssetDetails } from '.';
  const { Title, Text } = Typography


const CoursesPage =(prop) => {
    const [asset, setAsset] = useState(null)
    const { user } = useContext(MyContext)

    const assetsId= prop.match.params.assetId
   

    useEffect(() => {
        async function fetchAsset() {
          const {
            data: { assets }
          } = await getAsset(prop.match.params.assetId)
          setAsset(assets)
        }
        fetchAsset()
        
      }, [assetsId])
    

    return (
        <Layout pageTitle="Contenido | Detalles">
            <NavThree />
            <PageHeader title="Obten esta imagen" />
            {asset ? (
     <section className="course-details">
     <div className="container">
         <div className="row">
             <div className="col-lg-8">
                 <div className="course-details__content">
                     

                     <div className="course-details__top">
                         <div className="course-details__top-left">
                         <h2 className="course-details__title">{asset.name}</h2>
                             <div className="course-one__stars">
                                 <span className="course-one__stars-wrap">
                                     <i className="fa fa-star"></i>
                                     <i className="fa fa-star"></i>
                                     <i className="fa fa-star"></i>
                                     <i className="fa fa-star"></i>
                                     <i className="fa fa-star"></i>
                                 </span>
                             </div>
                         </div>
                         <div className="course-details__top-right">
                        <a  className="course-one__category"  style={{color:"white"}}>{asset.category}</a>
                         </div>
                     </div>
                     <div className="course-one__image">
                         <img src={asset.photo} alt="" />
                             <i className="far fa-heart"></i>
                     </div>

                     <ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
                         <li>
                             <a className="active" role="tab" data-toggle="tab" href="#overview">Descripción</a>
                         </li>
                     </ul>
                     <div className="tab-content course-details__tab-content ">
                         <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                         <p className="course-details__tab-text">{asset.description}</p>
                             <br />
                                 </div>  
                     </div>
                 </div>
             </div>
             <div className="col-lg-4">
             <div className="course-details__price">
                            <p className="course-details__price-text">Añade este producto </p>
                            <p className="course-details__price-amount">${asset.price}.00</p>
                            <Link to="" className="thm-btn course-details__price-btn">Lo quiero!</Link>
                        </div>
                 < AssetsNuevos />
             </div>
         </div>
     </div>
 </section>
  ) : (
    <div style={{ backgroundColor: "white", padding: "1rem" }}>
      <p> No hay nada cargado</p>
    </div>
  )}
        
  

            <Footer />
        </Layout>
    );
};

export default CoursesPage;
  