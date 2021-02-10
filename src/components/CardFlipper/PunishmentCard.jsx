import { CardActionArea } from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';
import punishmentFront from '../../assets/logosandpics/punishment.jpg';
import punishment1 from '../../assets/logosandpics/pu1.jpg'
import punishment2 from '../../assets/logosandpics/pu2.jpg'
import punishment3 from '../../assets/logosandpics/pu3.jpg'
import ReactCardFlip from 'react-card-flip';

const PunishmentCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const classes = useStyles();

  const cardArr = [
    punishment1,
    punishment2,
    punishment3
  ]

  const getRandomCard = () => {
    const item = cardArr[Math.floor(Math.random() * 3)]
    console.log('item', item)
    return item
  }


  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront={0.1} flipSpeedFrontToBack={0.1}>
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
