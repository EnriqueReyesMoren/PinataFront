import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact-info-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-manager"></i>
                                </div>
                                <h2 className="contact-info-one__title">About Us </h2>
                                <p className="contact-info-one__text">Lorem ipsum is simply free text <br /> available in
                                    the market to
                                    use <br />
                                        deliver satisfaction.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-placeholder"></i>
                                </div>
                                <h2 className="contact-info-one__title">Our
                                    Address</h2>
                                <p className="contact-info-one__text">855 Road Broklyn Street, <br />
                                    600 New York, United States of <br /> America</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-contact"></i>
                                </div>
                                <h2 className="contact-info-one__title">Contact
                                    Info</h2>
                                <p className="contact-info-one__text">needhelp@kipso.com <br />
                                    444 888 0000 <br /> &nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-one">
                <div className="container">
                    <h2 className="contact-one__title text-center">Get in touch <br />
                        with us</h2>
                    <form action="#" className="contact-one__form contact-form-validated"
                          noValidate="novalidate">
                        <div className="row low-gutters">
                            <div className="col-lg-6">
                                <input type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Write Message" name="message"></textarea>
                                <div className="text-center">
                                    <button type="submit" className="contact-one__btn thm-btn">Submit Comment</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="result text-center"></div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
