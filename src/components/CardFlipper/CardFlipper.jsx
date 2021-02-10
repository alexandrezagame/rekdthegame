import { Container, CardActionArea } from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';

import ChallengeCard from './ChallengeCard';
import PunishmentCard from './PunishmentCard';
import SpecialCard from './SpecialCard';

const CardFlipper = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardsContainer}>
      <ChallengeCard />
      <PunishmentCard />
      <SpecialCard />
    </Container>
  );
};

export default CardFlipper;
