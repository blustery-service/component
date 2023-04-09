import React, { memo } from 'react';
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BadgeProps extends MuiBadgeProps {}

const Badge = (props: BadgeProps) => {
  const { children, ...other } = props;
  return <MuiBadge {...other}>{children}</MuiBadge>;
};

export default memo(Badge);
