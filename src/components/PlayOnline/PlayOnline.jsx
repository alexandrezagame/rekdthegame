import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import gameImage from '../../assets/logosandpics/game.JPG';
import OnlineModal from './OnlineModal';
import InnerImageZoom from 'react-inner-image-zoom';

const PlayOnline = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.carouselTitle}>
        <Typography>
          <h1>PLAY ONLINE</h1>
        </Typography>
      </div>
      <Container className={classes.downloadContainer}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={gameImage} alt="gameboard" />
        </div>
        <div className={classes.textContainer}>
          <Typography>
            <p className={classes.downloadContent1}>
              FRIENDS CAN’T COME OVER? <br></br>
              COVID GOT YOU ISOLATED? <br></br>
              WE GOT YOU!
            </p>
            <p className={classes.downloadContent}>
              Try our online version, with up to 6 players online from different
              computers! Get a Zoom or Skype meeting going and turn your sofa
              into a virtual party!
            </p>
          </Typography>

          <Button className={classes.downloadButton} variant="contained">
            <Link
              className={classes.downloadLink}
              to={{ pathname: 'http://lets-rekd.herokuapp.com/#/' }}
              target="_blank"
            >
              PLAY ONLINE
            </Link>
            {/* <OnlineModal /> */}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PlayOnline;
