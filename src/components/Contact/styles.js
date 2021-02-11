import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    // padding: '5rem 0',
  },
  contactForm: {
    background: 'white',
    borderRadius: '20px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    width: '50vw',
    margin: '0',
    '@media (max-width: 780px)': {
      width: '100%',
      margin: '2rem 0.5rem',
    },
    // maxWidth: '35rem',
  },
  formGroup: {
    padding: '1rem',
    margin: '0 1rem',
  },
  formControl: {
    width: '100%',
    padding: '0.5rem',
    border: 'none',
    marginBottom: '1.25rem',
    background: 'lightgrey',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    resize: 'none',
  },
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
