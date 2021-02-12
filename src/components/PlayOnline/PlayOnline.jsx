import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import pdf from '../../assets/pdf/rekdpdf.pdf';
import gameImage from '../../assets/logosandpics/game.JPG';

const PlayOnline = () => {
  const classes = useStyles();

  return (
    <Container className={classes.downloadContainer}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={gameImage} alt="gameboard" />
      </div>
      <div className={classes.textContainer}>
        <Typography>
          <h1 className={classes.downloadTitle}>PLAY ONLINE</h1>
          <p className={classes.downloadContent}>
            Try our online version, with up to 6 players online from different
            computers! Get a Zoom or Skype meeting going and turn your sofa into
            a virtual party!
          </p>
        </Typography>

        <Button
          className={classes.downloadButton}
          variant="contained"
          color="secondary"
        >
          <Link
            className={classes.downloadLink}
            to={{pathname: 'http://lets-rekd.herokuapp.com/#/'}}
            target="_blank"
          >
            PLAY ONLINE
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default PlayOnline;
