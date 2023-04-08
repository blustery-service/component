import React, { memo } from 'react';
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from '@mui/material';

export interface DrawerProps extends MuiDrawerProps {}

const Drawer = (props: DrawerProps) => {
  const { children, ...other } = props;
  return <MuiDrawer {...other}>{children}</MuiDrawer>;
};

export default memo(Drawer);
