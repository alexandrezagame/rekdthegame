import { makeStyles } from '@material-ui/core/styles';
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
      width: '100%',
      height: '300px',
      marginBottom: '5rem',
    },
  },
}));
