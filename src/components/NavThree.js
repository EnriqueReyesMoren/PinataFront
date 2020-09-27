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
                            <Link to="#">needhelp@kipso.com</Link>
                            <Link to="#">444 888 0000</Link>
                        </div>
                        <div className="topbar-one__right">
                            <Link to="#">Login</Link>
                            <Link to="#">Register</Link>
                        </div>
                    </div>
                </div>
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link to="/" className="navbar-brand">
                                    <img src="assets/images/logo-light.png" className="main-logo" width="128"
                                         alt="Awesome Image" />
                                
                            </Link>
                            <button className="menu-toggler" data-target=".main-navigation">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Home 01</Link></li>
                                        <li><Link to="/index-2">Home 02</Link></li>
                                        <li><Link to="/index-3">Home 03</Link></li>
                                        <li><Link to="#">Header Versions</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/">Header 01</Link></li>
                                                <li><Link to="/index-2">Header 02</Link></li>
                                                <li><Link to="/index-3">Header 03</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <div className="header__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavThree;