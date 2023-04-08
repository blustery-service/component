import React, { memo } from 'react';
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material';

export interface AlertProps extends MuiAlertProps {}

const Alert = (props: AlertProps) => {
  const { children, ...other } = props;
  return <MuiAlert {...other}>{children}</MuiAlert>;
};

export default memo(Alert);
