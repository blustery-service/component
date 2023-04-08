import React, { memo } from 'react';
import { SpeedDial as MuiSpeedDial, SpeedDialProps as MuiSpeedDialProps } from '@mui/material';

export interface SpeedDialProps extends MuiSpeedDialProps {}

const SpeedDial = (props: SpeedDialProps) => {
  const { children, ...other } = props;
  return <MuiSpeedDial {...other}>{children}</MuiSpeedDial>;
};

export default memo(SpeedDial);
