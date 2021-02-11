import React from 'react';
import { Container, CardMedia } from '@material-ui/core';
import ReactPlayer from 'react-player';
import video from '../../assets/video/promovideo.mp4';
import useStyles from './styles';

const Video = () => {
  const classes = useStyles();
  return (
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
          volume={0}
        />
      </div>
    </Container>
  );
};

export default Video;
