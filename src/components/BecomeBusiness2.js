import React from 'react';

import { Link } from "react-router-dom"

const BecomeBusiness2 = () => {
   
    return (
        <section className="become-teacher">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="become-teacher__content">
                            <h2 className="become-teacher__title">Lanza promociones a cambio de contenido </h2>
                            <p className="become-teacher__text">Conecta con gente creativa y lanza propuestas de colaboración a cambio 
                            de dinero, reconocimiento o articulos de tu negocio.</p>
                            <h2 className="become-teacher__subtitle">Aplica a generar contenido totalmente personalizado</h2>
                            <p className="become-teacher__text">Puedes ofertar trabajos de publcidad y contenido a cambio de contratos monetarios,
                            consumo temporal en tu negocio o reconocimiento en tus redes con nuestros creativos.</p>
                
                        </div>
                    
                        </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Conviertete en Negocio 
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

export default BecomeBusiness2;
