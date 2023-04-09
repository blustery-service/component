import React from 'react';
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppBarProps extends MuiAppBarProps {}

const AppBar = (props: AppBarProps) => {
  const { children, ...other } = props;
  return <MuiAppBar {...other}>{children}</MuiAppBar>;
};

export default AppBar;
