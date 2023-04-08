import React, { memo } from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {}

const Typography = (props: TypographyProps) => {
  const { children, ...other } = props;
  return <MuiTypography {...other}>{children}</MuiTypography>;
};

export default memo(Typography);
