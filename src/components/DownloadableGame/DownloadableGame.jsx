import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import pdf from '../../assets/pdf/rekdpdf.pdf';

const DownloadableGame = () => {
  const classes = useStyles();

  return (
    <Container className={classes.downloadContainer}>
      <Typography>
        <h1 className={classes.downloadTitle}>DOWNLOAD THE GAME FOR FREE</h1>
        <p className={classes.downloadContent}>
          If you’re too cheap to buy the game or too broke to pay for internet,
          you can download it for free and live the Chinese sweatshop experience
          by cutting all 150 cards by hand!
        </p>
      </Typography>

      <Button
        className={classes.downloadButton}
        variant="contained"
        color="secondary"
      >
        <Link
          className={classes.downloadLink}
          to={pdf}
          target="_blank"
          download
        >
          Download pdf
        </Link>
      </Button>
    </Container>
  );
};

export default DownloadableGame;
