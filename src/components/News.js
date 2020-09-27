import React from 'react';
import { Link } from "react-router-dom"

const News = () => {
    return (
        <section className="blog-one blog-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog-1-1.jpg" alt="" />
                                    <Link to="/news-details"className="blog-one__plus"><i
                                        className="kipso-icon-plus-symbol"></i>
                                    </Link>
                            </div>
                            <div className="blog-one__content text-center">
                                
                                <h2 className="blog-one__title">
                                    <Link to="/news-details">Summer high school journalism camp</Link>
                                </h2>
                                <p className="blog-one__text">Aelltes port lacus quis enim var sed efficitur turpis
                                    gilla sed sit
                                    amet finibus eros.</p>
                                <Link to="/news-details" className="blog-one__link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog-1-2.jpg" alt="" />
                                <Link to="/news-details" className="blog-one__plus"><i
                                    className="kipso-icon-plus-symbol"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="post-pagination">
                    <Link to="#"><i className="fa fa-angle-double-left"></i></Link>
                    <Link className="active" to="#">1</Link>
                    <Link to="#">2</Link>
                    <Link to="#">3</Link>
                    <Link to="#">4</Link>
                    <Link to="#"><i className="fa fa-angle-double-right"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default News;
