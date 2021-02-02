import React from 'react'
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY)

const PaymentForm = ({checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout}) => {
    

    
    
    return (
        <div>
             <Review/> 
             <Divider/>
            
        </div>
    )
}

export default PaymentForm
