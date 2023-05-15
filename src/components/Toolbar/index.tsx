import React from 'react';
import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToolbarProps extends MuiToolbarProps {}

const Toolbar = (props: ToolbarProps) => {
  const { children, ...other } = props;
  return <MuiToolbar {...other}>{children}</MuiToolbar>;
};

export default Toolbar;
