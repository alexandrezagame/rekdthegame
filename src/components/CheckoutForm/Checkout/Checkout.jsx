import React, {useState, useEffect} from 'react';
import AddressForm from '../AddressForm';
import {commerce} from "../../../lib/commerce"
import useStyles from './styles'

const Checkout = ({cart}) => {
   const classes = useStyles()
const [checkoutToken, setCheckoutToken] = useState(null)
    useEffect(() => {
     if(cart.id) {
         
         const generateToken = async () => {
             try {
                 const token = await commerce.checkout.generateToken(cart.id, {
                     type: "cart"
                 })
                 console.log('GENERATED TOKEN', token)
                 setCheckoutToken(token)
             } catch (error) {
                 console.log(error)
             }
         }
         generateToken()
     }
    }, [cart])
  const next = () => {
    return;
  };

  return (
 
    <div>
    {checkoutToken && <AddressForm checkoutToken={checkoutToken} next={next}></AddressForm>  }
    </div>
  );
};

export default Checkout;
