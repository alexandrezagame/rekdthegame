import React from 'react';
import { Button, Container, makeStyles } from '@material-ui/core';
import useStyles from './styles';
import { CardFlipper } from '../../components/';
import bannerlogo from '../../assets/logosandpics/rekdlogo.png';

const SplashPage = ({ removePage }) => {
  const classes = useStyles();
  return (
    <Container className={classes.splashContainer}>
      <img
        className={classes.splashLogo}
        src={bannerlogo}
        onClick={removePage}
        alt="card"
      ></img>
      <p className={classes.splashText}>Pick a Card</p>
      <CardFlipper />
      <Button
        className={classes.splashButton}
        variant="contained"
        color="secondary"
        onClick={removePage}
      >
        ENTER
      </Button>
    </Container>
  );
};

export default SplashPage;
