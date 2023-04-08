import React, { memo } from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends MuiLinkProps {}

const Link = (props: LinkProps) => {
  const { children, ...other } = props;
  return <MuiLink {...other}>{children}</MuiLink>;
};

export default memo(Link);
