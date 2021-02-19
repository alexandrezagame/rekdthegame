import React from 'react';
import useStyles from './styles';
import { Container, CardMedia } from '@material-ui/core';
import bannerlogo from '../../assets/logosandpics/rekdlogo.png';

const Banner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bannerContainer}>
      <div className={classes.toolbar} />
      <CardMedia
        className={classes.bannerImage}
        component="img"
        alt="Rekd logo"
        src={bannerlogo}
        title="Rekd logo"
      />
    </Container>
  );
};

export default Banner;
