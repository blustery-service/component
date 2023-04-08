import React, { memo } from 'react';
import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material';

export interface FabProps extends MuiFabProps {}

const Fab = (props: FabProps) => {
  const { children, ...other } = props;
  return <MuiFab {...other}>{children}</MuiFab>;
};

export default memo(Fab);
