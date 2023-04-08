import React, { memo } from 'react';
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';

export interface MenuProps extends MuiMenuProps {}

const Menu = (props: MenuProps) => {
  const { children, ...other } = props;
  return <MuiMenu {...other}>{children}</MuiMenu>;
};

export default memo(Menu);
