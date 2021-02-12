import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  downloadContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5rem',
    marginRight: '5rem',
    '@media (max-width: 780px)': {
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginLeft: '0',
      marginRight: '0',
    },
  },
  textContainer: {
    width: '50%',
    textAlign: 'center',
    '@media (max-width: 780px)': {
      width: '100%',
    },
  },
  downloadTitle: {
    marginBottom: '1rem',
  },
  downloadContent: {
    marginBottom: '1rem',
  },
  downloadLink: {
    textDecoration: 'none',
    color: 'white',
  },
  image: {
    width: '400px',
    height: '400px',
    '@media (max-width: 780px)': {
      width: '100%',
      height: 'auto',
    },
  },
  imageContainer: {
    width: '50%',
    textAlign: 'center',
    '@media (max-width: 780px)': {
      width: '100%',
    },
  },
}));
