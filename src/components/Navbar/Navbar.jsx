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
import logo from '../../assets/logosandpics/rekdlogo.png';
import { FaSkull } from 'react-icons/fa';
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

var elements = [];
function setup() {
  elements = [];
  const startDivs = Array.from(document.querySelector('body').children);
  startDivs.forEach(function (startdiv) {
    if (startdiv.children.length === 0) {
      elements.push(startdiv);
    } else {
      checkForChildren(startdiv);
    }
  });
  destroy(elements);
}
function checkForChildren(x) {
  Array.from(x.children).forEach(function (div) {
    if (div.children.length === 0) {
      elements.push(div);
    } else {
      checkForChildren(div);
    }
  });
  console.log(elements);
}
var i = 0;
var txt = "You've been REKD...";
var speed = 200; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  if (i < txt.length) {
    document.querySelector('body').children[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function destroy(x) {
  document
    .querySelector('body')
    .insertAdjacentHTML(
      'afterbegin',
      '<div style="font-family: monospace; color:white; font-size: 60px; display:flex; justify-content: center; align-items:center;height: 100vh; width: 100vw; background-image: url(https://media.giphy.com/media/ZwMF9XIF7eo9i/giphy.gif); position: fixed; top:0; left:0; z-index: 1000000000; background-size: cover; mix-blend-mode: overlay;"></div>'
    );
  var bar = new Promise((resolve, reject) => {
    x.forEach(function (child, index) {
      setTimeout(function () {
        child.remove();
        console.log('removing');
        if (index === x.length - 1) {
          resolve();
        }
      }, 50 * index);
    });
  });
  bar.then(() => {
    console.log('All done!');
    if (document.querySelector('body').children.length > 1) {
      setup();
    } else {
      document.querySelector('body').children[0].style.color = '#C40607';
      document.querySelector('body').children[0].style.backgroundColor =
        'black';
      typeWriter();
    }
  });
}
// setup();

const Navbar = ({ products, onAddToCart, totalItems }) => {
  const alert = useAlert();
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(products[0].id, 1);

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar className={classes.appBar}>
          <div className={classes.socialmediabutton}>
            <Button
              className={classes.skullButtonContainer}
              // variant="contained"
              // color="secondary"
              onClick={() => {
                setup();
              }}
            >
              <FaSkull className={classes.skullButton} />
            </Button>
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
