import React from 'react';
import { Link } from "react-router-dom"
const CourseCatThree = () => {
    return (
        <section className="course-category-three">
            <img src="/assets/images/circle-stripe.png" className="course-category-three__circle" alt="" />
                <div className="container">
                    <div className="block-title">
                        <h2 className="block-title__title">Browse online <br />
                            course categories</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-1.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><Link to="#">IT & Software </Link></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-2.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><Link to="#">Development </Link></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-3.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><Link to="#">Photography</Link></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="course-category-three__single">
                                <img src="/assets/images/course-category-1-4.png" alt="" />
                                    <div className="course-category-three__content">
                                        <h3 className="course-category-three__title"><Link to="#">Marketing</Link></h3>
                                        <p className="course-category-three__text">Over 752 Courses</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="#" className="thm-btn course-category-three__more-link">View All Categories</Link>
                    </div>
                </div>
        </section>
    );
};

export default CourseCatThree;
