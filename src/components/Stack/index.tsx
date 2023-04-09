import React from 'react';
import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StackProps extends MuiStackProps {}

const Stack = (props: StackProps) => {
  const { children, ...other } = props;
  return <MuiStack {...other}>{children}</MuiStack>;
};

export default Stack;
