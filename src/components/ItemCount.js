import { useState } from "react" ;

const ItemCount = ({stock,initial,onAdd})=>{
    const [quantity,setQuantity]=useState(initial)

    const increment=()=>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }

    const decrement =()=>{
        if(quantity>1){
            setQuantity (quantity-1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
            <button className="count-button" onClick={decrement}>-</button>
            <span className="value">{quantity}</span>
            <button className="count-button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="add-button" onClick={()=>onAdd(quantity)} disabled={!stock}>
                    Agregar🛒
                </button>
            </div>
        </div>
    )
}

export default ItemCount;
