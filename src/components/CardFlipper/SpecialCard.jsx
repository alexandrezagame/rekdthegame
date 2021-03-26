import useStyles from './styles';
import React, { useState } from 'react';
import specialFront from '../../assets/logosandpics/special.jpg';
import specialBack1 from '../../assets/logosandpics/sp1.jpg';
import specialBack2 from '../../assets/logosandpics/sp2.jpg';
import specialBack3 from '../../assets/logosandpics/sp3.jpg';
import specialBack4 from '../../assets/logosandpics/sp4.jpg';
import specialBack5 from '../../assets/logosandpics/sp5.jpg';
import specialBack6 from '../../assets/logosandpics/sp6.jpg';
import specialBack7 from '../../assets/logosandpics/sp7.jpg';
import specialBack8 from '../../assets/logosandpics/sp8.jpg';
import specialBack9 from '../../assets/logosandpics/sp9.jpg';
import specialBack10 from '../../assets/logosandpics/sp10.jpg';
import ReactCardFlip from 'react-card-flip';

const SpecialCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const classes = useStyles();

  const cardArr = [
    specialBack1,
    specialBack2,
    specialBack3,
    specialBack4,
    specialBack5,
    specialBack6,
    specialBack7,
    specialBack8,
    specialBack9,
    specialBack10,
  ];

  const getRandomCard = () => {
    const item = cardArr[Math.floor(Math.random() * 10)];
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
      flipSpeedBackToFront={0.3}
      flipSpeedFrontToBack={0.3}
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
