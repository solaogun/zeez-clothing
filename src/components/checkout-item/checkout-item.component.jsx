import React from 'react'
import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span className='remove-botton'>&#10005;</span>

    </div>
)

export default CheckoutItem;