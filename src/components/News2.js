import React, {useState,useContext,useEffect} from 'react';
import { Link } from "react-router-dom"
import {getPromos} from "../services/promos"
import { MyContext } from "../context"

const News2 = () => {
    const [promos, setPromos] = useState(null)
    const [changes, setChanges]=useState(false)
    const { user } = useContext(MyContext)
  

    async function fetchPromos() {
        const {
          data: { promos }
        } = await getPromos()
        setPromos(promos)
        setChanges(true)
      }

    useEffect(() => {
     
  
      fetchPromos()

      setChanges(false)
    }, [changes])
    return (
        <section className="blog-one blog-page">
            <div className="container">
                <div className="row">
                {promos?.map(promociones => (
                    <div className="col-lg-4">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src={promociones.photo }alt="" style={{width:"370px", height:"243px", objectFit:"cover"}}/>
                                    <Link to={`/promos/${promociones._id}`} className="blog-one__plus"><i
                                        className="kipso-icon-plus-symbol"></i>
                                    </Link>
                            </div>
                            <div className="blog-one__content text-center">
                                
                                <h2 className="blog-one__title">
                                    <Link to={`/promos/${promociones._id}`}>{promociones.name}</Link>
                                </h2>
                                <p className="blog-one__text">{promociones.descripton}</p>
                                <Link to={`/promos/${promociones._id}`} className="blog-one__link">Leer mas</Link>
                            </div>
                        </div>
                    </div>
                    ))} 
                    
                   
                </div>
            </div>
        </section>
    );
};

export default News2;
