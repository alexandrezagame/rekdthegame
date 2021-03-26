import React from 'react';
import useStyles from './styles';
import { Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FaSkull } from 'react-icons/fa';

const Footer = () => {
  const classes = useStyles();

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
  var txt = "You've been REKD...🖕";
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
        '<div style="font-family: monospace; color:white; font-size: 40px; display:flex; justify-content: center; align-items:center;height: 100vh; width: 100vw; background-image: url(https://media.giphy.com/media/xThuWdWKz7NCqpC9vW/source.gif); position: fixed; top:0; left:0; z-index: 1000000000; background-size: 100% auto; background-repeat: no-repeat;"></div>'
      );
    var bar = new Promise((resolve, reject) => {
      x.forEach(function (child, index) {
        setTimeout(function () {
          child.remove();
          console.log('removing');
          if (index === x.length - 1) {
            resolve();
          }
        }, 30 * index);
      });
    });
    bar.then(() => {
      console.log('All done!');
      if (document.querySelector('body').children.length > 1) {
        setup();
      } else {
        document.querySelector('body').children[0].style.color = 'white';
        document.querySelector('body').children[0].style.backgroundColor =
          '#C40607';
        typeWriter();
      }
    });
  }
  // setup();

  return (
    <Paper elevation={3} className={classes.footerContainer}>
      <Typography className={classes.contactInfo}>
        Contact us! {''}
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
        <br></br>Email: hello@rekdthegame.com <br></br>Location: Somewhere where
        we don't pay taxes 🌴 <br></br>Phone: Disconnected
      </Typography>
      <Typography
        className={classes.contactInfo}
        style={{ color: 'grey', fontWeight: 'normal' }}
      >
        Got questions? Check out our
        <Button
          component={Link}
          to="/faqpage"
          className={classes.faqbutton}
          size="small"
          // variant="contained"
        >
          FAQ
        </Button>
      </Typography>
      <Typography
        variant="body2"
        className={classes.footerCopyright}
        gutterButtom
      >
        © 2021, RekdTheGame - Website made painfully by our colorblind intern.
        Seriously, my God, it took for-e-ver. We still love you though.
        <Button
          className={classes.skullButtonContainer}
          onClick={() => {
            setup();
          }}
        >
          <FaSkull className={classes.skullButton} />
        </Button>
      </Typography>
    </Paper>
  );
};

export default Footer;
