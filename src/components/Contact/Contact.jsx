import React from 'react';
import useStyles from './styles';
import { Button } from '@material-ui/core';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <article className={classes.contactForm}>
        <h3>Wanna Talk?</h3>
        <p>We believe talking leads to lawsuits, and we’d really rather not.</p>
        <p>
          But our lawyer insists we need to give “customer service” or whatever,
          so…
        </p>
        <form action="https://formspree.io/f/mjvpznza" method="POST">
          <div className={classes.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="name"
              className={classes.formControl}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className={classes.formControl}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className={classes.formControl}
            ></textarea>
          </div>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            className={classes.submitButton}
          >
            submit
          </Button>
        </form>
      </article>
    </div>
  );
};

export default Contact;
