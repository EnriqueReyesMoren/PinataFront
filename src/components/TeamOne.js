import React from 'react';

import { Link } from "react-router-dom"

const TeamOne = () => {
    return (
        <section className="team-one team-one__become-teacher">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Meet the best <br />
                        teachers</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="assets/images/team-1-1.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link to="/teacher-details">Adelaide Hunter</Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">There are many varia of passages of lorem.</p>
                            </div>
                            <div className="team-one__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="assets/images/team-1-2.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link to="/teacher-details">Christina Newman</Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">There are many varia of passages of lorem.</p>
                            </div>
                            <div className="team-one__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="assets/images/team-1-3.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link to="/teacher-details">Gilbert Daniels</Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">There are many varia of passages of lorem.</p>
                            </div>
                            <div className="team-one__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="assets/images/team-1-4.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link to="/teacher-details">Austin Caldwell</Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">There are many varia of passages of lorem.</p>
                            </div>
                            <div className="team-one__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamOne;
