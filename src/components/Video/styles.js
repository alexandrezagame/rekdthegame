import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  videoContainer: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    // '@media(max-width: 780px)': {
    //   width: '100%',
    //   height: 'auto',
    // },
  },
  videoWrapper: {
    margin: '0 200px',
    position: 'relative',
    // paddingTop: '56.25%',
    '@media(max-width: 780px)': {
      margin: '0 auto',
    },
    video: {
      //   position: 'absolute',
      //   top: '0',
      //   left: '0',
      //   '@media(max-width: 780px)': {
      //     width: '200px',
      //     height: 'auto',
      //   },
    },
  },
}));
