import React, {useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom"
import { MyContext } from "../context"
import { logOut } from "../services"

const NavThreeTry = () => {

    const [state,setState]= useState({sticky: true})
    const { clearCtxUser, user } = useContext(MyContext)


    
    const mobileMenu = () => {
        //Mobile Menu Toggle
        if(user){
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
        mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }
    }
    
    const logoutProcess = async () => {
        await logOut()
        clearCtxUser()
      }

     

     useEffect(() => {

        function handleScroll () {

            if (window.scrollY > 70) {
              setState({
                  sticky: true
              });
            } else if (window.scrollY < 70) {
              setState({
                  sticky: false
              });
            }
      
          }

        window.addEventListener('scroll', handleScroll);
        mobileMenu();

        return ()=>{
        window.removeEventListener('scroll', handleScroll);

        }
      });
 
      
      
      /* const proto = user
      const {role, email}= proto
      
      console.log(role) */

    
        return (
            <header className="site-header site-header__home-three ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${ state ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link to="/" className="navbar-brand">
                                    <img src="assets/images/logo-light.png" className="main-logo" width="128"
                                         alt="pinata logo" />
                                
                            </Link>
                            
                            <button className="menu-toggler" data-target=".main-navigation">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">


                        {!user && (
                        <>
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/assets">Contenido</Link>
                                </li>
                                <li>
                                    <Link to="/promociones">Promociones</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Descargas</Link>
                                </li>
                            </ul>
                            </>
                    )} 
                            
                            
                    
                        
                      {user?.role ==="business" &&  (
                        
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/assets">Contenido</Link>
                                </li>
                                
                                <li>
                                    <Link to="/promociones-activas">Tus promociones</Link>
                                </li>
                                <li>
                                    <Link to="/publicar/promo">Publica una promoción</Link>
                                </li>
                            </ul>
                            
                    )}

                    {user?.role ==="user" && (
                        <>
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/assets">Contenido</Link>
                                </li>
                                <li>
                                    <Link to="/promociones">Promociones</Link>
                                </li>
                                <li>
                                    <Link to="/descargas">Descargas</Link>
                                </li>
                            </ul>
                            </>
                    )}   
                    {user?.role ==="creator" && (
                        <>
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/assets">Tu Contenido publicado</Link>
                                </li>
                                <li>
                                    <Link to="/promociones">Promociones activas</Link>
                                </li>
                                <li>
                                    <Link to="/publicar/asset">Crear publicación</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contiendas</Link>
                                </li>
                            </ul>
                            </>
                    )} 
                        </div>
                        <div className="right-side-box">
                            <div className="header__social">
                            {!user && (
                        <>
                        
                                
                                <Link to="/login"><i className="fas fa-sign-in-alt"></i></Link>
                                <Link to="/signup"><i className="fas fa-user-plus"></i></Link>
                        </>
                    )}
                     {user?.role==="business" && (
                        <>
                        
                                
                                <Link to="/promociones-activas"><i className="fas fa-store"></i></Link>
                                <a  onClick={logoutProcess} ><i className="fas fa-sign-out-alt"></i></a>
                        </>
                    )}
                     {user?.role==="creator" && (
                        <>
                                
                                <Link to="/assets-personales"><i className="fas fa-camera-retro"></i></Link>
                                <a  onClick={logoutProcess} ><i className="fas fa-sign-out-alt"></i></a>
                                
                        </>
                    )}
                              
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }



export default NavThreeTry;