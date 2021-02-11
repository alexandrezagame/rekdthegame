import useStyles from './styles';
import React, { useState } from 'react';
import punishmentFront from '../../assets/logosandpics/punishment.jpg';
import punishment1 from '../../assets/logosandpics/pu1.jpg';
import punishment2 from '../../assets/logosandpics/pu2.jpg';
import punishment3 from '../../assets/logosandpics/pu3.jpg';
import punishment4 from '../../assets/logosandpics/pu4.jpg';
import punishment5 from '../../assets/logosandpics/pu5.jpg';
import punishment6 from '../../assets/logosandpics/pu6.jpg';
import punishment7 from '../../assets/logosandpics/pu7.jpg';
import punishment8 from '../../assets/logosandpics/pu8.jpg';
import punishment9 from '../../assets/logosandpics/pu9.jpg';
import punishment10 from '../../assets/logosandpics/pu10.jpg';
import ReactCardFlip from 'react-card-flip';

const PunishmentCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const classes = useStyles();

  const cardArr = [
    punishment1,
    punishment2,
    punishment3,
    punishment4,
    punishment5,
    punishment6,
    punishment7,
    punishment8,
    punishment9,
    punishment10,
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
      flipSpeedBackToFront={0.1}
      flipSpeedFrontToBack={0.1}
    >
      <div className={classes.card}>
        <img
          className={classes.card}
          onClick={handleClick}
          src={punishmentFront}
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

export default PunishmentCard;
