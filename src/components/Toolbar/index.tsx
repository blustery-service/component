import React, { memo } from 'react';
import {
  Toolbar as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
} from '@mui/material';

export interface ToolbarProps extends MuiToolbarProps {}

const Toolbar = (props: ToolbarProps) => {
  const { children, ...other } = props;
  return <MuiToolbar {...other}>{children}</MuiToolbar>;
};

export default memo(Toolbar);
