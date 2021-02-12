import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  footerContainer: {
    minWidth: '100%',
    backgroundColor: 'grey',
    '@media (max-width: 780px)': {
      margin: '2rem 0 0 0',
    },
  },
  contactInfo: {
    color: 'white',
    padding: '1rem 0',
    margin: '0',
    textAlign: 'center',
  },
  footerCopyright: {
    color: 'white',
    padding: '1rem 0',
    margin: '0',
    textAlign: 'center',
  },
}));
