import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  container: {
    maxWidth: '100vw',
    margin: '0 auto',
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'FAFAFA',
    margin: '0 auto',
    marginTop: '2rem',
    marginBottom: '2rem',
    '@media (max-width: 780px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  carouselDiv: {
    width: '30vw',
    // backgroundColor: 'yellow',
    '@media (max-width: 780px)': {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  carousel: {
    width: '100%',
    margin: '0 auto',
    '@media (max-width: 780px)': {
      height: '30vh',
      width: 'auto',
      marginTop: '0.5rem',
    },
  },
  carouselTitle: {
    textAlign: 'center',
    backgroundColor: '#C40607',
    color: 'white',
    fontSize: '4rem',
    textTransform: 'uppercase',
    padding: '1rem',
  },
  carouselImage: {
    height: 'auto',
    width: '100%',
    margin: '0 auto',
    borderRadius: '5px',
    '@media (max-width: 780px)': {
      height: '30vh',
      width: 'auto',
      margin: '0 auto',
    },
  },
}));
