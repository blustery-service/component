import React, { memo } from 'react';
import {
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material';

export type TablePaginationProps = MuiTablePaginationProps;

const TablePagination = (props: TablePaginationProps) => {
  return <MuiTablePagination {...props} />;
};

export default memo(TablePagination);
