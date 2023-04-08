import React, { memo } from 'react';
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material';

export interface SwitchProps extends MuiSwitchProps {}

const Switch = (props: SwitchProps) => {
  return <MuiSwitch {...props} />;
};

export default memo(Switch);
