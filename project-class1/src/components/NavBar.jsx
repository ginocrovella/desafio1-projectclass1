import React from "react";
import './navBar.css';

const NavBar = () => {
    return (
        <body>
        <div className="titulo">
            <h1>MUEBLES DISEÑO CÚBICO</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark css-navbar">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ul-css-navbar">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" id="botonhome" href="index.html">Home</a>
                            </li>
                            <li clasName="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="view/catalogo.html" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Catálogo</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" id="botonracks" href="view/catalogo.html">Racks</a></li>
                                    <li><a className="dropdown-item" id="botonmdl" href="view/catalogo.html">Mesas de luz</a></li>
                                    <li><a className="dropdown-item" id="botoncocina" href="view/catalogo.html">Cocina</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="botoncontacto" href="view/contacto.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       </body>

    )
}

export default NavBar;