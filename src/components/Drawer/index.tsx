import React from 'react';
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DrawerProps extends MuiDrawerProps {}

const Drawer = (props: DrawerProps) => {
  const { children, ...other } = props;
  return <MuiDrawer {...other}>{children}</MuiDrawer>;
};

export default Drawer;
