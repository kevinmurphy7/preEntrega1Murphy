import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [id] = useState("products");

    const category = useParams().category;

    useEffect(() => {
        const productosRef = collection(db, "products");
        let q;
    
        if (category) {
        q = query(productosRef, where("category", "==", category));
        } else {
        q = productosRef; 
        }
    
        getDocs(q)
        .then((resp) => {
            setProductos(
            resp.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            })
            );
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
        });
    }, [category]);

    return (
    <div>
        <ItemList productos={productos} titulo={id} />
    </div>
    ) 
}

export default ItemListContainer