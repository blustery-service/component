import React from 'react';
import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ClickAwayListenerProps extends MuiClickAwayListenerProps {}

const ClickAwayListener = (props: ClickAwayListenerProps) => {
  const { children, ...other } = props;
  return <MuiClickAwayListener {...other}>{children}</MuiClickAwayListener>;
};

export default ClickAwayListener;
