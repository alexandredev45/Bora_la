import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cursos from "../../pages/Cursos/Cursos"
import Galeria from "../../pages/Galeria/Galeria"
import Eventos from "../../pages/Eventos/Eventos"
import Login from "../../pages/Login/Login"

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cursos" element={<Cursos />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/Eventos" element={<Eventos />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Rotas

