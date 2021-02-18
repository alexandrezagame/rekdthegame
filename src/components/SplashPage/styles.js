import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../assets/cursor/xp-middle-finger.cur';

export default makeStyles((theme) => ({
  splashContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  splashLogo: {
    height: '50px',
    width: '200px',
    border: 'none',
    cursor: `url(${fuCursor}), pointer`,
    marginTop: '0.5rem',
    marginBottom: '2rem',
    '@media (max-width: 780px)': {
      height: 'auto',
      width: '100%',
    },
  },
  splashText: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  splashButton: {
    width: 'auto',
    marginTop: '2rem',
    fontSize: '2rem',
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FE654F',
    },
    cursor: `url(${fuCursor}), pointer`,
    '@media (max-width: 780px)': {
      marginBottom: '2rem',
    },
  },
}));
