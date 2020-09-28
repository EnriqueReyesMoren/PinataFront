import React from 'react';
import { Link } from "react-router-dom"

const Assets = () => {
    return (
        <section className="course-one course-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-1.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">development</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-1.jpg" alt="" />
                                    by <Link href="/teacher-details"><Link>Lou Guerrero</Link></Link>
                                </div>
                                <h2 className="course-one__title"><Link href="/course-details"><Link>New react bootcamp</Link></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <Link to="/course-details"><i className="far fa-clock"></i> 10 Hours</Link>
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-2.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">It &amp; Software</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-2.jpg" alt="" />
                                        by <Link href="/teacher-details"><Link>Cora Diaz</Link></Link>
                                </div>
                                <h2 className="course-one__title"><Link href="/course-details"><Link>Improve editing skills</Link></Link></h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <Link to="/course-details"><i className="far fa-clock"></i> 10 Hours</Link>
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-3.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">marketing</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-3.jpg" alt="" />
                                        by <Link href="/teacher-details"><Link>Ruth Becker</Link></Link>
                                </div>
                                <h2 className="course-one__title">
                                    <Link href="/course-details"><Link>Marketing strategies</Link></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <Link to="/course-details"><i className="far fa-clock"></i> 10 Hours</Link>
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-4.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">Photography</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-4.jpg" alt="" />
                                        by <Link href="/teacher-details"><Link>Ernest Rodriquez</Link></Link>

                                </div>
                                <h2 className="course-one__title">
                                    <Link href="/course-details"><Link>Basics of photography</Link></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <Link to="/course-details"><i className="far fa-clock"></i> 10 Hours</Link>
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-5.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">marketing</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-5.jpg" alt="" />
                                        by <Link href="/teacher-details"><Link>Isabella Stanley</Link></Link>
                                </div>
                                <h2 className="course-one__title">
                                   <Link href="/course-details"><Link>Affiliate bootcamp</Link></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <Link to="/course-details"><i className="far fa-clock"></i> 10 Hours</Link>
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-6.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">Health &amp; Fitness</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-6.jpg" alt="" />
                                        by <Link href="/teacher-details"><Link>Katherine Collins</Link></Link>
                                </div>
                                <h2 className="course-one__title">
                                    <Link href="/course-details"><Link>Healthy workout tips</Link></Link>
                                </h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                </div>
                                <div className="course-one__meta">
                                    <Link to="/course-details"><i className="far fa-clock"></i> 10 Hours</Link>
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6 Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-pagination">
                    <Link to="#"><i className="fa fa-angle-double-left"></i></Link>
                    <Link className="active" href="#">1</Link>
                    <Link to="#">2</Link>
                    <Link to="#">3</Link>
                    <Link to="#">4</Link>
                    <Link to="#"><i className="fa fa-angle-double-right"></i></Link>
                </div>

            </div>
        </section>
    );
};

export default Assets;
