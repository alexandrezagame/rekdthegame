import { Card, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    onUpdateCartQty(lineItemId, newQuantity);
  };

  const handleRemoveFromCart = (lineItemId) => {
    onRemoveFromCart(lineItemId);
  };

  return (
    <div>
      <Card>
        <CardMedia>
          <Typography>{item.name}</Typography>
          <Typography>Qty: {item.quantity}</Typography>
          <Typography>{item.line_total.formatted_with_symbol}</Typography>
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </button>
          <button type="button" onClick={() => handleRemoveFromCart(item.id)}>
            Remove
          </button>
        </CardMedia>
      </Card>
    </div>
  );
};

export default CartItem;
