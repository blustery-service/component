import React, { memo } from 'react';
import {
  CardActionArea as MuiCardActionArea,
  CardActionAreaProps as MuiCardActionAreaProps,
} from '@mui/material';

export interface CardActionAreaProps extends MuiCardActionAreaProps {}

const CardActionArea = (props: CardActionAreaProps) => {
  const { children, ...other } = props;
  return <MuiCardActionArea {...other}>{children}</MuiCardActionArea>;
};

export default memo(CardActionArea);
