import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView/HomeView'
import ProducsView from './views/ProducsView/ProducsView'
import ContactView from './views/ContactView/ContactView'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<HomeView/>} />
          <Route exact path='/' element={<ProducsView/>} />
          <Route exact path='/' element={<ContactView/>} />
        </Routes>
        <ItemListContainer></ItemListContainer>
      </BrowserRouter>
    </>
  );
}

export default App;