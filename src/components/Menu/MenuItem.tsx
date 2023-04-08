import React, { memo } from 'react';
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';

export interface MenuItemProps extends MuiMenuItemProps {}

const MenuItem = (props: MenuItemProps) => {
  const { children, ...other } = props;
  return <MuiMenuItem {...other}>{children}</MuiMenuItem>;
};

export default memo(MenuItem);
