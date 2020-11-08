import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Routes } from '../../common/routes';

const AuthorizationCard: FC = () => (
  <Paper elevation={3}>
    <Typography align='center'>You should to Login that to start test</Typography>
    <Box paddingTop='50px' width='300px' display='flex' justifyContent='space-around'>
      <Link to={Routes.Login}>
        <Button variant='contained' color='primary'>
          Login
        </Button>
      </Link>
    </Box>
  </Paper>
);

export default AuthorizationCard;
