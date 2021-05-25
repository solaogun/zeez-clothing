import React from 'react'
import './custom-button.style.scss'
import { CustomButtonContainer } from './custom-button.style'

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {/* <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}> */}
        {children}
    </CustomButtonContainer>
)

export default CustomButton