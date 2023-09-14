import Contacto from "./components/Contacto";
import  ItemDetailContainer  from "./components/ItemDetailContainer";
import  ItemListContainer  from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import "./index.css"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito"
import Checkout from "./components/CheckOut";

function App() {

  return (
    
      <CartProvider>
      <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/:category" element={<ItemListContainer/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>

      </BrowserRouter>
      </CartProvider>
  );
}

export default App;