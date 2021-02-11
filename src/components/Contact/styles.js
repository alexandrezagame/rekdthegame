import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  contactContainer: {
    display: 'grid',
    placeItems: 'center',
    padding: '5rem 0',
  },
  contactForm: {
    background: 'white',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    width: '90vw',
    maxWidth: '35rem',
  },
  formGroup: {
    padding: '1rem 1.5rem',
  },
  formControl: {
    display: 'block',
    width: '100%',
    padding: '0.75rem 1rem',
    border: 'none',
    marginBottom: '1.25rem',
    marginRight: '0',
    background: 'lightgrey',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
  },
  //   formControl: {
  //     '&::placeholder': {
  //       color: 'grey ',
  //       textTransform: 'uppercase',
  //       letterSpacing: '0.2rem',
  //     },
  //   },
  submitBtn: {
    display: 'block',
    width: '100%',
    padding: '1rem',
    borderBottomLeftRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
}));

// .contact-form {
//     background: var(--clr-white);
//     border-radius: var(--radius);
//     text-align: center;
//     box-shadow: var(--light-shadow);
//     transition: var(--transition);
//     width: 90vw;
//     max-width: 35rem;
//   }
//   .contact-form:hover {
//     box-shadow: var(--dark-shadow);
//   }
//   .contact-form h3 {
//     padding-top: 1.25rem;
//     color: var(--clr-grey-5);
//   }
//   .form-group {
//     padding: 1rem 1.5rem;
//   }
//   .form-control {
//     display: block;
//     width: 100%;
//     padding: 0.75rem 1rem;
//     border: none;
//     margin-bottom: 1.25rem;
//     background: var(--clr-grey-10);
//     border-radius: var(--radius);
//     text-transform: uppercase;
//     letter-spacing: var(--spacing);
//   }
//   .form-control::placeholder {
//     font-family: var(--ff-primary);
//     color: var(--clr-grey-1);
//     text-transform: uppercase;
//     letter-spacing: var(--spacing);
//   }
//   .submit-btn {
//     display: block;
//     width: 100%;
//     padding: 1rem;
//     border-bottom-left-radius: var(--radius);
//     border-bottom-right-radius: var(--radius);
//     border-top-right-radius: 0;
//     border-top-left-radius: 0;
//   }
