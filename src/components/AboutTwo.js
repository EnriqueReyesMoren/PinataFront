import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class AboutTwo extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Bienvenido a una libreria<br />
                                       parecida a ti </h2>
                                </div>
                                <p className="about-two__text">Piñata resuelve la necesidad de crear contenido con
                                 sabores latinos e interconectar creativos que
                                 cuentan con equipo y experiencia con negocios que
                                 necesitan crear publicidad personalizada.</p>
                                <div className="about-two__single-wrap">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-camera"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Obten contenido de profesionakes</p>
                                        </div>
                                    </div>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-store-alt"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Mejora tu publicidad como negocio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
                            <div /* className="about-two__image" */>
                                <span className="about-two__image-dots"></span>
                                <img src="/assets/images/about-1-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}