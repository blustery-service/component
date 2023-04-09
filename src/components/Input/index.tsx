import React from 'react';
import { Input as MuiInput, InputProps as MuiInputProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps extends MuiInputProps {}

const Input = (props: InputProps) => {
  return <MuiInput {...props} />;
};

export default Input;
