import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { getLoginPageStyles } from './styles';
import { Routes } from '../../common/routes';
import { ILoginFormData } from '../../common/types';
import useAccountService from '../../utils/use-account-service';

const LoginPage: FC = () => {
  const styles = getLoginPageStyles();
  const { handleSubmit, errors, control } = useForm();

  const accountService = useAccountService();
  const { replace } = useHistory();

  const onSubmit = (data: ILoginFormData): void => {
    accountService.setProfile(data);
    replace(Routes.Home);
  };

  return (
    <Grid className={styles.root}>
      <Card>
        <Grid container>
          <Grid container justify='center'>
            <Typography align='center'>Sign In</Typography>
          </Grid>
          <Grid container>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction='column' spacing={4}>
                <Grid item md={12}>
                  <Controller
                    as={TextField}
                    name='lastName'
                    fullWidth
                    id='standard-basic'
                    label='Last name'
                    control={control}
                    helperText={errors?.lastName?.type}
                    error={!!errors.lastName}
                    rules={{ required: true }}
                  />
                </Grid>
                <Grid item>
                  <Controller
                    name='numberOfGroup'
                    as={TextField}
                    fullWidth
                    id='standard-basic'
                    label='Number of Group'
                    control={control}
                    helperText={errors?.numberOfGroup?.type}
                    error={!!errors.numberOfGroup}
                    rules={{ required: true }}
                  />
                </Grid>
                <Grid item container justify='center'>
                  <Button variant='contained' color='primary' type='submit'>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default LoginPage;
