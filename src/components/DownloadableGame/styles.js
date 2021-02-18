import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../assets/cursor/xp-middle-finger.cur';
export default makeStyles(() => ({
  downloadContainer: {
    marginTop: '2rem',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    padding: '1rem',
  },
  downloadLink: {
    textDecoration: 'none',
    color: 'red',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FBFBFB',
    },
  },
  downloadButton: {
    marginTop: '1rem',
    backgroundColor: 'white',
    color: 'red',
    '&:hover': {
      cursor: `url(${fuCursor}), pointer`,
      backgroundColor: '#FBFBFB',
    },
  },
}));
