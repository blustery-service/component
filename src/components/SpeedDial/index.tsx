import React from 'react';
import { SpeedDial as MuiSpeedDial, SpeedDialProps as MuiSpeedDialProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SpeedDialProps extends MuiSpeedDialProps {}

const SpeedDial = (props: SpeedDialProps) => {
  const { children, ...other } = props;
  return <MuiSpeedDial {...other}>{children}</MuiSpeedDial>;
};

export default SpeedDial;
