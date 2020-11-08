import { makeStyles } from '@material-ui/core/styles';

export const getResultPageStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& .MuiPaper-root': {
      padding: '3rem',
    },
    '& .MuiTypography-root': {
      padding: '1rem 0',
    },
    '& .MuiBox-root': {
      display: 'flex',
      gap: '2rem',
    },
  },
});
