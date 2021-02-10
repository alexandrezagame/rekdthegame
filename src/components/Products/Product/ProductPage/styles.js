import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: '#D10000',
    height: '100vh',
  },
  productInfoContainer: {
    display: 'flex',
  },
  productInfo: {
    width: '50%',
        height: '100vh',

  },

 
  productImageContainer: {
    height: '100vh',
    position: 'relative',
    padding: '1rem',
    width: '50%',
  },
   productImage: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '400px',
  },

}));
