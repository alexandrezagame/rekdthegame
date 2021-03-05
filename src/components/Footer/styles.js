import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  footerContainer: {
    minWidth: '100%',
    backgroundColor: '#ffffff',
  },
  contactInfo: {
    color: 'black',
    fontWeight: 'bold',
    padding: '1rem 0',
    margin: '0',
    textAlign: 'center',
  },
  footerCopyright: {
    color: 'black',
    padding: '1rem 0',
    margin: '0',
    textAlign: 'center',
  },
  skullButton: {
    height: 'auto',
    width: 'auto',
    color: '#C40607',
    '@media (max-width: 780px)': {
      height: '20px',
    },
  },
}));
