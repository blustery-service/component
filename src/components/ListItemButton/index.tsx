import React, { memo } from 'react';
import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

export interface ListItemButtonProps extends MuiListItemButtonProps {}

const ListItemButton = (props: ListItemButtonProps) => {
  const { children, ...other } = props;
  return <MuiListItemButton {...other}>{children}</MuiListItemButton>;
};

export default memo(ListItemButton);
