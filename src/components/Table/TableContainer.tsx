import React, { memo } from 'react';
import { TableContainer as MuiTableContainer, TableContainerProps as MuiTableContainerProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableContainerProps extends MuiTableContainerProps {}

const TableContainer = (props: TableContainerProps) => {
  const { children, ...other } = props;
  return <MuiTableContainer {...other}>{children}</MuiTableContainer>;
};

export default memo(TableContainer);
