import './NavBar.css';
import MenuNav from './MenuNav';
import IconoComponente from './IconoComponente';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <IconoComponente />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/categorias/bebidas-alcoholicas">
                        <MenuNav pagina="Bebidas Alcohólicas" />
                    </Link>
                </li>
                <li>
                    <Link to="/categorias/bebidas-no-alcoholicas">
                        <MenuNav pagina="Bebidas No Alcohólicas" />
                    </Link>
                </li>
                <li>
                    <Link to="/categorias/energizantes">
                        <MenuNav pagina="Energizantes" />
                    </Link>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}