import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../components/assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { clearCart } from '../../redux/cart/cart.actions'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.style'

const Header = ({ currentUser, hidden, clearCart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
       </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
       </OptionLink>
            {
                currentUser ? (
                    <OptionLink onClick={() => {
                        clearCart()
                        auth.signOut()
                    }}>
                        SIGN OUT
                    </OptionLink>) :

                    (<OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>)
            }

            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
                <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)