import React, { memo } from 'react';
import {
  TableSortLabel as MuiTableSortLabel,
  TableSortLabelProps as MuiTableSortLabelProps,
} from '@mui/material';

export interface TableSortLabelProps extends MuiTableSortLabelProps {}

const TableSortLabel = (props: TableSortLabelProps) => {
  const { children, ...other } = props;
  return <MuiTableSortLabel {...other}>{children}</MuiTableSortLabel>;
};

export default memo(TableSortLabel);
