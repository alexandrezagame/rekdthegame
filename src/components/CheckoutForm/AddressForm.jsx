import { Grid, Typography, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextfield';
import {commerce} from '../../lib/commerce'

const AddressForm = ({ checkoutToken, next }) => {
    console.log('CHECKOUT TOKEN', checkoutToken)
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
      const {countries} = await commerce.services.localeListShippingCountries(
          checkoutTokenId
      )
      console.log('COUNTRIES', countries)
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
  }

  useEffect(() => {
      fetchShippingCountries(checkoutToken.id)
  }, []);


  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" />
            <FormInput name="address1" label="Address line 1" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="Zip / Postal code" />
                <Grid>
                    <InputLabel> Shipping Country </InputLabel>
                        <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                            {Object.entries(shippingCountries)
                                .map(([code, name]) => ({id: code, label: name}))
                                .map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                    </MenuItem>
                                ))}
                        </Select>
                  
                </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
