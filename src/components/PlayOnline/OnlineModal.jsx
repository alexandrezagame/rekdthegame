import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';

import validator from 'email-validator';

const DownloadModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function SubmitButton() {
    if (name && email && validator.validate(email)) {
      return (
        <Button
          onClick={onlineRedirect}
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
          Play Online
        </Button>
      );
    } else {
      return (
        <Button
          onClick={onlineRedirect}
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
          Play Online
        </Button>
      );
    }
  }

  const onlineRedirect = () => {
    <a
      href="http://lets-rekd.herokuapp.com/#/"
      // target="_blank"
      rel="noreferrer"
    >
      Online
    </a>;
  };

  return (
    <Popup
      trigger={
        <Button
          className="button"
          variant="contained"
          size="large"
          style={{
            backgroundColor: '#c40607',
            marginTop: '1rem',
            color: 'white',
          }}
        >
          Play Online
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
          <div className="header"> Play Online </div>
          <div className="content">
            <form action="https://formspree.io/f/xknkwvyy" method="POST">
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
