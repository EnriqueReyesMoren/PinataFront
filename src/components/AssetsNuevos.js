import React, {useState,useContext,useEffect} from 'react';
import { Link } from "react-router-dom"
import { getAssets } from "../services/assets"
import { MyContext } from "../context"

const AssetsNuevos = ( ) => {

    const [asset, setAsset] = useState(null)
    const { user } = useContext(MyContext)
  
    useEffect(() => {
      async function fetchAssets() {
        const {
          data: { assets }
        } = await getAssets()
        setAsset(assets.slice(0,5))
      }
  
      fetchAssets()
      
    }, [])

    return (
    

<div className="course-details__list">      
<h2 className="course-details__list-title">Nuevos Articulos</h2>
        {asset?.map(assets => (
        
        
        <div className="course-details__list-item">
            <div className="course-details__list-img">
                <img src={assets.photo} alt="" />
            </div>
            <div className="course-details__list-content">
                <h3><Link to={`/assets/${assets._id}`}>{assets.name}</Link></h3>
                <div className="course-details__list-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>${assets.price}</span>
                </div>
            </div>
        </div>
        
    


             ))} 
         </div>   
 

);
};

export default AssetsNuevos;