import React, { memo } from 'react';
import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from '@mui/material';

export interface ClickAwayListenerProps extends MuiClickAwayListenerProps {}

const ClickAwayListener = (props: ClickAwayListenerProps) => {
  const { children, ...other } = props;
  return <MuiClickAwayListener {...other}>{children}</MuiClickAwayListener>;
};

export default memo(ClickAwayListener);
