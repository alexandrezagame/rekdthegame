import React from 'react';
import { Button, Container, makeStyles } from '@material-ui/core';
import useStyles from './styles';
import { CardFlipper } from '../../components/';
import bannerlogo from '../../assets/logosandpics/REKD.JPG';

const SplashPage = ({ removePage }) => {
  const classes = useStyles();
  return (
    <Container className={classes.splashContainer}>
      <img
        className={classes.splashLogo}
        src={bannerlogo}
        onClick={removePage}
      ></img>
      <CardFlipper />
      <Button
        className={classes.splashButton}
        variant="contained"
        color="primary"
        onClick={removePage}
      >
        ENTER
      </Button>
    </Container>
  );
};

export default SplashPage;
