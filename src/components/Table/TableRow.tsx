import React, { memo } from 'react';
import {
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps,
} from '@mui/material';

export interface TableRowProps extends MuiTableRowProps {}

const TableRow = (props: TableRowProps) => {
  const { children, ...other } = props;
  return <MuiTableRow {...other}>{children}</MuiTableRow>;
};

export default memo(TableRow);
