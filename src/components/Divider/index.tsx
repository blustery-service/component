import React from 'react';
import { Divider as MuiDivider, DividerProps as MuiDividerProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DividerProps extends MuiDividerProps {}

const Divider = (props: DividerProps) => {
  return <MuiDivider {...props} />;
};

export default Divider;
