import React from 'react';

const CallToActionFour = () => {
    return (
        <section className="cta-four">
            <img src="assets/images/circle-stripe-1.png" className="cta-four__stripe" alt="" />
            <img src="assets/images/line-stripe-1.png" className="cta-four__line" alt="" />
            <div className="container text-center">
                <div className="block-title">
                    <h2 className="block-title__title">Publica tu contenido  <br />
                        y comparte valor </h2>
                </div>
                <p className="cta-four__text">Nosotros te pagamos por cada recurso vendido sin ataduras 
                ni compromisos <br />.
                Comienza a ganar dinero explotando tus habilidades creativas
                </p>
            </div>
        </section>
    );
};

export default CallToActionFour;
