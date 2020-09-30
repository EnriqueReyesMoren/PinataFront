import React, {useState,useContext,useEffect} from 'react';
import Swiper from 'react-id-swiper';
import { Link } from "react-router-dom"
import 'swiper/swiper-bundle.css';
import { getAssets } from "../services/assets"
import { MyContext } from "../context"



const ContenidoOne = () => {

  const [assets, setAssets] = useState(null)
  const { user } = useContext(MyContext)

  useEffect(() => {
    async function fetchAssets() {
      const {
        data: { assets }
      } = await getAssets()
      setAssets(assets.slice(0, 7))
    }

    fetchAssets()
    
  }, [])

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
        <section className="course-one__top-title home-one">
            <div className="container">
                <div className="block-title mb-0">
                    <h2 className="block-title__title">Explora nuestro <br />
                        contenido popular</h2>
                </div>
            </div>
            <div className="course-one__top-title__curve"></div>
        </section>

        <section className="course-one course-one__teacher-details home-one">
            <div className="container">
                <div className="course-one__carousel">

       

                   <Swiper {...params} >
                        
                   {assets?.map(assets => (
                    
                    <div className="item">
                        <div className="course-one__single color-1">
                            <div className="course-one__image">
                                <img src={assets.photo} alt="" style={{width:"370px", height:"243px", objectFit:"cover"}} />
                            </div>
                            <div className="course-one__content">
                                <Link to="#" className="course-one__category">{assets.category}</Link>
                                
                                <h2 className="course-one__title"><Link to="/course-details">{assets.name}</Link></h2>
                                <div className="course-one__stars">
                            <span className="course-one__stars-wrap">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                                </div>
                                <div className="course-one__meta">
                                <p>{assets.description}</p>
                                    <Link to="/course-details">${assets.price}</Link>
                                </div>
                                <Link to={`/assets/${assets._id}`} className="course-one__link">Ver detalles</Link>
                            </div>
                        </div>
                    </div>
                    ))} 
                    </Swiper>
                    
                  
                    
                    </div>
                </div>
            </section>
        </div>
    );
    
}

export default ContenidoOne;