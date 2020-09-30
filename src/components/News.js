import React, {useState,useContext,useEffect} from 'react';
import { Link } from "react-router-dom"
import {getPromos} from "../services/promos"
import { MyContext } from "../context"

const News = () => {
    const [promos, setPromos] = useState(null)
    const { user } = useContext(MyContext)
  
    useEffect(() => {
      async function fetchPromos() {
        const {
          data: { promos }
        } = await getPromos()
        setPromos(promos)
      }
  
      fetchPromos()
      
    }, [])
    return (
        <section className="blog-one blog-page">
            <div className="container">
                <div className="row">
                {promos?.map(promociones => (
                    <div className="col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog-1-1.jpg" alt="" style={{width:"370px", height:"243px", objectFit:"cover"}}/>
                                    <Link to="/news-details"className="blog-one__plus"><i
                                        className="kipso-icon-plus-symbol"></i>
                                    </Link>
                            </div>
                            <div className="blog-one__content text-center">
                                
                                <h2 className="blog-one__title">
                                    <Link to="/news-details">{promociones.name}</Link>
                                </h2>
                                <p className="blog-one__text">{promociones.descripton}</p>
                                <Link to="/news-details" className="blog-one__link">Leer mas</Link>
                            </div>
                        </div>
                    </div>
                    ))} 
                    
                   
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
