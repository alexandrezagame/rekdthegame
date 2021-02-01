import { Card, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div>
      <Card>
        <CardMedia>
          <Typography>{item.name}</Typography>
          <Typography>Qty: {item.quantity}</Typography>
          <Typography>{item.line_total.formatted_with_symbol}</Typography>
        </CardMedia>
      </Card>
    </div>
  );
};

export default CartItem;
