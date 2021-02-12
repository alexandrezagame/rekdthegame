import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/logosandpics/REKD.JPG';

import { useAlert } from 'react-alert';

const randomAlertMessage = () => {
  const quoteArray = [
    '1,500 Games added to cart!',
    'Today we are eating!',
    'Your father is proud.',
    'Credit card cloned.',
    'You better add another one to the cart...',
    "ABRACADABRA! Nope, you're still uggly.",
    'and BOOM! Just like that our intern gets paid this month.',
    'For every game you purchase our founder gets to pay for child support.',
    'What doesn’t kill you. Disappoints me.',
    'The people who tolerate you on a daily basis are the real heroes.',
    'Don’t be ashamed of who you are. That’s your parent’s job.',
    'You can’t Photoshop personality.',
    'You have your entire life to be a jerk. Why not take today off?',
    'Remember, for every game you buy our founders drink a shot in your honor.',
  ];

  const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  return randomQuote;
};

const Navbar = ({ products, onAddToCart, totalItems }) => {
  const alert = useAlert();
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(products[0].id, 1);

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar className={classes.appBar}>
          <div className={classes.socialmediabutton}>
            <Link
              to={{ pathname: 'https://www.instagram.com/rekdthegame/' }}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              to={{ pathname: 'https://www.facebook.com/rekdthegame/' }}
              target="_blank"
            >
              <FacebookIcon />
            </Link>
          </div>
          <div className={classes.logoDiv}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              <img
                src={logo}
                alt="Rekd the game"
                height="25px"
                className={classes.image}
              />
            </Typography>
          </div>
          <div className={classes.buttonCart}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonBuy}
              onClick={() => {
                handleAddToCart();
                alert.success(randomAlertMessage());
              }}
            >
              {' '}
              GET REKD
            </Button>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
