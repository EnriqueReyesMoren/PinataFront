import React, {Component} from 'react';
import { Link } from "react-router-dom"

class Topbar extends Component {
    render() {
        return (
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <Link to='/test'>needhelp@kipso.com</Link>
                        <Link to='/test'>444 888 0000</Link>
                    </div>
                    <div className="topbar-one__right">
                        <Link to='/test'>Login</Link>
                        <Link to='/test'>Register</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;