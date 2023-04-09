import React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LinkProps extends MuiLinkProps {}

const Link = (props: LinkProps) => {
  const { children, ...other } = props;
  return <MuiLink {...other}>{children}</MuiLink>;
};

export default Link;
