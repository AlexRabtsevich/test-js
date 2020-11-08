import { Button, Container, Typography, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useAccountService from '../../utils/use-account-service';
import { Routes } from '../../common/routes';
import FileService from '../../utils/file-service';
import { getResultPageStyles } from './styles';

const ResultPage: FC = () => {
  const accountService = useAccountService();
  const { replace } = useHistory();

  const result = accountService.getResult();
  const fileService = new FileService();

  const resultTitle = `You answered ${result?.rating}`;

  const onSaveFile = () => {
    fileService.saveResultToFile();
  };

  if (!result) {
    replace(Routes.Home);
  }

  const styles = getResultPageStyles();

  return (
    <Container className={styles.root}>
      <Card>
        <Typography align='center' variant='h5'>
          Result of Test
        </Typography>
        <Typography align='center' variant='subtitle1'>
          {resultTitle}
        </Typography>
        <Box>
          <Button onClick={onSaveFile} variant='contained' color='primary'>
            Save to file
          </Button>
          <Link to={Routes.Home}>
            <Button variant='contained' color='secondary'>
              Go to Home
            </Button>
          </Link>
        </Box>
      </Card>
    </Container>
  );
};

export default ResultPage;
