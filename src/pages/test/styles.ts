import { makeStyles } from '@material-ui/core/styles';

export const getAnswerCardStyles = makeStyles({
  root: {
    '& .$MuiFormGroup-root': {
      padding: '0.2rem',
    },

    '& .MuiFormLabel-root': {
      padding: '0.5rem 0',
      color: '#000000',
    },
    '& .MuiFormControlLabel-root': {
      padding: '0 2rem',
      color: 'rgba(0, 0, 0, 0.6)',
    },
    '& .MuiFormHelperText-root': {
      color: 'red',
    },
  },
});

export const getTestPageStyles = makeStyles({
  root: {
    '&.MuiContainer-root': {
      padding: '3rem',
    },
    '& .MuiPaper-root': {
      padding: '2rem',
    },
    '& .MuiTypography-h4': {
      padding: '2rem',
    },
  },
});
