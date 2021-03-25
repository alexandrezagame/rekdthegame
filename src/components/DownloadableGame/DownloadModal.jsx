import React from 'react';
import Popup from 'reactjs-popup';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import pdf from '../../assets/pdf/rekdpdf.pdf';

const DownloadModal = () => {
  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
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
            <form action="https://formspree.io/f/mjvpznza" method="POST">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  style={{ width: '250px' }}
                />
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  style={{ width: '250px' }}
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: '#C40607',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <Link
                  className="downloadButton"
                  to={pdf}
                  target="_blank"
                  download
                >
                  Download
                </Link>
              </Button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default DownloadModal;
