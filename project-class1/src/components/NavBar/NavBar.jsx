import React from "react";
import './navBar.css';
import './CartWidget';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark css-navbar">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ul-css-navbar">
                        <li className="nav-item nav-link" id="botonhome"><Link to={'/home'} className='linknavbar'>Home</Link></li>
                        <li className="nav-item nav-link" id="botonracks"><Link to={'/category/racks'} className='linknavbar'>Racks</Link></li>
                        <li className="nav-item nav-link" id="botonmdl"><Link to={'/category/mesas de luz'} className='linknavbar'>Mesas de Luz</Link></li>
                        <li className="nav-item nav-link" id="botoncocina"><Link to={'/category/cocina'} className='linknavbar'>Cocina</Link></li>
                        <li className="nav-item nav-link" id="botoncontacto"><Link to={'/home'}className='linknavbar'>Contacto</Link></li>
                        {/* <li className="nav-item nav-link" id="botoncontacto"><a href="/#">{estadoA}</a></li>                */}
                           
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    
    )
}

export default NavBar;
