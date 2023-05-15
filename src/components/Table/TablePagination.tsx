import React from 'react';
import { TablePagination as MuiTablePagination, TablePaginationProps as MuiTablePaginationProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type TablePaginationProps = MuiTablePaginationProps;

const TablePagination = (props: TablePaginationProps) => {
  return <MuiTablePagination {...props} />;
};

export default TablePagination;
