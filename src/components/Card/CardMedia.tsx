import React, { memo } from 'react';
import { CardMedia as MuiCardMedia, CardMediaProps as MuiCardMediaProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardMediaProps extends MuiCardMediaProps {}

const CardMedia = (props: CardMediaProps) => {
  const { children, ...other } = props;
  return <MuiCardMedia {...other}>{children}</MuiCardMedia>;
};

export default memo(CardMedia);
