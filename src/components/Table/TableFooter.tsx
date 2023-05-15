import React from 'react';
import { TableFooter as MuiTableFooter, TableFooterProps as MuiTableFooterProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableFooterProps extends MuiTableFooterProps {}

const TableFooter = (props: TableFooterProps) => {
  const { children, ...other } = props;
  return <MuiTableFooter {...other}>{children}</MuiTableFooter>;
};

export default TableFooter;
