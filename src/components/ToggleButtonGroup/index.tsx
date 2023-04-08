import React, { memo } from 'react';
import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';

export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {}

const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const { children, ...other } = props;
  return <MuiToggleButtonGroup {...other}>{children}</MuiToggleButtonGroup>;
};

export default memo(ToggleButtonGroup);
