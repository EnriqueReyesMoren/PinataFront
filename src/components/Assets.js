import React, {useState,useContext,useEffect} from 'react';
import { Link } from "react-router-dom"
import { getAssets } from "../services/assets"
import { MyContext } from "../context"

const Assets = ( ) => {

    const [asset, setAsset] = useState(null)
    const { user } = useContext(MyContext)
  
    useEffect(() => {
      async function fetchAssets() {
        const {
          data: { assets }
        } = await getAssets()
        setAsset(assets)
      }
  
      fetchAssets()
      
    }, [])

    return (
    
    <section className="course-one course-page">
    <div className="container">
        <div className="row">

        {asset?.map(assets => (

            <div className="col-lg-4">
                <div className="course-one__single">
                    <div className="course-one__image">
                        <img src={assets.photo}  alt="" />
                            <i className="far fa-heart"></i>
                    </div>
                    <div className="course-one__content">
                        <Link to="#" className="course-one__category">{assets.category}</Link>
                        
                        <h2 className="course-one__title"><Link href="/course-details"><Link>{assets.name}</Link></Link>
                        </h2>
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
                            <Link to={`/assets/${assets._id}`}>${assets.price}.00</Link>
                        </div>
                        <Link to={`/assets/${assets._id}`}   className="course-one__link">Ver detalles</Link>
                    </div>
                </div>
            </div>

             ))} 

            
        </div>
        <div className="post-pagination">
            <Link to="#"><i className="fa fa-angle-double-left"></i></Link>
            <Link className="active" href="#">1</Link>
            <Link to="#">2</Link>
            <Link to="#">3</Link>
            <Link to="#">4</Link>
            <Link to="#"><i className="fa fa-angle-double-right"></i></Link>
        </div>

    </div>
</section>
);
};

export default Assets;