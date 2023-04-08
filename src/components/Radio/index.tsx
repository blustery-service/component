import React, { memo } from 'react';
import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

export interface RadioProps extends MuiRadioProps {}

const Radio = (props: RadioProps) => {
  return <MuiRadio {...props} />;
};

export default memo(Radio);
