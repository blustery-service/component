import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, ...other } = props;
  return <MuiBreadcrumbs {...other}>{children}</MuiBreadcrumbs>;
};

export default Breadcrumbs;
