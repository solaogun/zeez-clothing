import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IfmkMAOjMlPahmaWpQWjfvzASWq1zcMToOXFOw31APOrBfXc0rEK24fEDcja2QvNp6EXVwxybVNrrJG4ifggWfQ00vDnFPLGI'

    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }


    return (
        <StripeCheckout
            label='Pay Now'
            name='Zeez Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton