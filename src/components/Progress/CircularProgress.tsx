import React, { memo } from 'react';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

export interface CircularProgressProps extends MuiCircularProgressProps {}

const CircularProgress = (props: CircularProgressProps) => {
  return <MuiCircularProgress {...props} />;
};

export default memo(CircularProgress);
