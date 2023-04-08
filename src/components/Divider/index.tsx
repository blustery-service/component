import React, { memo } from 'react';
import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@mui/material';

export interface DividerProps extends MuiDividerProps {}

const Divider = (props: DividerProps) => {
  return <MuiDivider {...props} />;
};

export default memo(Divider);
