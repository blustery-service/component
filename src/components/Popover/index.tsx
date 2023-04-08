import React, { memo } from 'react';
import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from '@mui/material';

export interface PopoverProps extends MuiPopoverProps {}

const Popover = (props: PopoverProps) => {
  const { children, ...other } = props;
  return <MuiPopover {...other}>{children}</MuiPopover>;
};

export default memo(Popover);
