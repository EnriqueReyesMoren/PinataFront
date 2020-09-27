import React, {Component} from 'react';
import { Link } from "react-router-dom"

class NavOne extends Component {
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

        //Search Toggle
        this.serachButton();
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

    serachButton = () => {
        let searchToggle = document.querySelector(".search-toggle");
        let searchPopup = document.querySelector(".search-popup");
        let searchClose = document.querySelector(".cancel");
        let searchOverlay = document.querySelector(".search-overlay");

        searchToggle.addEventListener("click", function () {
            searchPopup.classList.add('active');
        });

        searchClose.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });

        searchOverlay.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });
    }

    render() {
        return (
            <header className="site-header site-header__header-one ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link to="/">
                                <a className="navbar-brand">
                                    <img src="/assets/images/logo-dark.png" className="main-logo" width="128"
                                         alt="Awesome Image" />
                                </a>
                            </Link>
                            <button className="menu-toggler">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link to="/">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Home 01</Link></li>
                                        <li><Link to="/index-2">Home 02</Link></li>
                                        <li><Link to="/index-3">Home 03</Link></li>
                                        <li><Link to="#">Header Versions</Link></li>
                                            <ul className="sub-menu">
                                                <li><Link to="/">Header 01</Link></li>
                                                <li><Link to="/index-2">Header 02</Link></li>
                                                <li><Link to="/index-3">Header 03</Link></li>
                                            </ul>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#">Pages
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About Page</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/pricing">Pricing Plans</Link></li>
                                        <li><Link to="/faq">FAQ'S</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/courses">Courses
                                    <ul className="sub-menu">
                                        <li><Link to="/courses">Courses</Link></li>
                                        <li><Link to="/course-details">Courses Details</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/teachers">Teachers</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/teachers">Teachers</Link></li>
                                        <li><Link to="/teacher-details">Teachers Details</Link></li>
                                        <li><Link to="/become-teacher">Become Teacher</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/news">News</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/news">News Page</Link></li>
                                        <li><Link to="/news-details">News Details</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <a className="header__search-btn search-popup__toggler search-toggle" to="#"><i
                                className="kipso-icon-magnifying-glass"></i>
                            
                        </div>
                    </div>
                </nav>
                <div className="site-header__decor">
                    <div className="site-header__decor-row">
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-1"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-2"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-3"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};

export default NavOne;