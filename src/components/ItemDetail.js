import { useContext, useState } from "react";
import Counter from "./Counter"
import { CartContext } from "../context/CartContext";


const ItemDetail = ( {item} ) => {

    const { agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState (1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.cantidad && setCantidad(cantidad + 1)
    }

    return (
    <div className="container">
        <div className="producto-detalle">
        <img src={item.img} alt=""/>
            <div>
                <h3 className="titulo">{item.name}</h3>
                <p className="descripcion">{item.description}</p>
                <p className="precio">${item.price}</p>
                <Counter
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
    )
}

export default ItemDetail 