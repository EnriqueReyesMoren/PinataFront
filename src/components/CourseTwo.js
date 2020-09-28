import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import { Link } from "react-router-dom"

const CourseTwo = () => {

    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2

            },
            320:{
                slidesPerView : 1
            }
        }
    }
    return (
        <div>
            <section className="course-one__top-title home-two">
                <div className="container">
                    <div className="block-title">
                        <h2 className="block-title__title">Explore our <br />
                            popular courses</h2>
                    </div>
                </div>
            </section>

        <section className="course-one course-one__teacher-details home-two">
            <img src="/assets/images/line-stripe.png" className="course-one__line" alt="" />
            <div className="container">
                <div className="course-one__carousel">
                    <Swiper {...params} >
                    <div className="item">
                        <div className="course-one__single color-1">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-1.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">development</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-1.jpg" alt="" />
                                        by <Link to="/teacher-details">Lou Guerrero</Link>
                                </div>
                                <h2 className="course-one__title"><Link to="/course-details">New react
                                    bootcamp</Link></h2>
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
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                        Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="course-one__single color-2">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-2.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">It & Software</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-2.jpg" alt="" />
                                        by <Link to="/teacher-details">Cora Diaz</Link>
                                </div>
                                <h2 className="course-one__title"><Link to="/course-details">Improve editing
                                    skills</Link></h2>
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
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                        Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="course-one__single color-3">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-3.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">marketing</Link>
                                <div className="course-one__admin">
                                    <img src="/assets/images/team-1-3.jpg" alt="" />
                                        by <Link to="/teacher-details">Ruth Becker</Link>
                                </div>
                                <h2 className="course-one__title"><Link to="/course-details">Marketing
                                    strategies</Link></h2>
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
                                    <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                        Lectures</Link>
                                    <Link to="/course-details">$18</Link>
                                </div>
                                <Link to="#" className="course-one__link">See Preview</Link>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-4">
                                <div className="course-one__image">
                                    <img src="/assets/images/course-1-4.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="#" className="course-one__category">Photography</Link>
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-4.jpg" alt="" />
                                            by <Link to="/teacher-details">Ernest Rodriquez</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link to="/course-details">Basics of
                                        photography</Link></h2>
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
                                        <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</Link>
                                        <Link to="/course-details">$18</Link>
                                    </div>
                                    <Link to="#" className="course-one__link">See Preview</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-5">
                                <div className="course-one__image">
                                    <img src="/assets/images/course-1-5.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="#" className="course-one__category">marketing</Link>
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-5.jpg" alt="" />
                                            by <Link to="/teacher-details">Isabella Stanley</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link to="/course-details">Affiliate
                                        bootcamp</Link>
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
                                        <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</Link>
                                        <Link to="/course-details">$18</Link>
                                    </div>
                                    <Link to="#" className="course-one__link">See Preview</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-6">
                                <div className="course-one__image">
                                    <img src="/assets/images/course-1-6.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="#" className="course-one__category">Health & Fitness</Link>
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-6.jpg" alt="" />
                                            by <Link to="/teacher-details">Katherine Collins</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link to="/course-details">Healthy workout
                                        tips </Link></h2>
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
                                        <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</Link>
                                        <Link to="/course-details">$18</Link>
                                    </div>
                                    <Link to="#" className="course-one__link">See Preview</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-1">
                                <div className="course-one__image">
                                    <img src="/assets/images/course-1-1.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="#" className="course-one__category">development</Link>
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-1.jpg" alt="" />
                                            by <Link to="/teacher-details">Lou Guerrero</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link to="/course-details">New react
                                        bootcamp</Link></h2>
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
                                        <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</Link>
                                        <Link to="/course-details">$18</Link>
                                    </div>
                                    <Link to="#" className="course-one__link">See Preview</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-2">
                                <div className="course-one__image">
                                    <img src="/assets/images/course-1-2.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="#" className="course-one__category">It & Software</Link>
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-2.jpg" alt="" />
                                            by <Link to="/teacher-details">Cora Diaz</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link to="/course-details">Improve editing
                                        skills</Link></h2>
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
                                        <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</Link>
                                        <Link to="/course-details">$18</Link>
                                    </div>
                                    <Link to="#" className="course-one__link">See Preview</Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-3">
                                <div className="course-one__image">
                                    <img src="/assets/images/course-1-3.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="#" className="course-one__category">marketing</Link>
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-3.jpg" alt="" />
                                            by <Link to="/teacher-details">Ruth Becker</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link to="/course-details">Marketing
                                        strategies</Link></h2>
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
                                        <Link to="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</Link>
                                        <Link to="/course-details">$18</Link>
                                    </div>
                                    <Link to="#" className="course-one__link">See Preview</Link>
                                </div>
                            </div>
                        </div>
                    </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CourseTwo;