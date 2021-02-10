import { CardActionArea } from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';
import punishmentFront from '../../assets/logosandpics/punishment.jpg';
import ReactCardFlip from 'react-card-flip';

const PunishmentCard = () => {
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
          src={punishmentFront}
          alt=""
        />
      </div>

      <div className={classes.card}>
        <img
          className={classes.card}
          onClick={handleClick}
          src={punishmentFront}
          alt=""
        />
      </div>
    </ReactCardFlip>
  );
};

export default PunishmentCard;
