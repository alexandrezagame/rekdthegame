import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginTop: '5rem',
    flexGrow: 1,
    backgroundColor: 'white',
    padding: '0 24px 24px 24px',
  },
  root: {
    flexGrow: 1,
  },
}));
