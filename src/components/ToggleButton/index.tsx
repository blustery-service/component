import React, { memo } from 'react';
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material';

export interface ToggleButtonProps extends MuiToggleButtonProps {}

const ToggleButton = (props: ToggleButtonProps) => {
  return <MuiToggleButton {...props} />;
};

export default memo(ToggleButton);
