import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { getHomePageStyles } from './styles';
import { AuthorizedCard } from './authorized-card';
import AuthorizationCard from './authorization-card';
import useAccountService from '../../utils/use-account-service';

const HomePage: FC = () => {
  const styles = getHomePageStyles();

  const accountService = useAccountService();

  return (
    <Grid container alignItems='center' justify='center' className={styles.root}>
      {accountService.isAuthorized() ? <AuthorizedCard /> : <AuthorizationCard />}
    </Grid>
  );
};

export default HomePage;
