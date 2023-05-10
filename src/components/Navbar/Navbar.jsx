import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Ley Seca Gin</h1>
        
        <nav>
            <ul>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CardWidget/>
    </header>
  )
}

export default NavBar