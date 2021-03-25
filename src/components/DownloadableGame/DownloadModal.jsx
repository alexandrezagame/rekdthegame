import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import pdf from '../../assets/pdf/rekdpdf.pdf';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import FileSaver from 'file-saver';
import validator from 'email-validator';

const DownloadModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function SubmitButton() {
    if (name && email && validator.validate(email)) {
      return (
        <Button
          onClick={saveFile}
          variant="contained"
          type="submit"
          target="_blank"
          style={{
            backgroundColor: 'white',
            // color: '#C40607',
            textDecoration: 'none',
            marginTop: '1rem',
          }}
        >
          Download
        </Button>
      );
    } else {
      return (
        <Button
          onClick={saveFile}
          variant="contained"
          type="submit"
          disabled
          target="_blank"
          style={{
            backgroundColor: 'white',
            // color: '#C40607',
            textDecoration: 'none',
            marginTop: '1rem',
          }}
        >
          Download
        </Button>
      );
    }
  }

  const saveFile = () => {
    FileSaver.saveAs(
      // process.env.REACT_APP_CLIENT_URL + "/resources/cv.pdf",
      pdf,
      'rekdpdf.pdf'
    );
  };

  return (
    <Popup
      trigger={
        <Button
          className="button"
          variant="contained"
          size="large"
          style={{
            backgroundColor: 'white',
            marginTop: '1rem',
            color: '#c40607',
          }}
        >
          Download
        </Button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Download Rekd </div>
          <div className="content">
            <form action="https://formspree.io/f/xayawdpo" method="POST">
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                  style={{ width: '200px', textAlign: 'center' }}
                />
                <br></br>
                <br></br>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your Email"
                  style={{ width: '200px', textAlign: 'center' }}
                />
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default DownloadModal;
