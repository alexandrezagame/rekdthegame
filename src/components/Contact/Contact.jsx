import React from 'react';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <article className={classes.contactForm}>
        <h3>get in touch</h3>
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
          <button type="submit" className={classes.submitButton}>
            submit
          </button>
        </form>
      </article>
    </div>
  );
};

export default Contact;
