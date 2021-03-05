import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  videoContainer: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  videoWrapper: {
    margin: '0 200px',
    position: 'relative',
    '@media(max-width: 780px)': {
      margin: '0 auto',
    },
  },
  carouselTitle: {
    textAlign: 'center',
    backgroundColor: '#C40607',
    color: 'white',
    fontSize: '4rem',
    textTransform: 'uppercase',
    padding: '1rem',
    '@media (max-width: 780px)': {
      padding: '2rem',
    },
  },
}));
