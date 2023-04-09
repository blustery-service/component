import React, { memo } from 'react';
import { TableHead as MuiTableHead, TableHeadProps as MuiTableHeadProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableHeadProps extends MuiTableHeadProps {}

const TableHead = (props: TableHeadProps) => {
  const { children, ...other } = props;
  return <MuiTableHead {...other}>{children}</MuiTableHead>;
};

export default memo(TableHead);
