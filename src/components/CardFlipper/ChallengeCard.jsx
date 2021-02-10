import { CardMedia } from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';
import challengeFront from '../../assets/logosandpics/challenge.jpg';
import challengeBack1 from '../../assets/logosandpics/cha1.jpg'
import challengeBack2 from '../../assets/logosandpics/cha2.jpg'
import challengeBack3 from '../../assets/logosandpics/cha3.jpg'
import ReactCardFlip from 'react-card-flip';

const ChallengeCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardArr = [
    challengeBack1,
    challengeBack2,
    challengeBack3
  ]

  const getRandomCard = () => {
    const item = cardArr[Math.floor(Math.random() * 3)]
    console.log('item', item)
    return item
  }

  const classes = useStyles();

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
        src={challengeFront}
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

export default ChallengeCard;
