import React from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaperProps extends MuiPaperProps {}

const Paper = (props: PaperProps) => {
  const { children, ...other } = props;
  return <MuiPaper {...other}>{children}</MuiPaper>;
};

export default Paper;
