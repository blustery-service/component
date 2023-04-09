import React, { memo } from 'react';
import { CardHeader as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardHeaderProps extends MuiCardHeaderProps {}

const CardHeader = (props: CardHeaderProps) => {
  const { children, ...other } = props;
  return <MuiCardHeader {...other}>{children}</MuiCardHeader>;
};

export default memo(CardHeader);
