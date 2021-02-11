import { makeStyles } from '@material-ui/core/styles';
import fuCursor from '../../assets/cursor/xp-middle-finger.cur';

export default makeStyles((theme) => ({
  cardsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'noWrap',
    '@media (max-width: 780px)': {
      flexWrap: 'wrap',
    },
  },
  card: {
    cursor: `url(${fuCursor}), pointer`,
    width: '200px',
    // alignItems: 'center',
    '@media (max-width: 780px)': {
      width: '100%',
      marginBottom: '0.5rem',
    },
  },
}));
