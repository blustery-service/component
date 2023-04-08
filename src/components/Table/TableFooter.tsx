import React, { memo } from 'react';
import {
  TableFooter as MuiTableFooter,
  TableFooterProps as MuiTableFooterProps,
} from '@mui/material';

export interface TableFooterProps extends MuiTableFooterProps {}

const TableFooter = (props: TableFooterProps) => {
  const { children, ...other } = props;
  return <MuiTableFooter {...other}>{children}</MuiTableFooter>;
};

export default memo(TableFooter);
