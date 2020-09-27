import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from "react-router-dom"
import 'swiper/swiper-bundle.css';

const CourseCatOne = () => {

    const params = {
        slidesPerView : 6,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 6
            },
            768:{
                slidesPerView : 4
            },
            640:{
                slidesPerView : 3

            },
            320:{
                slidesPerView : 2
            }
        }
    }

    return (
        <section className="thm-gray-bg course-category-one">
            <div className="container-fluid text-center">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Browse online <br />
                        course categories</h2>
                </div>
                <div className="course-category-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-desktop"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">IT & Software</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Development</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Music</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Photography</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-5">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-targeting"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Marketing</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-6">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-health"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Health & Fitness</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-desktop"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">IT & Software</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Development</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Music</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Photography</Link></h3>
                            </div>
                        </div>
                    </Swiper>
                </div>

                <Link to="#" className="thm-btn">View All Categories</Link>
            </div>
        </section>
    );
}
export default CourseCatOne;