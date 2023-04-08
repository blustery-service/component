import React, { memo } from 'react';
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';

export interface TooltipProps extends MuiTooltipProps {}

const Tooltip = (props: TooltipProps) => {
  const { children, ...other } = props;
  return <MuiTooltip {...other}>{children}</MuiTooltip>;
};

export default memo(Tooltip);
