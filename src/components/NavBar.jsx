import './NavBar.css'
import MenuNav from './MenuNav'
import CartWidget from './CartWidget'
import IconoComponente from './IconoComponente'

export default function Nav(props) {
    return (
        
        <ul className="navbar">
            <div className='logo'>
                <IconoComponente/>
            </div>
                <MenuNav pagina="Inicio"/>
                <MenuNav pagina="Productos"/>
                <MenuNav pagina="Nosotros"/>
                <MenuNav pagina="Contacto"/>
                <CartWidget/>
        </ul>
    )
}
