import './Navbar.scss'
import logo from '../../assets/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
            <img src={logo} />

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/' className="navbar__link">Gin</Link>
                </nav>
                <CartWidget />
            </div>

        </header>
    )
}