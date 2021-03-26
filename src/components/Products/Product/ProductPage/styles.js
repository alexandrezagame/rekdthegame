import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../../../assets/cursor/xp-middle-finger.cur';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: '2rem',
    marginBottom: '2rem',
    backgroundColor: 'white',
    height: '100vh',
    '@media (max-width: 780px)': {
      // paddingBottom: '2rem',
    },
  },
  productInfoContainer: {
    display: 'flex',
    marginBottom: '1rem',
    '@media (max-width: 780px)': {
      flexWrap: 'wrap',
    },
  },
  productInfo: {
    width: '50%',
    height: 'auto',
    color: 'grey',
    marginTop: '3rem',
    textAlign: 'center',
    padding: '1rem',
    '&& h2': {
      color: '#C40607',
    },
    '@media (max-width: 780px)': {
      width: '100%',
      height: 'auto',
      margin: '0 1rem',
      marginTop: '1rem',
    },
  },
  productParts: {
    marginBottom: '1rem',
    fontFamily: 'Nunito Sans, sans-serif',
  },
  productButton: {
    marginBottom: '1rem',
    backgroundColor: '#C40607',
    color: 'white',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FE654F',
    },
  },

  productImageContainer: {
    height: 'auto',
    position: 'relative',
    padding: '1rem',
    width: '50%',
    '@media (max-width: 780px)': {
      width: '100%',
      height: '300px',
      marginLeft: '1rem',
      marginRight: '1rem',
      marginBottom: '5rem',
    },
  },
  productImage: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '600px',
    width: '600px',
    '@media (max-width: 780px)': {
      width: '100vw',
      height: 'auto',
      marginBottom: '5rem',
      marginTop: '1rem',
    },
  },
  productImageUsContainer: {
    height: 'auto',
    position: 'relative',
    padding: '1rem',
    width: '50%',
    '@media (max-width: 780px)': {
      width: '100%',
      height: '20vh',
      padding: '0',
    },
  },
  carouselTitle: {
    textAlign: 'center',
    backgroundColor: '#C40607',
    color: 'white',
    fontSize: '4rem',
    textTransform: 'uppercase',
    padding: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  productImageUS: {
    width: '60%',
    height: 'auto',
    position: 'absolute',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '@media (max-width: 780px)': {
    width: '300px',
    height: 'auto',
    left: '48%',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
}));
