import React, {useState, useEffect} from 'react';
import AddressForm from '../AddressForm';
import {commerce} from "../../../lib/commerce"
import useStyles from './styles'
import {useHistory} from 'react-router-dom'
import PaymentForm from '../PaymentForm'

const steps = ["Shipping address", "Payment details"]

const Checkout = ({cart}) => {
const [checkoutToken, setCheckoutToken] = useState(null)
const [activeStep, setActiveStep] = useState(0)
const [shippingData, setShippingData] = useState({})

const classes = useStyles()
const history = useHistory()

const nextStep = () => setActiveStep((prevActivestep) => prevActivestep +1)
const backStep = () => setActiveStep((prevActivestep) => prevActivestep -1)

    useEffect(() => {
     if(cart.id) {
         
         const generateToken = async () => {
             try {
                 const token = await commerce.checkout.generateToken(cart.id, {
                     type: "cart"
                 })
                 setCheckoutToken(token)
             } catch (error) {
                 if(activeStep !== steps.length) {
                   history.push("/")
                 }
             }
         }
         generateToken()
     }
    }, [cart])
  const next = (data) => {
    setShippingData(data)

    nextStep()
  };

  const Form = () => { 
     activeStep === 0 ? (
        <AddressForm 
          checkoutToken={checkoutToken} 
          nextStep={nextStep} 
          setShippingData={setShippingData} 
          next={next}
        />  
    ) : (
         <PaymentForm
          checkoutToken={checkoutToken} 
          backStep={backStep}
          nextStep={nextStep} 
          setShippingData={setShippingData} 
        />  
    );
    }
  

  return (
      <div></div>
  );


};

export default Checkout;
