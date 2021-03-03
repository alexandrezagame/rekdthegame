import React from 'react';
import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.carouselTitle}>
        <Typography>
          <h2>Wanna submit a card idea?</h2>
        </Typography>
      </div>
      <div className={classes.contactContainer}>
        <article className={classes.contactForm}>
          <div className={classes.contactDescription}>
            <p>
              We believe you are smarter than you look and got plenty of ideas
              to share in that messed up head of yours. Against our lawyer's
              advice we will let you decide what we should write on the next
              cards we print!
            </p>
            <br></br>
            <h4>If you are funny enough of course...</h4>
          </div>
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
              <div className={classes.formControlCard}>
                <textarea
                  name="message"
                  maxlength="20"
                  placeholder="Challenge/Special Punishment"
                  className={classes.formControl}
                ></textarea>
                <textarea
                  name="message"
                  maxlength="30"
                  placeholder="Title"
                  className={classes.formControl}
                ></textarea>
                <textarea
                  name="message"
                  maxlength="120"
                  placeholder="Description"
                  className={classes.formControlDescription}
                ></textarea>
              </div>
            </div>
            <Button
              variant="contained"
              type="submit"
              className={classes.submitButton}
            >
              submit
            </Button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default Contact;
