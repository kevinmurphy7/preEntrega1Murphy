import Item from "./Item";

const ItemList = ( {productos, tipo} ) => {

    return (
    <div className="container">
        <h2 className="main-title">{tipo} Nuestra indumentaria</h2>
        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
    )
}

export default ItemList