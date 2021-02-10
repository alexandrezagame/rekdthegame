import { CardActionArea } from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';
import specialFront from '../../assets/logosandpics/special.jpg';
import ReactCardFlip from 'react-card-flip';

const SpecialCard = () => {
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
        src={specialFront}
        alt=""
      />
      </div>

<div className={classes.card}>
      <img
        className={classes.card}
        onClick={handleClick}
        src={specialFront}
        alt=""
      />
       </div>
    </ReactCardFlip>
  );
};

export default SpecialCard;
