import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: '2rem',
    backgroundColor: '#D10000',
    height: '100vh',
  },
  productInfoContainer: {
    display: 'flex',
    '@media (max-width: 780px)': {
      flexWrap: 'wrap',
    },
  },
  productInfo: {
    width: '50%',
    height: '100vh',
    '@media (max-width: 780px)': {
      width: '100%',
    },
  },

  productImageContainer: {
    height: '100vh',
    position: 'relative',
    padding: '1rem',
    width: '50%',
    '@media (max-width: 780px)': {
      width: '100%',
    },
  },
  productImage: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '600px',
    width: '600px',
  },
}));
