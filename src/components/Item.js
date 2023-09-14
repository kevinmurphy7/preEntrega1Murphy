import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {
    return (
    <div className="producto">
            <img src={producto.img} className="card-img-top" alt={producto.name}/>
        <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">{producto.description}</p>
            <p className="card-text"> ${producto.price}</p>
        <Link to={`/item/${producto.id}`} className="ver-mas">Ver más</Link>
        </div>
    </div>
    )
}

export default Item