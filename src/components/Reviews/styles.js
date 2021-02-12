import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  carouselContainer: {
    display: 'flex',
    maxWidth: '100vw',
    margin: '0 auto',
    '@media (max-width: 780px)': {
      flexWrap: 'wrap',
    },
    marginTop: '2rem',
  },
  carouselImage: {
    height: '50vh',
    width: '100%',
    margin: '0 auto',
    '@media (max-width: 780px)': {
      height: '30vh',
      width: 'auto',
    },
  },
  carousel: {
    width: '30%',
    margin: '0 auto',
    '@media (max-width: 780px)': {
      height: '30vh',
      width: 'auto',
      margin: '0 auto',
      marginTop: '0.5rem',
    },
  },
}));
