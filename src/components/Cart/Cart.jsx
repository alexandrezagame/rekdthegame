import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import React from 'react';
import CartItem from './CartItem/CartItem';
import EmptyCartImage from '../../assets/logosandpics/rickmorty3.png';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <div className={classes.zone}>
      <img className={classes.emptyCartImage} src={EmptyCartImage} alt="" />
      <Typography variant="subtitle1" className={classes.zoneText}>
        Hobos have more stuff in their carts than you,{' '}
        <Link className={classes.link} to="/">
          don't be so cheap and start adding some!
        </Link>
      </Typography>
    </div>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid
        container
        spacing={3}
        style={{
          display: 'flex',
          justifyContent: 'center',
          // flexDirection: 'column',
        }}
      >
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" gutterBottom>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      <Typography className={classes.title} variant="h5" gutterBottom>
        If you are not in continental US, drop us an email at:
        hello@rekdthegame.com to purchase the game.
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
