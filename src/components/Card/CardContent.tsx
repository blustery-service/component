import React from 'react';
import { CardContent as MuiCardContent, CardContentProps as MuiCardContentProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardContentProps extends MuiCardContentProps {}

const CardContent = (props: CardContentProps) => {
  const { children, ...other } = props;
  return <MuiCardContent {...other}>{children}</MuiCardContent>;
};

export default CardContent;
