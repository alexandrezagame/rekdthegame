import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/logosandpics/logo.PNG';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
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
          <div className={classes.button}>
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
          <div className={classes.buttonCart}>
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
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Navbar;
