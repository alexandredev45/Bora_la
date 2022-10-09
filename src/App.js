import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Cursos from "./pages/Cursos/Cursos";
import Galeria from "./pages/Galeria/Galeria";
import Eventos from "./pages/Eventos/Eventos";
import Login from "./pages/LoginUsuario/LoginUsuario";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/LoginUsuario" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
