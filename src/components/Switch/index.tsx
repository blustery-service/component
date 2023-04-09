import React, { memo } from 'react';
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SwitchProps extends MuiSwitchProps {}

const Switch = (props: SwitchProps) => {
  return <MuiSwitch {...props} />;
};

export default memo(Switch);
