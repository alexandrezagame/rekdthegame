import React from 'react';
import useStyles from './styles';
import { Button, Typography, Paper, Container } from '@material-ui/core';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <div className={classes.carouselTitle}>
        <Typography>
          <h2>Register to our Newsletter</h2>
        </Typography>
      </div> */}
      <Container className={classes.contactContainer}>
        <article className={classes.contactForm}>
          <div className={classes.contactDescription}>
            <h4>Register to our Newsletter</h4>
            <p>
              Don't tempt us, we will email you once or twice a day until you
              file a restraining order against us.
            </p>
            <br></br>
          </div>
          <form action="https://formspree.io/f/mnqoedyy" method="POST">
            <div className={classes.formGroup}>
              {/* <input
                type="text"
                name="name"
                placeholder="your name"
                className={classes.formControl}
              /> */}
              <input
                type="email"
                name="email"
                placeholder="your email"
                className={classes.formControl}
                style={{ width: '250px' }}
              />
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
      </Container>
    </div>
  );
};

export default Contact;
