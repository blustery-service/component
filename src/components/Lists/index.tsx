import React, { memo } from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListProps extends MuiListProps {}

const List = (props: ListProps) => {
  const { children, ...other } = props;
  return <MuiList {...other}>{children}</MuiList>;
};

export default memo(List);
