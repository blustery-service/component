import React, { memo } from 'react';
import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
} from '@mui/material';

export interface CardContentProps extends MuiCardContentProps {}

const CardContent = (props: CardContentProps) => {
  const { children, ...other } = props;
  return <MuiCardContent {...other}>{children}</MuiCardContent>;
};

export default memo(CardContent);
