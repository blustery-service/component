import React from 'react';
import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableCellProps extends MuiTableCellProps {}

const TableCell = (props: TableCellProps) => {
  const { children, ...other } = props;
  return <MuiTableCell {...other}>{children}</MuiTableCell>;
};

export default TableCell;
