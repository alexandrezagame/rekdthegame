import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  product: {
    maxWidth: '80vw',
    marginTop: '2rem',
    margin: '0 auto',
    backgroundColor: 'white',
    '@media (max-width: 780px)': {
      maxWidth: '90vw',
    },
  },
  productCard: {
    display: 'flex',
    '@media (max-width: 780px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  productCardImage: {
    height: 'auto',
    width: '50%',
    '@media (max-width: 780px)': {
      width: '100%',
    },
  },
  productContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  productButtons: {
    margin: '0 auto',
  },
}));
