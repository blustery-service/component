import React, { memo } from 'react';
import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
} from '@mui/material';

export interface ListItemIconProps extends MuiListItemIconProps {}

const ListItemIcon = (props: ListItemIconProps) => {
  const { children, ...other } = props;
  return <MuiListItemIcon {...other}>{children}</MuiListItemIcon>;
};

export default memo(ListItemIcon);
