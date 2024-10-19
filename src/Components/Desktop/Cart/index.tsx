import React, { useState } from 'react'
import './styles.scss'
import thumbnail from '../../../assets/image-product-1-thumbnail.jpg'
import { userCartContext } from '../../../context/CartContext'

type CartPropsType = {
    onClose():void
}

function Cart({onClose}: CartPropsType) {
    const {product, getTotalPrice, removeFromCart} = userCartContext()
    
  console.log(product?.finalPrice);
  

  return (
    <div className='cartMain'>
        <div className='cartP '>
            Cart
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" onClick={onClose} className='closeCart'>
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"
            className='closeCart'
            />
            </svg>
        </div>
        <div className='divider'></div>
        {!product || product?.quantity === 0? (
                <div className='emptyCart'>
                    <p>Your cart is empty.</p>
                </div>
            ):(
                <>
                    <div className='cartInfo'>
                        <img src={thumbnail} alt="thumbnail" className='thumbnail'/>
                        <div className='infoAlign'>
                            <p>{product?.name||'l bozo'}</p>
                            <span className='productQuant'>${product?.basePrice.toFixed(2)} x {product?.quantity} <span className='finalPrice'>${product?.finalPrice.toFixed(2)}</span></span>
                        </div>
                        <div className='removeCart'>
                            <svg width={14} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
                            <path 
                            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                            fill='#C3CAD9'
                            fillRule="nonzero"
                            className='trashIcon'
                            onClick={removeFromCart}
                            />
                            </svg>
                        </div>
                    </div>
        <div className='buttonDiv'>
        <button className='checkoutButton'>Checkout</button>
        </div>
            </>
        )}
        
    </div>
  )
}

export default Cart