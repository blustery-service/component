import React, { memo } from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

export interface PaperProps extends MuiPaperProps {}

const Paper = (props: PaperProps) => {
  const { children, ...other } = props;
  return <MuiPaper {...other}>{children}</MuiPaper>;
};

export default memo(Paper);
