import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
/* import 'swiper/swiper-bundle.css'; */
import { Link } from "react-router-dom"

const BlogTwo = () => {

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
                slidesPerView : 1

            },
            320:{
                slidesPerView : 1
            }
        }
    }

    return (
        <section className="blog-two">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Our latest news <br />
                        & articles</h2>
                </div>
                <div className="blog-two__carousel">
                    <Swiper {...params}>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-1.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Summer high school journalism camp</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-2.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Get a tips to develop a quality education</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-3.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Learn variety of programs and courses</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-1.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Summer high school journalism camp</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-2.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Get a tips to develop a quality education</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-3.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Learn variety of programs and courses</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-1.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Summer high school journalism camp</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-2.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Get a tips to develop a quality education</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single" style={{backgroundImage: `url(assets/images/blog-2-3.jpg)`}}>
                            <div className="blog-two__inner">
                                <Link to="news-details.html" className="blog-two__date">
                                    <span>25</span>
                                    Jul
                                </Link>
                                <div className="blog-two__meta">
                                   <Link to="/">by Admin</Link>
                                   <Link to="/">3 Comments</Link>
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to="news-details.html">Learn variety of programs and courses</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default BlogTwo;
