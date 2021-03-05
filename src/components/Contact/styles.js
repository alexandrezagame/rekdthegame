import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../assets/cursor/xp-middle-finger.cur';

export default makeStyles(() => ({
  contactContainer: {
    // display: 'flex',
    width: '50%',
    // flexDirection: 'column',
    // alignItems: 'center',
    // marginTop: '2rem',
    // marginBottom: '2rem',
    margin: '1rem auto',
    '@media (max-width: 780px)': {
      width: '100%',
      // margin: '2rem 0.5rem',
    },
  },
  contactForm: {
    background: 'white',
    borderRadius: '20px',
    padding: '1rem',
    textAlign: 'center',
    // boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    width: '50vw',
    margin: '0',
    '@media (max-width: 780px)': {
      width: '100%',
      margin: '2rem 0.5rem',
    },
    // maxWidth: '35rem',
  },
  contactDescription: {
    margin: '0 50px',
    fontSize: '1.2rem',
    fontFamily: 'Nunito Sans, sans-serif',
  },
  formGroup: {
    padding: '1rem',
    margin: '0 1rem',
  },
  formControl: {
    width: '100%',
    padding: '0.5rem',
    background: 'white',
    border: '1px solid lightgrey',
    textAlign: 'center',
    marginBottom: '1.25rem',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    resize: 'none',
  },
  carouselTitle: {
    textAlign: 'center',
    backgroundColor: '#C40607',
    color: 'white',
    fontSize: '4rem',
    textTransform: 'uppercase',
    padding: '1rem',
    '@media (max-width: 780px)': {
      padding: '2rem',
    },
  },
  formControlDescription: {
    width: '100%',
    height: '130px',
    padding: '0.5rem',

    marginBottom: '1.25rem',
    background: 'white',
    border: '1px solid lightgrey',
    textAlign: 'center',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    resize: 'none',
  },
  formControlCard: {
    background: 'white',
    margin: '0 auto',
    border: '5px solid',
    borderRadius: '15px',
    height: '350px',
    width: '250px',
    padding: '15px',
    fontFamily: 'RocknRoll One, sans-serif',
  },
  submitButton: {
    padding: '1rem',
    backgroundColor: '#C40607',
    color: 'white',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FE654F',
    },
  },
}));
