import React from 'react';
import useStyles from './styles';
import { Container, CardMedia } from '@material-ui/core';
import bannerlogo from '../../assets/logosandpics/REKD.JPG';

const Banner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bannerContainer}>
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
