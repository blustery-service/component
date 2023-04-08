import React, { memo } from 'react';
import {
  SnackbarContent as MuiSnackbarContent,
  SnackbarContentProps as MuiSnackbarContentProps,
} from '@mui/material';

export interface SnackbarContentProps extends MuiSnackbarContentProps {}

const SnackbarContent = (props: SnackbarContentProps) => {
  return <MuiSnackbarContent {...props} />;
};

export default memo(SnackbarContent);
