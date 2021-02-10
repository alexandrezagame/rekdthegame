import { CardMedia } from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';
import challengeFront from '../../assets/logosandpics/challenge.jpg';
import ReactCardFlip from 'react-card-flip';

const ChallengeCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
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
        src={challengeFront}
        alt=""
      />
      </div>
    </ReactCardFlip>
  );
};

export default ChallengeCard;
