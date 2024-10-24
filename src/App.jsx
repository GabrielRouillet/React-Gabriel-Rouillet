import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartView from "./components/CartView"; // Importa el componente CartView
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TituloComponente from "./components/TituloComponente";
import { CartProvider } from './components/CartContext'; // Importa el CartProvider

function App() {
  return (
    <CartProvider> {/* Envuelve la aplicación con CartProvider */}
      <BrowserRouter>
        <NavBar />
        <TituloComponente greeting="Tienda de Bebidas" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} /> {/* Nueva ruta para CartView */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
