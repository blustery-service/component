import React, { memo } from 'react';
import { Table as MuiTable, TableProps as MuiTableProps } from '@mui/material';

export interface TableProps extends MuiTableProps {}

const Table = (props: TableProps) => {
  const { children, ...other } = props;
  return <MuiTable {...other}>{children}</MuiTable>;
};

export default memo(Table);
