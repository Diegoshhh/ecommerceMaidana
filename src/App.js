import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Carrito from "./components/Carrito";
import CartProvider from "./components/context/CartContext";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Contenedor de productos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Contenedor de productos'}/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
