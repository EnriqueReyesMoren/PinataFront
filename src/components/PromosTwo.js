import React, {useState,useContext,useEffect}  from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
/* import 'swiper/swiper-bundle.css'; */
import { Link } from "react-router-dom"
import {getPromos} from "../services/promos"
import { MyContext } from "../context"

const PromosTwo = () => {

    const [promos, setPromos] = useState(null)
    const { user } = useContext(MyContext)
  
    useEffect(() => {
      async function fetchPromos() {
        const {
          data: { promos }
        } = await getPromos()
        setPromos(promos.slice(0,5))
      }
  
      fetchPromos()
      
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
                    <h2 className="block-title__title">Estos negocios necesitan <br />
                        buen contenido</h2>
                </div>
                <div className="blog-two__carousel">
                    <Swiper {...params}>
                    {promos?.map(promociones => (
                    <div className="item" style={{width:"370px", height:"243px", objectFit:"cover"}}>
                        <div className="blog-two__single" style={{backgroundImage: `url(${[promociones.photo]})`}}>
                            <div className="blog-two__inner">
                                <div className="blog-two__meta">
                               

                                <Link to={`/promos/${promociones._id}`}>Por ${promociones.price}</Link>
                                   

                                   
                                </div>
                                <h3 className="blog-two__title">
                                    <Link to={`/promos/${promociones._id}`}>{promociones.name}</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    ))} 
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default PromosTwo;
