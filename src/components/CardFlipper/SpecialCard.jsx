import useStyles from './styles';
import React, { useState } from 'react';
import specialFront from '../../assets/logosandpics/special.jpg';
import specialBack1 from '../../assets/logosandpics/sp1.jpg';
import specialBack2 from '../../assets/logosandpics/sp2.jpg';
import specialBack3 from '../../assets/logosandpics/sp3.jpg';
import ReactCardFlip from 'react-card-flip';

const SpecialCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const classes = useStyles();

  const cardArr = [specialBack1, specialBack2, specialBack3];

  const getRandomCard = () => {
    const item = cardArr[Math.floor(Math.random() * 3)];
    console.log('item', item);
    return item;
  };

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      flipSpeedBackToFront={0.1}
      flipSpeedFrontToBack={0.1}
    >
      <div className={classes.card}>
        <img
          className={classes.card}
          onClick={handleClick}
          src={specialFront}
          alt=""
        />
      </div>

      <div className={classes.card}>
        <img
          className={classes.card}
          onClick={handleClick}
          src={getRandomCard()}
          alt=""
        />
      </div>
    </ReactCardFlip>
  );
};

export default SpecialCard;
