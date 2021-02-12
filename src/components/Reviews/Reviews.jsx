import React from 'react';
import r1 from '../../assets/logosandpics/1.png';
import r2 from '../../assets/logosandpics/2.png';
import r3 from '../../assets/logosandpics/3.png';
import r4 from '../../assets/logosandpics/4.png';
import r5 from '../../assets/logosandpics/5.png';
import r6 from '../../assets/logosandpics/6.png';
import r7 from '../../assets/logosandpics/7.png';
import r8 from '../../assets/logosandpics/8.png';
import r9 from '../../assets/logosandpics/9.png';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import useStyles from './styles';

const Reviews = () => {
  const items1 = [r1, r2, r3];
  const items2 = [r4, r5, r6];
  const items3 = [r7, r8, r9];

  const classes = useStyles();

  return (
    <div className={classes.carouselContainer}>
      <Carousel
        className={classes.carousel}
        autoPlay
        interval="6000"
        indicators={false}
      >
        {items1.map((item, i) => (
          <img key={i} src={item} className={classes.carouselImage} />
        ))}
      </Carousel>
      <Carousel
        className={classes.carousel}
        autoPlay
        interval="6000"
        indicators={false}
      >
        {items2.map((item, i) => (
          <img key={i} src={item} className={classes.carouselImage} />
        ))}
      </Carousel>
      <Carousel
        className={classes.carousel}
        autoPlay
        interval="6000"
        indicators={false}
      >
        {items3.map((item, i) => (
          <img key={i} src={item} className={classes.carouselImage} />
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;