import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes,Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Contenedor de productos'}/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Contenedor de productos'}/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
