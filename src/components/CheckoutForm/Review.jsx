import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
const Review = ({ checkoutToken, shippingData }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    checkoutToken.live.shipping.available_options.forEach((item) => {
      if (item.countries.includes(shippingData.shippingCountry)) {
        setCountry(item);
        // console.log('item', item);
      } else {
        return false;
      }
    });
  }, []);

  return (
    <>
      {country && (
        <>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            {checkoutToken.live.line_items.map((product) => (
              <>
                <ListItem style={{ padding: '10px 0' }} key={product.name}>
                  <ListItemText
                    primary={product.name}
                    secondary={`Quantity: ${product.quantity}`}
                  />
                  <Typography variant="body2">
                    ${product.line_total.raw}
                  </Typography>
                </ListItem>
                <ListItem style={{ padding: '10px 0' }} key={product.name}>
                  <ListItemText
                    primary="Shipping"
                    secondary={country.description}
                  />
                  <Typography variant="body2">
                    ${country.price.raw.toFixed(2)}
                  </Typography>
                </ListItem>
              </>
            ))}
            <ListItem style={{ padding: '10px 0' }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                ${checkoutToken.live.subtotal.raw + country.price.raw}
              </Typography>
            </ListItem>
          </List>
        </>
      )}
    </>
  );
};
export default Review;
