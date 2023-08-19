import imagen from "../icons8-carrito-de-compras-30.png"

function CartWidget (){
    return (
        <div className="carrito">
            <img src={imagen} alt="logo carrito" />
            0
        </div>
    )
}

export default CartWidget