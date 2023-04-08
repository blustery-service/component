import React, { memo } from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';

export interface BoxProps extends MuiBoxProps {}

const Box = (props: BoxProps) => {
  const { children, ...other } = props;
  return <MuiBox {...other}>{children}</MuiBox>;
};

export default memo(Box);
