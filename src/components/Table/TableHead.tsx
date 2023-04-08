import React, { memo } from 'react';
import {
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps,
} from '@mui/material';

export interface TableHeadProps extends MuiTableHeadProps {}

const TableHead = (props: TableHeadProps) => {
  const { children, ...other } = props;
  return <MuiTableHead {...other}>{children}</MuiTableHead>;
};

export default memo(TableHead);
