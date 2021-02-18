import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import video from '../../assets/video/promovideo.mp4';
import useStyles from './styles';

const Video = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.carouselTitle}>
        <Typography>
          <h2>A game by savages for savages</h2>
        </Typography>
      </div>
      <Container className={classes.videoContainer}>
        <div className={classes.videoWrapper}>
          <ReactPlayer
            className={classes.video}
            url={video}
            playing={true}
            loop={true}
            width="100%"
            height="auto"
            controls={true}
            alt="video"
            volume={0.1}
          />
        </div>
      </Container>
    </div>
  );
};

export default Video;
