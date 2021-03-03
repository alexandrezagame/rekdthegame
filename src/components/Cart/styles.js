import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  zone: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '3rem',
    // marginBottom: '5rem',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
    // marginBottom: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '3%',
    width: '100%',
    height: 'auto',
    justifyContent: 'space-around',
  },
  emptyCartImage: {
    width: '30vw',
    marginBottom: '1rem',
    height: 'auto',
    '@media (max-width: 780px)': {
      width: '100vw',
    },
  },
}));
