import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { Controller } from 'react-hook-form';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import { v4 as uuid } from 'uuid';
import { Control } from 'react-hook-form/dist/types/form';

import { ITestData } from '../../common/types';
import { getAnswerCardStyles } from './styles';

interface IProps {
  data: ITestData;
  isShowError: boolean;
  control: Control;
  answerNumber: number;
}

const AnswerCard: FC<IProps> = (props) => {
  const { data, isShowError, control, answerNumber } = props;
  const { name, label, additionalFields } = data;

  const styles = getAnswerCardStyles();

  const answerLabel = `${answerNumber}. ${label}`;

  return (
    <Grid container item md={12} className={styles.root}>
      <Hidden>
        <Grid item md={2} />
      </Hidden>
      <Grid md={8} item>
        <Controller as={RadioGroup} name={name} control={control} rules={{ required: true }}>
          <FormLabel component='legend'>{answerLabel}</FormLabel>
          {additionalFields.map((field: string) => (
            <FormControlLabel key={uuid()} value={field} control={<Radio />} label={field} />
          ))}
          {isShowError && <FormHelperText>This field should not be empty</FormHelperText>}
        </Controller>
      </Grid>
      <Hidden>
        <Grid item md={2} />
      </Hidden>
    </Grid>
  );
};

export default AnswerCard;
