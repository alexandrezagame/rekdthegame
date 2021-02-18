import React from 'react';
import useStyles from './styles';
import { Paper, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.footerContainer}>
      <Typography className={classes.contactInfo}>
        Contact us! <br></br>Email: hello@rekdthegame.com <br></br>Location:
        Somewhere where we don't pay taxes 🌴 <br></br>Phone: Disconnected
      </Typography>
      <Typography variant="body2" className={classes.footerCopyright}>
        © 2021, RekdTheGame - Website made painfully by our colorblind intern.
        Seriously, my God, it took for-e-ver. We still love you though ❤️
      </Typography>
    </Paper>
  );
};

export default Footer;
