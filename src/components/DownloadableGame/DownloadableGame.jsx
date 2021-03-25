import React from 'react';
import './modal.css';
import { Container, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import DownloadModal from './DownloadModal';

const DownloadableGame = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.downloadContainer}>
        <Typography>
          <h1 className={classes.downloadTitle}>DOWNLOAD THE GAME FOR FREE</h1>
          <p className={classes.downloadContent}>
            If you’re too cheap to buy the game or too broke to pay for
            internet, you can download it for free and live the Chinese
            sweatshop experience by cutting all 150 cards by hand!
          </p>
        </Typography>

        {/* <Button className={classes.downloadButton} variant="contained"> */}
        <DownloadModal />
        {/* </Button> */}
      </Container>
    </>
  );
};

export default DownloadableGame;
