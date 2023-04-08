import React, { memo } from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

export interface CardProps extends MuiCardProps {}

const Card = (props: CardProps) => {
  const { children, ...other } = props;
  return <MuiCard {...other}>{children}</MuiCard>;
};

export default memo(Card);
