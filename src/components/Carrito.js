import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
    <div className="container">
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <img className='imagen-carrito' src={prod.img} alt=""/>
                    <p className='titulo'>{prod.name}</p>
                    <p className='precio'>Precio unitario ${prod.price}</p>
                    <p className='precio'>Precio total $ {prod.price * prod.cantidad}</p>
                    <p className='precio'>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total:$ {precioTotal()}</h2>
                <button className="btn btn-danger" onClick={handleVaciar}>Vaciar carrito</button>
                <br/>
                <br/>
                <Link className="btn btn-success" to="/checkout">Finalizar compra</Link>
            </> :
            
            <h2>El carrito está vacío <i className="bi bi-cart-x"></i> </h2>
        }
        
    </div>
    )
}

export default Carrito