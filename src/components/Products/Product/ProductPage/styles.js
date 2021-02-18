import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../../../assets/cursor/xp-middle-finger.cur';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: '2rem',
    backgroundColor: '#fbfbfb',
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
      color: 'red',
    },
    '@media (max-width: 780px)': {
      width: '100%',
      height: 'auto',
      margin: '0 1rem',
      marginTop: '0',
    },
  },
  productParts: {
    marginBottom: '1rem',
  },
  productButton: {
    marginBottom: '1rem',
    backgroundColor: 'red',
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
  productImageUsContainer: {
    height: 'auto',
    position: 'relative',
    padding: '1rem',
    width: '50%',
    '@media (max-width: 780px)': {
      width: '100%',
      height: 'auto',
      padding: '0',
      marginBottom: '1rem',
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
    },
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
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
  },
}));
