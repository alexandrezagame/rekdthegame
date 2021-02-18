import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  heroContainer: {
    padding: '0 1rem 1rem 1rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100vw',
    margin: '0 auto',
    flexWrap: 'nowrap',
    '@media (max-width: 780px)': {
      maxWidth: '90vw',
      flexWrap: 'wrap',
    },
  },
  carouselTitle: {
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '4rem',
    textTransform: 'uppercase',
    padding: '1rem',
    '@media (max-width: 780px)': {
      padding: '2rem',
    },
  },
  product: {
    maxWidth: '28%',
    marginTop: '2rem',
    margin: '0 auto',
    '@media (max-width: 780px)': {
      maxWidth: '100%',
    },
  },
  productCardImage: {
    height: '30vh',
  },
  productContent: {
    padding: '0.5rem',
    textAlign: 'justify',
  },
}));
