import React from 'react';
import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuItemProps extends MuiMenuItemProps {}

const MenuItem = (props: MenuItemProps) => {
  const { children, ...other } = props;
  return <MuiMenuItem {...other}>{children}</MuiMenuItem>;
};

export default MenuItem;
