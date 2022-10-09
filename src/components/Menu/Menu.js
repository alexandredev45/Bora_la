import { Link } from "react-router-dom"
import { useState } from "react"
import "./Menu.css"

function Menu() {

    const [btn, newbtn] = useState(false)
    const evento = () => {
        newbtn(!btn)
    }

    return (
        <header>
            <nav className={btn ? 'menu-click' : 'menu'}>
                <Link className="link" to="/">
                    <img className={btn ? 'logo-click' : 'logo'} src="https://storage.googleapis.com/atados-v3/user-uploaded/images/931f042c-ac77-4316-8316-8b80c2867e36.png" alt=""/>
                </Link>
                <Link className={btn ? 'link-click' : 'link'} to="/">Inicio</Link>
                <Link className={btn ? 'link-click' : 'link'} to="/Cursos">Cursos</Link>
                <Link className={btn ? 'link-click' : 'link'} to="/Galeria">Galeria</Link>
                <Link className={btn ? 'link-click' : 'link'} to="/Eventos">Eventos</Link>
                <Link className={btn ? 'link-click' : 'link'} to="/LoginUsuario">Login</Link>
                <button className={btn ? 'btn-click' : 'btn'} onClick={evento} >
                    <img className={btn ? 'img-click' : 'img'} src="https://cdn-icons-png.flaticon.com/512/6499/6499731.png" alt=""/>
                </button>
           </nav>
        </header>
    )
}

export default Menu