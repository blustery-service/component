import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IconButtonProps extends MuiIconButtonProps {}

const IconButton = (props: IconButtonProps) => {
  const { children, ...other } = props;
  return <MuiIconButton {...other}>{children}</MuiIconButton>;
};

export default IconButton;
