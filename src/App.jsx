import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TituloComponente from "./components/TituloComponente";


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <TituloComponente greeting ="Tienda de Bebidas"></TituloComponente>
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;