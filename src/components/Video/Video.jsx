import React from 'react';
import { Container, CardMedia } from '@material-ui/core';
import ReactPlayer from 'react-player';
import video from '../../assets/video/video.mp4';
import useStyles from './styles';

const Video = () => {
  const classes = useStyles();
  return (
    <Container className={classes.videoContainer}>
      <div className={classes.videoWrapper}>
        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          controls={true}
          alt="video"
        />
      </div>
    </Container>
  );
};

export default Video;
