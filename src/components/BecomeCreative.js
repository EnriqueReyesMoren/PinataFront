import React from 'react';
import { Link } from "react-router-dom"

const BecomeCreative = () => {
   

    return (
        <section className="become-teacher">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="become-teacher__content">
                            <h2 className="become-teacher__title">Beneficios por publicar</h2>
                            <p className="become-teacher__text">Gana dinero por cada publicación descargada y ademas practica
                            tus habilidades mientras produces contenido para clientes reales.</p>
                            <h2 className="become-teacher__subtitle">Aplica a retos de negocios</h2>
                            <p className="become-teacher__text">Encuentra promociones lanzadas por negocios reale, participa en la 
                            contienda colocando tu portafolio y gana contratos reales.</p>
                
                        </div>
                    
                        </div>
                    
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Publica y gana dinero
                                </h2>
                            </div>
                            <form action="#"
                                  className="become-teacher__form-content contact-form-validated"
                                  noValidate="novalidate">
                                <input type="text" placeholder="Your Name" name="name" />
                                <input type="text" placeholder="Email Address" name="email" />
                                <input type="text" placeholder="Phone Number" name="phone" />
                                <input type="text" placeholder="Comment" name="message" />
                                <button type="submit" className="thm-btn become-teacher__form-btn">Iniciar
                                </button>
                            </form>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeCreative;