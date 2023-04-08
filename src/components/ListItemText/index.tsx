import React, { memo } from 'react';
import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material';

export interface ListItemTextProps extends MuiListItemTextProps {}

const ListItemText = (props: ListItemTextProps) => {
  const { children, ...other } = props;
  return <MuiListItemText {...other}>{children}</MuiListItemText>;
};

export default memo(ListItemText);
