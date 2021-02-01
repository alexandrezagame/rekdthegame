import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import React from 'react';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <div className={classes.zone}>
      <Typography variant="subtitle1">
        You have no items in your shopping cart,
        <br></br>
        <Link className={classes.link} to="/">
          start adding some
        </Link>
        !
      </Typography>
    </div>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <div>
      {cart.line_items.map((lineItem) => {
        return (
          <CartItem
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
            item={lineItem}
          />
        );
      })}
    </div>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography></Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
