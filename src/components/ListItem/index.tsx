import React, { memo } from 'react';
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@mui/material';

export interface ListItemProps extends MuiListItemProps {}

const ListItem = (props: ListItemProps) => {
  const { children, ...other } = props;
  return <MuiListItem {...other}>{children}</MuiListItem>;
};

export default memo(ListItem);
