import React, { memo } from 'react';
import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContainerProps extends MuiContainerProps {}

const Container = (props: ContainerProps) => {
  const { children, ...other } = props;
  return <MuiContainer {...other}>{children}</MuiContainer>;
};

export default memo(Container);
