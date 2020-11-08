import { makeStyles } from '@material-ui/core/styles';

export const getHomePageStyles = makeStyles({
  root: {
    height: '100%',
    flexDirection: 'column',

    '& .MuiButtonBase-root': {
      padding: '0.5rem 1rem',
      width: '100%',
    },
    '& .MuiPaper-root': {
      padding: '3rem 4rem',
    },
  },
});
