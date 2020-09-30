import React, {Component} from 'react';
import { Link } from "react-router-dom"

class NavThree extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }
    render() {
        return (
            <header className="site-header site-header__home-three ">
                <div className="topbar-one">
                    <div className="container">
                        <div className="topbar-one__left">
                            <Link to="/creador">Soy creativo</Link>
                            <Link to="/negocio">Soy negocio</Link>
                        </div>
                        <div className="topbar-one__right">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Register</Link>
                        </div>
                    </div>
                </div>
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
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
                        </div>
                        <div className="right-side-box">
                            <div className="header__social">
                                <Link to="#"><i className="fas fa-camera"></i></Link>
                                <Link to="#"><i className="fas fa-video"></i></Link>
                                <Link to="#"><i className="fas fa-file-audio"></i></Link>
                                <Link to="#"><i className="fas fa-bezier-curve"></i></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavThree;