import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from "react-router-dom"
import 'swiper/swiper-bundle.css';

const AssetCatOne = () => {

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
                    <h2 className="block-title__title">Descubre algunas <br />
                        categorias</h2>
                </div>
                <div className="course-category-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="course-category-one__icon">
                                    <i className="fas fa-utensils"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Alimentos</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                <i class="fas fa-mountain"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Naturaleza</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                <i class="fas fa-glass-cheers"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Diversión</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="course-category-one__icon">
                                <i class="fas fa-hiking"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Aire libre</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-5">
                                <div className="course-category-one__icon">
                                <i class="fas fa-grin-hearts"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Parejas</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-6">
                                <div className="course-category-one__icon">
                                <i class="fas fa-book-reader"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Educación</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="course-category-one__icon">
                                <i class="fas fa-palette"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Arte y musica</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                <i class="fas fa-shopping-basket"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Compras</Link></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                <i class="fas fa-landmark"></i>
                                </div>
                                <h3 className="course-category-one__title"><Link to="#">Corporativas</Link></h3>
                            </div>
                        </div>
                    </Swiper>
                </div>

                <Link to="#" className="thm-btn">Descubre nuestro contenido</Link>
            </div>
        </section>
    );
}
export default AssetCatOne;