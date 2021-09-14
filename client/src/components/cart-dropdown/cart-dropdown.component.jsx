
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { useParams, useHistory } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.style.scss'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const history = useHistory()


    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />))
                ) : (<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <CustomButton
                onClick={() => {

                    history.push('/checkout');

                    dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default CartDropdown