import React from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BoxProps extends MuiBoxProps {}

const Box = (props: BoxProps) => {
  const { children, ...other } = props;
  return <MuiBox {...other}>{children}</MuiBox>;
};

export default Box;
