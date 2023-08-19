import CartWidget from "./CartWidget"
import { NavLink,Link } from "react-router-dom"

function NavBar () {
    return (
        <header className="header">
            <Link to='/'>
            <h3 className="logo">Tienda oficial🦁</h3>
            </Link>
            <nav >
                <ul className="nav-links">
                    <li>
                        <NavLink to='/categoryId/camisetas' className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoryId/pantalones' className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                    </li>                    
                    <li>
                        <NavLink to='/categoryId/camperas' className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>Ropa de Abrigo</NavLink>
                    </li>
                </ul>            
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar