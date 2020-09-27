import React from 'react';
import { Link } from "react-router-dom"

const Teachers = () => {
    return (
        <section className="team-one team-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/team-1-1.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link to="/teacher-details">Adelaide Hunter</Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">There are many varia of passages of lorem.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default Teachers;
