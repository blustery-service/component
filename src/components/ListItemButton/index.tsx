import React from 'react';
import { ListItemButton as MuiListItemButton, ListItemButtonProps as MuiListItemButtonProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListItemButtonProps extends MuiListItemButtonProps {}

const ListItemButton = (props: ListItemButtonProps) => {
  const { children, ...other } = props;
  return <MuiListItemButton {...other}>{children}</MuiListItemButton>;
};

export default ListItemButton;
