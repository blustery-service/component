import React from 'react';
import { TableRow as MuiTableRow, TableRowProps as MuiTableRowProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableRowProps extends MuiTableRowProps {}

const TableRow = (props: TableRowProps) => {
  const { children, ...other } = props;
  return <MuiTableRow {...other}>{children}</MuiTableRow>;
};

export default TableRow;
