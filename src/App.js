import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";
import { NotificationServicesProvider } from "./components/services/Notification";


function App() {
  return (
    <NotificationServicesProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="*" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </NotificationServicesProvider>
  );
}

export default App;
