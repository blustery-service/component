import React from 'react';
import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioProps extends MuiRadioProps {}

const Radio = (props: RadioProps) => {
  return <MuiRadio {...props} />;
};

export default Radio;
