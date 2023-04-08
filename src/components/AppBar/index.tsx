import React, { memo } from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@mui/material';

export interface AppBarProps extends MuiAppBarProps {}

const AppBar = (props: AppBarProps) => {
  const { children, ...other } = props;
  return <MuiAppBar {...other}>{children}</MuiAppBar>;
};

export default memo(AppBar);
