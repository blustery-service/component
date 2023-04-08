import React, { memo } from 'react';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {}

const IconButton = (props: IconButtonProps) => {
  const { children, ...other } = props;
  return <MuiIconButton {...other}>{children}</MuiIconButton>;
};

export default memo(IconButton);
