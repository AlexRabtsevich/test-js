import { makeStyles } from '@material-ui/core/styles';

export const getAppStyles = makeStyles({
  root: {
    height: '100%',
    background:
      'linear-gradient(90deg, rgba(24,22,54,1) 0%, rgba(161,198,222,1) 0%, rgba(187,230,232,1) 100%)',

    '& .MuiContainer-root': {
      height: '100%',
    },
  },
  '@global': {
    'html,body': {
      height: '100%',
      display: 'grid',

      '& > #root': {
        height: '100%',
      },
      '& a': {
        textDecoration: 'none',
      },
    },
  },
});
