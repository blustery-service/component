import React from 'react';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CircularProgressProps extends MuiCircularProgressProps {}

const CircularProgress = (props: CircularProgressProps) => {
  return <MuiCircularProgress {...props} />;
};

export default CircularProgress;
