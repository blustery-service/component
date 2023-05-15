import React, { memo, forwardRef, ForwardedRef } from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type TextFieldProps = MuiTextFieldProps;

// eslint-disable-next-line react/display-name
const TextField = forwardRef((props: TextFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <MuiTextField ref={ref} {...props} />;
});

export default TextField;
