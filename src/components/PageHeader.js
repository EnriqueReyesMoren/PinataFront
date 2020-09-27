import React from 'react';
import { Link } from "react-router-dom"

const PageHeader = (props) => {
    return (
        <section className="inner-banner">
            <div className="container">
                <ul className="list-unstyled thm-breadcrumb">
                    <li><Link to="/gohome">Home</Link></li>
                    <li className="active"><Link to="#">{ props.title }</Link></li>
                </ul>
                <h2 className="inner-banner__title">{ props.title }</h2>
            </div>
        </section>
    );
};

export default PageHeader;
