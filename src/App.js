import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Contenedor de productos'}/>
    </>
  );
}

export default App;
