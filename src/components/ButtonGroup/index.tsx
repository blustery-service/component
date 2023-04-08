import React, { memo } from 'react';
import {
  ButtonGroupProps as MuiButtonGroupProps,
  ButtonGroup as MuiButtonGroup,
} from '@mui/material';

export interface ButtonGroupProps extends MuiButtonGroupProps {}

const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, ...other } = props;
  return <MuiButtonGroup {...other}>{children}</MuiButtonGroup>;
};

export default memo(ButtonGroup);
