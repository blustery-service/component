import React, { memo } from 'react';
import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material';

export interface LinearProgressProps extends MuiLinearProgressProps {}

const LinearProgress = (props: LinearProgressProps) => {
  return <MuiLinearProgress {...props} />;
};

export default memo(LinearProgress);
