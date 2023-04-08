import React, { memo } from 'react';
import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
} from '@mui/material';

export interface BackdropProps extends MuiBackdropProps {}

const Backdrop = (props: BackdropProps) => {
  const { children, ...other } = props;
  return <MuiBackdrop {...other}>{children}</MuiBackdrop>;
};

export default memo(Backdrop);
