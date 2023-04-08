import React, { memo } from 'react';
import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material';

export interface PaginationProps extends MuiPaginationProps {}

const Pagination = (props: PaginationProps) => {
  return <MuiPagination {...props} />;
};

export default memo(Pagination);
