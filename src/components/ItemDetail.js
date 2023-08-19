import ItemCount from "./ItemCount";

const ItemDetail = ({id,name,img,category,description,price,stock})=>{
    return(
        <article className="CardItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoría: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial ={1} stock={stock} onAdd={(quantity)=>console.log ('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail