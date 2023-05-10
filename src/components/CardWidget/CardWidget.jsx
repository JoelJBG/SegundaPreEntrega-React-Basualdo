import React from 'react'
import './CardWidget.css'

const CardWidget = () => {

        const ImgCarrito = "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-black-and-white-icon-shopping-cart-collection-image_2291887.jpg"
    return (
    <div>
        <img className='ImgCarrito' src={ImgCarrito} alt="Carrito" />
        <strong>1</strong>
    </div>
  )
}

export default CardWidget