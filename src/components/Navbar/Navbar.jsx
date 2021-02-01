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
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/water.jpeg';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit">
          <img
            src={logo}
            alt="commerce.js"
            height="25px"
            className={classes.image}
          />
        </Typography>
        <div className={classes.button}>
          <IconButton
            // component={Link}
            // to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
