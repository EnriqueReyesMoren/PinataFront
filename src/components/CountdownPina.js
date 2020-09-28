import React, {Component} from 'react';
import Countdown from 'react-countdown';

const CountdownPina = () => {

    return (
        <section className="countdown-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="countdown-one__content">
                            <h2 className="countdown-one__title">Empieza a colaborar</h2>
                            <p className="countdown-one__tag-line">Consigue trabajar con proyectos reales!</p>
                            <p className="countdown-one__text">Queremos que puedas crear propuestas de trabajo a cambio
                            de retribución monetaria, profesional o sustancial y conectes con creativos en busqueda 
                            de oportunidades.</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Registrate para empezar
                                </h2>
                            </div>
                            <form action="#" method="POST" className="become-teacher__form-content contact-form-validated">
                                <input type="text" placeholder="Email Address" name="email" />
                                <input type="text" placeholder="Password" name="password" />
                                <button type="submit"
                                        className="thm-btn become-teacher__form-btn">Registrate
                                </button>
                            </form>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CountdownPina;