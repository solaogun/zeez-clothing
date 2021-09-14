import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IfmkMAOjMlPahmaWpQWjfvzASWq1zcMToOXFOw31APOrBfXc0rEK24fEDcja2QvNp6EXVwxybVNrrJG4ifggWfQ00vDnFPLGI'

    const onToken = token => {
        // console.log(token);
        // alert('payment Successful');
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('payment successful')
        }).catch(error => {
            console.log('payment error: ', JSON.parse(error))
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit cart'
            )
        })
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