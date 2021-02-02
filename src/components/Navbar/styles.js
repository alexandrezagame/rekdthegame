import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'red',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  image: {
    height: '70px',
    width: 'auto',
  },
  button: {
    position: 'fixed',
    top: '15px',
  },
  buttonCart: {
    position: 'fixed',
    right: '0',
    marginRight: '20px',
    top: '15px',
    height: '150px',
  },
}));
