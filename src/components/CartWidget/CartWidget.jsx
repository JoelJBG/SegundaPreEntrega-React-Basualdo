import React from 'react'

const CartWidget = () => {
    const ImgCarrito = "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-black-and-white-icon-shopping-cart-collection-image_2291887.jpg"
    return (
        <div>
            <img className='ImgCarrito' src={ImgCarrito}/>
            <span className='spancolor'>0</span>
        </div>
    )
}

export default CartWidget