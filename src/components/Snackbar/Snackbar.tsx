import React, { memo } from 'react';
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from '@mui/material';

export interface SnackbarProps extends MuiSnackbarProps {}

const Snackbar = (props: SnackbarProps) => {
  const { children, ...other } = props;
  return <MuiSnackbar {...other}>{children}</MuiSnackbar>;
};

export default memo(Snackbar);
