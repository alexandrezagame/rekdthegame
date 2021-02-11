import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  videoContainer: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
  },
  videoWrapper: {
    margin: '0 200px',
    position: 'relative',
    '@media(max-width: 780px)': {
      margin: '0 auto',
    },
  },
}));
