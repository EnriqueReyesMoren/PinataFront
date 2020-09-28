import React, {Component} from 'react';
import { Link } from "react-router-dom"

class Topbar extends Component {
    render() {
        return (
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <Link to='/test'> Soy Creativo</Link>
                        <Link to='/test'>Soy Negocio</Link>
                    </div>
                    <div className="topbar-one__right">
                        <Link to='/test'>Login</Link>
                        <Link to='/test'>Registro</Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;