import React, { memo } from 'react';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps extends MuiAvatarProps {}

const Avatar = (props: AvatarProps) => {
  const { children, ...other } = props;
  return <MuiAvatar {...other}>{children}</MuiAvatar>;
};

export default memo(Avatar);
