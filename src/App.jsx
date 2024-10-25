import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartView from "./components/CartView"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TituloComponente from "./components/TituloComponente";
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter >
        <NavBar />
        <TituloComponente greeting="Tienda de Bebidas" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
