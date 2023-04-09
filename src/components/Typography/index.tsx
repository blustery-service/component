import React from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TypographyProps extends MuiTypographyProps {}

const Typography = (props: TypographyProps) => {
  const { children, ...other } = props;
  return <MuiTypography {...other}>{children}</MuiTypography>;
};

export default Typography;
