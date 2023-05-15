import React from 'react';
import { InputAdornment as MuiInputAdornment, InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputAdornmentProps extends MuiInputAdornmentProps {}

const InputAdornment = (props: InputAdornmentProps) => {
  const { children, ...other } = props;
  return <MuiInputAdornment {...other}>{children}</MuiInputAdornment>;
};

export default InputAdornment;
