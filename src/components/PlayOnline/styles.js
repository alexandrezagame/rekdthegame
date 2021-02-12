import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  downloadContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5rem',
    marginRight: '5rem'
  },
  textContainer: {
      width: '50%'
  },
  downloadLink: {
    textDecoration: 'none',
    color: 'white',
  },
  image: {
      width: '400px',
      height: '400px',
  },
  imageContainer: {
width: '50%'
  }
}));
