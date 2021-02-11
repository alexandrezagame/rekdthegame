import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import pdf from '../../assets/pdf/rekdpdf.pdf';

const DownloadableGame = () => {
  return (
    <Container>
      <h1>HEY</h1>
      <p></p>
      <Button>
        {' '}
        <Link to={pdf} target="_blank" download>
          Download
        </Link>
      </Button>
    </Container>
  );
};

export default DownloadableGame;
