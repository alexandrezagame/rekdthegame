import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
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
        <Paper
          elevation={3}
          style={{ padding: '0.3rem', backgroundColor: '#C40607' }}
          className={classes.videoWrapper}
        >
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
        </Paper>
      </Container>
    </div>
  );
};

export default Video;
