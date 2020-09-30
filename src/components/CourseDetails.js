import React , { useState, useEffect, useContext } from 'react';
import { getOneAsset } from "../services/assets"
import { MyContext } from "../context"
import { Link } from "react-router-dom"

function CourseDetails  ({ assetId }) {

    const [asset, setAsset] = useState(null)
    const { user } = useContext(MyContext)

    useEffect(() => {
        async function fetchAsset() {
          const {
            data: { asset }
          } = await getOneAsset(assetId)
          setAsset(asset)
        }
        fetchAsset()
        
      }, [assetId])

    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    
                    
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
