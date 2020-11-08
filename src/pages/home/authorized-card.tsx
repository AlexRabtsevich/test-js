import React, { FC, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { Routes } from '../../common/routes';
import useAccountService from '../../utils/use-account-service';

export const AuthorizedCard: FC = () => {
  const { replace } = useHistory();

  const accountService = useAccountService();
  const profile = accountService.getProfile();

  const onClearProfile = useCallback(() => {
    accountService.clearProfile.call(accountService);
    replace(Routes.Login);
  }, [accountService, replace]);

  const authorizedLabel = `You authorized like ${profile?.lastName}`;

  return (
    <Paper elevation={3}>
      <Box padding='0 0 3rem'>
        <Typography align='center'>{authorizedLabel} </Typography>
      </Box>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Button variant='outlined' color='secondary' onClick={onClearProfile}>
            Sign Out
          </Button>
        </Grid>
        <Grid item>
          <Link to={Routes.Testing}>
            <Button variant='contained' color='primary'>
              Start Test
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};
