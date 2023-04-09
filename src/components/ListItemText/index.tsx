import React from 'react';
import { ListItemText as MuiListItemText, ListItemTextProps as MuiListItemTextProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListItemTextProps extends MuiListItemTextProps {}

const ListItemText = (props: ListItemTextProps) => {
  const { children, ...other } = props;
  return <MuiListItemText {...other}>{children}</MuiListItemText>;
};

export default ListItemText;
