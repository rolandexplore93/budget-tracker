import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: '20px 0',
  },
  expenseTracker: {
    borderBottom: '10px solid rgba(0, 0, 139, 0.8)',
    borderTop: '10px solid rgba(0, 0, 139, 0.8)'
  }
}));