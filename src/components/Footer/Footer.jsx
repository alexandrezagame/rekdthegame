import React from 'react';
import useStyles from './styles';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.footerContainer}>
      <Typography className={classes.contactInfo}>
        Contact us! <br></br>Email: hello@rekdthegame.com <br></br>Location:
        Somewhere in South Florida 🌴 <br></br>Phone: Disconnected
      </Typography>
      <Typography variant="body2" className={classes.footerCopyright}>
        © 2021, RekdTheGame - Website made painfully by our colorblind intern.
        Seriously, my God, it took for-e-ver. We still love you though ❤️
      </Typography>
    </Container>
  );
};

export default Footer;
