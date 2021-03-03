import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../assets/cursor/xp-middle-finger.cur';

export default makeStyles(() => ({
  downloadContainer: {
    marginTop: '2rem',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '2rem',
    marginRight: '2rem',
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
  downloadTitle: {
    marginBottom: '1rem',
  },
  downloadContent1: {
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  downloadContent: {
    marginBottom: '1rem',
  },
  downloadLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
    },
  },
  downloadButton: {
    backgroundColor: '#C40607',
    color: 'white',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FE654F',
    },
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
