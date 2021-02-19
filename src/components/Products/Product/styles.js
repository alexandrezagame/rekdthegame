import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../../assets/cursor/xp-middle-finger.cur';

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
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
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
    textAlign: 'center',
  },
  productButtons: {
    margin: '0 auto',
  },
  productButton: {
    backgroundColor: '#C40607',
    color: 'white',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FE654F',
    },
  },
}));
