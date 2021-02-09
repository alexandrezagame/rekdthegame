import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  bannerContainer: {
    maxWidth: '100vw',
    margin: '0 auto',
    padding: '0',
    backgroundColor: '#FBFBFB',
    '@media (max-width: 780px)': {
      maxWidth: '90vw',
      flexWrap: 'wrap',
    },
  },

  bannerImage: {
    height: '50vh',
    padding: '0',
    width: 'auto',
    margin: '0 auto',
    backgroundColor: 'transparent',

    '@media (max-width: 780px)': {
      height: '100vh',
    },
  },
}));
