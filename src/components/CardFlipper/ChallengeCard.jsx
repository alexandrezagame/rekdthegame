import useStyles from './styles';
import React, { useState } from 'react';
import challengeFront from '../../assets/logosandpics/challenge.jpg';
import challengeBack1 from '../../assets/logosandpics/cha1.jpg';
import challengeBack2 from '../../assets/logosandpics/cha2.jpg';
import challengeBack3 from '../../assets/logosandpics/cha3.jpg';
import challengeBack4 from '../../assets/logosandpics/cha4.jpg';
import challengeBack5 from '../../assets/logosandpics/cha5.jpg';
import challengeBack6 from '../../assets/logosandpics/cha6.jpg';
import challengeBack7 from '../../assets/logosandpics/cha7.jpg';
import challengeBack8 from '../../assets/logosandpics/cha8.jpg';
import challengeBack9 from '../../assets/logosandpics/cha9.jpg';
import challengeBack10 from '../../assets/logosandpics/cha10.jpg';
import ReactCardFlip from 'react-card-flip';

const ChallengeCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardArr = [
    challengeBack1,
    challengeBack2,
    challengeBack3,
    challengeBack4,
    challengeBack5,
    challengeBack6,
    challengeBack7,
    challengeBack8,
    challengeBack9,
    challengeBack10,
  ];

  const getRandomCard = () => {
    const item = cardArr[Math.floor(Math.random() * 10)];
    console.log('item', item);
    return item;
  };

  const classes = useStyles();

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
