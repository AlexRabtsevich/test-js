import { makeStyles } from '@material-ui/core/styles';

export const getLoginPageStyles = makeStyles({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',

    '& .MuiPaper-root': {
      padding: '2rem',
    },
    '& form': {
      width: '100%',
    },
  },
});
