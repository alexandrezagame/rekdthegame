import React from 'react';
import useStyles from './styles';
import { Button } from '@material-ui/core';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <article className={classes.contactForm}>
        <h3>Wanna submit a card idea?</h3>
        <p>
          We believe you are smarter than you look and got plenty of ideas to
          share in that messed up head of yours.
        </p>
        <p>
          Agaist our lawyer's advice we will let you decide what we should write
          on the next cards we print!
        </p>
        <form action="https://formspree.io/f/mjvpznza" method="POST">
          <div className={classes.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className={classes.formControl}
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              className={classes.formControl}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="card title and description"
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
