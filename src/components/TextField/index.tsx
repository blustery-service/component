import React, { memo } from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type TextFieldProps = MuiTextFieldProps;

const TextField = (props: TextFieldProps) => {
  return <MuiTextField {...props} />;
};

export default memo(TextField);
