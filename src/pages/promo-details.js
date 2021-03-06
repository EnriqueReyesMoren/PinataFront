import React, { useState, useEffect, useContext }  from 'react';
import Layout from "../components/Layout";
import NavThreeTry from "../components/NavThreeTry";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import AssetsNuevos from "../components/AssetsNuevos";


  import { getPromo } from "../services/promos"
  import { MyContext } from "../context"
  import { Link } from "react-router-dom"



function PromoDetails (
    { match: { params: { promoId } }}
)  {
    const [promo, setPromo] = useState(null)
    const { user } = useContext(MyContext)
    console.log(promoId)

    async function fetchPromo() {
        const detailPromo = await getPromo (promoId)
        setPromo(detailPromo.promos)
        console.log(detailPromo)

      }

  
    


    useEffect(() => {
        fetchPromo()
        
      }, [promoId])
    

    return (
        <Layout pageTitle="Promo | Detalles">
            <NavThreeTry />
            <PageHeader title="Participa" />
            {promo ? (
     <section className="course-details">
     <div className="container">
         <div className="row">
             <div className="col-lg-8">
                 <div className="course-details__content">
                     

                     <div className="course-details__top">
                         <div className="course-details__top-left">
                         <h2 className="course-details__title">{promo.name}</h2>
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
                        <a  className="course-one__category"  style={{color:"white"}}>{promo.status}</a>
                         </div>
                     </div>
                     <div className="course-one__image">
                         <img src={promo.photo} alt="" />
                             <i className="far fa-heart"></i>
                     </div>

                     <ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
                         <li>
                             <a className="active" role="tab" data-toggle="tab" href="#overview">Descripción</a>
                         </li>
                     </ul>
                     <div className="tab-content course-details__tab-content ">
                         <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                         <p className="course-details__tab-text">{promo.description}</p>
                             <br />
                                 </div>  
                     </div>
                 </div>
             </div>
             <div className="col-lg-4">
             <div className="course-details__price">
                            <p className="course-details__price-text">Añade este producto </p>
                            <p className="course-details__price-amount">${promo.price}.00</p>
                            <Link to="" className="thm-btn course-details__price-btn">Lo quiero!</Link>
                        </div>
                 
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

export default PromoDetails;
  