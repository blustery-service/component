import React from 'react';
import { ButtonGroupProps as MuiButtonGroupProps, ButtonGroup as MuiButtonGroup } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonGroupProps extends MuiButtonGroupProps {}

const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, ...other } = props;
  return <MuiButtonGroup {...other}>{children}</MuiButtonGroup>;
};

export default ButtonGroup;
