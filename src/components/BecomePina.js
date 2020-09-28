import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/29914-flys-and-a-lemon';
import { Link } from "react-router-dom"

const BecomeBusiness = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <section className="become-teacher">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="become-teacher__content">
                        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
                        <Link to="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Registrate con <b>Google</b></Link>
                        <Link to="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Registrate con <b>Facebook</b></Link>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Registrate hoy
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

export default BecomeBusiness;
