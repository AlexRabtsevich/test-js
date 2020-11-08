import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import useAccountService from '../../utils/use-account-service';
import { testData } from '../../utils/test-data';
import AnswerCard from './answer-card';
import { IResult, ITestData } from '../../common/types';
import { getTestPageStyles } from './styles';
import { Routes } from '../../common/routes';

const TestPage: FC = () => {
  const accountService = useAccountService();
  const { errors, control, handleSubmit } = useForm();
  const { push } = useHistory();

  const profile = accountService.getProfile();
  const tesTitle = `${profile?.lastName} - ${profile?.numberOfGroup}`;

  const getRating = (answers: boolean[]): string => {
    const rightAnswers: number = answers.filter((answer) => answer).length;

    return `${rightAnswers} / ${testData.length}`;
  };

  const onSubmit = (data: Record<string, string>) => {
    const newAnswers = testData.map((field) => {
      return data[field.name] === field.value;
    });

    const result: IResult = {
      lastName: `${profile?.lastName}`,
      rating: getRating(newAnswers),
    };

    accountService.setResult(result);
    push(Routes.Result);
  };

  const isShowError = (data: ITestData) => !!errors[data.name];

  const styles = getTestPageStyles();

  return (
    <Container className={styles.root}>
      <Card>
        <Box>
          <Typography variant='subtitle1' align='right'>
            {tesTitle}
          </Typography>
          <Typography variant='h4' align='center'>
            JavaScript Test
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction='column' item md={12}>
              {testData.map((data, index) => (
                <AnswerCard
                  data={data}
                  isShowError={isShowError(data)}
                  control={control}
                  answerNumber={index + 1}
                  key={data.value}
                />
              ))}
            </Grid>
            <Grid container alignContent='flex-end' justify='center'>
              <Button variant='contained' color='secondary' type='submit'>
                Check answers
              </Button>
            </Grid>
          </form>
        </Box>
      </Card>
    </Container>
  );
};

export default TestPage;
