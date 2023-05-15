import React from 'react';
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuProps extends MuiMenuProps {}

const Menu = (props: MenuProps) => {
  const { children, ...other } = props;
  return <MuiMenu {...other}>{children}</MuiMenu>;
};

export default Menu;
