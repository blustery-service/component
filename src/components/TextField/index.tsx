import React, { memo } from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps;

const TextField = (props: TextFieldProps) => {
  return <MuiTextField {...props} />;
};

export default memo(TextField);
