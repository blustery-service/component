import React, { memo } from 'react';
import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
} from '@mui/material';

export interface TableCellProps extends MuiTableCellProps {}

const TableCell = (props: TableCellProps) => {
  const { children, ...other } = props;
  return <MuiTableCell {...other}>{children}</MuiTableCell>;
};

export default memo(TableCell);
