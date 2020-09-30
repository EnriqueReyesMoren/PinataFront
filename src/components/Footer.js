import React, {useState,useContext,useEffect} from 'react';
import { Link } from "react-router-dom"
import { getAssets } from "../services/assets"
import { MyContext } from "../context"

const Footer = () => {


  
  const [assets, setAssets] = useState(null)
  const { user } = useContext(MyContext)
  
  
  useEffect(() => {
    async function fetchAssets() {
      const {
        data: { assets }
      } = await getAssets()
      setAssets(assets.slice(0, 5))
    }

    fetchAssets()
    
  }, [])

    
        return (
            <div>
                <footer className="site-footer">
                    <div className="site-footer__upper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-sm-12">
                                    <div className="footer-widget footer-widget__link">
                                        <h2 className="footer-widget__title">Explora</h2>
                                        <div className="footer-widget__link-wrap">
                                            <ul className="list-unstyled footer-widget__link-list">
                                                <li><Link to="#">Inicio</Link></li>
                                                <li><Link to="#">Contenido</Link></li>
                                                <li><Link to="#">Mis colecciones</Link></li>
                                                <li><Link to="#">Descargas</Link></li>
                                            </ul>
                                            <ul className="list-unstyled footer-widget__link-list">
                                                <li><Link to="#">Login</Link></li>
                                                <li><Link to="#">Registro</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-3 col-lg-6 col-sm-12">
                                    <div className="footer-widget footer-widget__gallery">
                                        <h2 className="footer-widget__title">Contenido nuevo</h2>
                                        
                                        <ul className="list-unstyled footer-widget__gallery-list">
                                        {assets?.map(assets => (
                                            <li><Link to={`/assets/${assets._id}`}><img src={assets.photo}  alt="" /></Link></li>
                                            ))} 
                                        </ul>
                                        
                                    </div>
                                </div>
                                 
                                <div className="col-xl-3 col-lg-6 col-sm-12">
                                    <div className="footer-widget footer-widget__about">
                                        <h2 className="footer-widget__title">Piñata</h2>
                                        <p className="footer-widget__text">Piñata resuelve la necesidad de crear contenido con
                                        sabores latinos e interconectar creativos que
                                        cuentan con equipo y experiencia con negocios que
                                        necesitan crear publicidad personalizada.</p>
                                        <div className="footer-widget__btn-block">
                                            <Link to="#" className="thm-btn">Soy creativo</Link>                                  
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="container">
                            <p className="site-footer__copy">Creado por <a href="https://manureyes.xyz/" target="_blank">manureyes.xyz</a></p>
                            <div className="site-footer__social">

                                {/* <div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top"><i
                                    className="kipso-icon-top-arrow"></i></div> */}


                                <Link to="#"><i className="fas fa-camera"></i></Link>
                                <Link to="#"><i className="fas fa-video"></i></Link>
                                <Link to="#"><i className="fas fa-file-audio"></i></Link>
                                <Link to="#"><i className="fas fa-bezier-curve"></i></Link>
                            </div>
                        </div>
                    </div>
                </footer>

                

            </div>


        );
}
export default Footer;