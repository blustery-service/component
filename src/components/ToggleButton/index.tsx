import React from 'react';
import { ToggleButton as MuiToggleButton, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToggleButtonProps extends MuiToggleButtonProps {}

const ToggleButton = (props: ToggleButtonProps) => {
  return <MuiToggleButton {...props} />;
};

export default ToggleButton;
