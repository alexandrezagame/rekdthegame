import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  bannerContainer: {
    maxWidth: '100vw',
    margin: '0 auto',
    padding: '0',
    backgroundColor: '#FBFBFB',
    '@media (max-width: 780px)': {
      maxWidth: '100vw',
      flexWrap: 'wrap',
    },
  },

  bannerImage: {
    height: '20vh',
    padding: '0',
    width: '20vw',
    margin: '0 auto',
    backgroundColor: 'transparent',

    '@media (max-width: 780px)': {
      width: '100vw',
      height: '20vh',
    },
  },
}));
