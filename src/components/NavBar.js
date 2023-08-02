import CartWidget from "./CartWidget"

function NavBar () {
    return (
        <header>
            <nav>
                <h3>Tienda oficial</h3>
                <div>
                    <button>Producto 1</button>
                    <button>Producto 2</button>
                    <button>Producto 3</button>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar