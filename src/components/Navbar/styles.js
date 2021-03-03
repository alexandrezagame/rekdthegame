import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../assets/cursor/xp-middle-finger.cur';

export default makeStyles(() => ({
  appBar: {
    backgroundColor: '#FBFBFB',
    display: 'flex',
    justifyContent: 'space-between',
  },

  logoDiv: {
    position: 'fixed',
    left: '50%',
    transform: 'translate(-50%)',
  },
  image: {
    height: '70px',
    width: 'auto',
  },

  buttonBuy: {
    backgroundColor: '#C40607',
    color: 'white',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FE654F',
    },
    '@media (max-width: 780px)': {
      fontSize: '0.6rem',
      width: 'auto',
    },
  },
}));
