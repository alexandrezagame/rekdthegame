import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FBFBFB',
    display: 'flex',
    justifyContent: 'space-between',
  },

  logoDiv: {
    position: 'fixed',
    left: '50%',
    transform: 'translate(-50%)',
  },
  image: {
    height: '70px',
    width: 'auto',
    // height: '70px',
    // width: 'auto',
  },
  socialmediabutton: {
    // position: 'fixed',
    // top: '25px',
    textDecoration: 'none',
    color: 'red',
  },
  buttonCart: {
    // position: 'fixed',
    // right: '0',
    // marginRight: '20px',
    // top: '15px',
    // height: '150px',
  },
}));
