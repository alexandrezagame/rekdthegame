import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../../assets/cursor/xp-middle-finger.cur';

export default makeStyles((theme) => ({
  product: {
    maxWidth: '90vw',
    marginTop: '2rem',
    margin: '0 auto',
    backgroundColor: '#C40607',
    color: 'white',
    '@media (max-width: 780px)': {
      maxWidth: '100vw',
      maring: '0',
    },
  },
  productCard: {
    display: 'flex',
    color: 'white',
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
    borderRadius: '5px 0 0 5px',
    '@media (max-width: 780px)': {
      width: '100%',
      borderRadius: '5px 5px 0 0',
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
    backgroundColor: 'white',
    color: '#C40607',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FE654F',
    },
  },
}));
