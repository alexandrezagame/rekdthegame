import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
  socialmediabutton: {
    textDecoration: 'none',
    color: 'red',
  },
  buttonBuy: {
    '@media (max-width: 780px)': {
      fontSize: '0.6rem',
      width: 'auto',
    },
  },
}));
