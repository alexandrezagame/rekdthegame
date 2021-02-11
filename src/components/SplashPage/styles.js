import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../assets/cursor/xp-middle-finger.cur';

export default makeStyles((theme) => ({
  splashContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  splashLogo: {
    height: '200px',
    width: '200px',
    cursor: `url(${fuCursor}), pointer`,
  },
  splashButton: {
    width: 'auto',
    marginTop: '2rem',
    fontSize: '2rem',
    cursor: `url(${fuCursor}), pointer`,
  },
}));
