import React, { memo } from 'react';
import { TableBody as MuiTableBody, TableBodyProps as MuiTableBodyProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableBodyProps extends MuiTableBodyProps {}

const TableBody = (props: TableBodyProps) => {
  const { children, ...other } = props;
  return <MuiTableBody {...other}>{children}</MuiTableBody>;
};

export default memo(TableBody);
