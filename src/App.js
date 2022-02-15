import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Contenedor de productos'}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
