import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Orden from "./components/Orden";
import { NotificationServicesProvider } from "./components/services/Notification";


function App() {
  return (
    <NotificationServicesProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orden" element={<Orden/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </NotificationServicesProvider>
  );
}

export default App;
