import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos/camisetas">Camisetas</Link></li>
            <li><Link className="menu-link" to="/productos/pantalones">Pantalones</Link></li>
            <li><Link className="menu-link" to="/productos/camperas">Camperas</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
    )
}  

export default Navbar; 