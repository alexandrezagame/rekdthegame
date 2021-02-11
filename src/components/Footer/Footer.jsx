import React from 'react';
import useStyles from './styles';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.footerContainer}>
      <Typography className={classes.footerCopyright}>
        © 2021, RekdTheGame - Website made painfully by our intern. Seriously,
        my God, it took for-e-ver. We still love you though ❤️
      </Typography>
    </Container>
  );
};

export default Footer;
