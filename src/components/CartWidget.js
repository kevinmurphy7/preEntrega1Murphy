import imagen from "../icons8-carrito-de-compras-30.png"

function CartWidget (){
    return (
        <div>
            <img src={imagen} alt="logo carrito" />
            0
        </div>
    )
}

export default CartWidget