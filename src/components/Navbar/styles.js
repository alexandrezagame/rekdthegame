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
    right: '0',
    marginRight: '20px',
  },
}));
